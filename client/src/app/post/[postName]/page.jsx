import BlogCard from "@/app/components/BlogCard/BlogCard";
import Link from "next/link";
import "./PostName.css";
import NewsletterVertical from "@/app/components/NewsletterVertical/NewsletterVertical";
import FeatureBlog from "@/app/components/FeatureBlog/FeatureBlog";
import AddSpace from "@/app/components/AddSpace/AddSpace";

export default function PostPage() {
  return (
    <div className="post__page">
      <div className="container">
        <section className="left">
          <div className="post__heading">
            <div className="breadcrumb">
              <span>
                <Link href={"#"}>Home</Link> // <Link href={"#"}>Category</Link>{" "}
                // Scalable Cloud Computing For Online Businesses
              </span>
            </div>
            <img
              src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/02/save-money-with-tech-3-400x240.jpg"
              alt="s"
            />
            <h1>Scalable Cloud Computing For Online Businesses</h1>
            <div className="post__details">
              <span>Publish date: April 7, 2023</span>
              <span>By: Viajeconciente</span>
              <span>
                Category: <Link href={"#"}>Bussiness</Link>
              </span>
            </div>
          </div>
          <article className="post__body">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              excepturi aliquid atque dolor illo ullam harum, maxime explicabo
              sequi laboriosam dicta iste corrupti accusantium quam corporis
            </p>
          </article>
        </section>
        <aside className="right">
          <h6>Similar posts</h6>
          <FeatureBlog />
          <FeatureBlog />
          <FeatureBlog />
          <AddSpace />
          <NewsletterVertical />
        </aside>
      </div>
    </div>
  );
}
