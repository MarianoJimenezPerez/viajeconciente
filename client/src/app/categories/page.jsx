import BlogCard from "@/app/components/BlogCard/BlogCard";
import NewsletterVertical from "@/app/components/NewsletterVertical/NewsletterVertical";
import AddSpace from "@/app/components/AddSpace/AddSpace";
import "./Category.css";
export default function CategoryPage() {
  return (
    <div className="category__page">
      <div className="container">
        <div className="left">
          <div className="category__heading">
            <h1>Category name</h1>
            <select name="select" defaultValue={"Value 1"}>
              <option value="value1" selected>
                Value 1
              </option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <AddSpace />
        </div>
        <div className="right">
          <NewsletterVertical />
        </div>
      </div>
    </div>
  );
}
