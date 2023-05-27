import AddSpace from "../components/AddSpace/AddSpace";
import BlogCard from "../components/BlogCard/BlogCard";
import NewsletterVertical from "../components/NewsletterVertical/NewsletterVertical";
import "./SearchPage.css"

export default function SearchPage() {
  return (
    <div className="search__page">
      <div className="container">
        <div className="left">
          <h1>Results for "Business"</h1>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="right">
            <AddSpace />
            <NewsletterVertical />
        </div>
      </div>
    </div>
  );
}
