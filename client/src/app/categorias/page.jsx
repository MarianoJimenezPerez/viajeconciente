"use client";
import BlogCard from "@/app/components/BlogCard/BlogCard";
import NewsletterVertical from "@/app/components/NewsletterVertical/NewsletterVertical";
import AddSpace from "@/app/components/AddSpace/AddSpace";
import "./Category.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CategoryPage({ searchParams }) {
  const [categories, setCategories] = useState([]);
  const [catSelected, setCatSelected] = useState({ label: "Todas", id: 0 });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/categories");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!catSelected) return;
    const q =
      catSelected.label === "Todas"
        ? "http://localhost:8080/api/posts"
        : `http://localhost:8080/api/posts/category/${catSelected.id}`;

    const fetchBlogs = async () => {
      try {
        const res = await axios.get(q);

        console.log(res.data);

        setBlogs(res.data);
      } catch (error) {
        setBlogs([])
      }
    };
    fetchBlogs();
  }, [catSelected]);

  const handleCategoryChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const label = selectedOption.getAttribute("data-label");
    const id = selectedOption.getAttribute("data-id");
    setCatSelected({ label, id });
  };

  return (
    <div className="category__page">
      <div className="container">
        <div className="left">
          <div className="category__heading">
            <h1>{catSelected.label}</h1>
            <select
              name="select"
              defaultValue={"Seleccionar categoría"}
              onChange={handleCategoryChange}
            >
              <option value="seleccionar" disabled>
                Seleccionar categoría
              </option>
              <option value="Todas" data-label="Todas" data-id={0}>
                Todas
              </option>
              {categories &&
                categories.map((cat) => (
                  <option
                    value={cat.value}
                    key={cat.id}
                    data-label={cat.label}
                    data-id={cat.id}
                  >
                    {cat.label}
                  </option>
                ))}
            </select>
          </div>
          {blogs.length === 0 ? (
            <p>No se han encontrado resultados</p>
          ) : (
            blogs.map((blog) => <BlogCard data={blog} key={blog.id} />)
          )}
          <AddSpace />
        </div>
        <div className="right">
          <NewsletterVertical />
        </div>
      </div>
    </div>
  );
}
