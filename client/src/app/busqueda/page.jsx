"use client";
import { useSearchParams } from "next/navigation";
import AddSpace from "../components/AddSpace/AddSpace";
import BlogCard from "../components/BlogCard/BlogCard";
import NewsletterVertical from "../components/NewsletterVertical/NewsletterVertical";
import "./SearchPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const busqueda = searchParams.get("q");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/posts/search?searchTerm=" + busqueda
        );
        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, [busqueda]);

  return (
    <div className="search__page">
      <div className="container">
        <div className="left">
          <h1>Results for "{busqueda}"</h1>
          {blogs && blogs.map((blog) => <BlogCard key={blog.id} data={blog}/>)}
        </div>
        <div className="right">
          <AddSpace />
          <NewsletterVertical />
        </div>
      </div>
    </div>
  );
}
