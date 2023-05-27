import Link from "next/link";
import "./News.css";
import BlogCard from "../BlogCard/BlogCard";

export default function News() {
  return (
    <div className="news">
      <div className="container">
        <div className="left">
          <h5>Popular News & Articles</h5>
          <div className="news__container">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="right">
          <div className="add__space">Add space</div>
          <div className="news__carousel">
            <h5>Weekly Popular</h5>
            <Link className="slide" href={"#"}>
              <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/02/experience-magical-resources-4.jpg" />
              <div>
                <h4>Top 10 Destinations For Barcelona</h4>
                <p>
                  Categories: <span>Security</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
