import BlogCard from "@/app/components/BlogCard/BlogCard";
import Link from "next/link";
import "./PostName.css";
import NewsletterVertical from "@/app/components/NewsletterVertical/NewsletterVertical";
import FeatureBlog from "@/app/components/FeatureBlog/FeatureBlog";
import AddSpace from "@/app/components/AddSpace/AddSpace";
import axios from "axios";
import { formatHtml } from "@/app/utils";

const fetchPost = async (postSlug) => {
  try {
    const postResponse = await axios.get(
      "http://localhost:8080/api/posts/slug/" + postSlug
    );
    const cid = postResponse.data[0].cid;
    const categoryResponse = await axios.get(
      `http://localhost:8080/api/categories/${cid}`
    );

    return [postResponse, categoryResponse];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default async function PostPage({ params }) {
  const { postSlug } = params;
  const post = await fetchPost(postSlug);

  return (
    <div className="post__page">
      <div className="container">
        <section className="left">
          <div className="post__heading">
            <div className="breadcrumb">
              <span>
                <Link href={"/"}>Home</Link> // <Link href={"/categorias"}>{post[1].data.label}</Link>{" "}
                // {post[0].data[0].title}
              </span>
            </div>
            <img
              src={`http://localhost:3000/uploads/${post[0].data[0].img}`}
              alt={post[0].data[0].title}
            />
            <h1>{post[0].data[0].title}</h1>
            <div className="post__details">
              <span>Publicado: {post[0].data[0].date}</span>
              <span>Autor: Viajeconciente</span>
              <span>
                Categoría: <Link href={"/categorias"}>{post[1].data.label}</Link>
              </span>
            </div>
          </div>
          <article className="post__body">
            <p>{formatHtml(post[0].data[0].desc)}</p>
          </article>
        </section>
        <aside className="right">
          <h6>Similar posts</h6>
          {/* <FeatureBlog />
          <FeatureBlog />
          <FeatureBlog /> */}
          <AddSpace />
          <NewsletterVertical />
        </aside>
      </div>
    </div>
  );
}
