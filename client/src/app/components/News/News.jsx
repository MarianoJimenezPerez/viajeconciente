import Link from "next/link";
import "./News.css";
import BlogCard from "../BlogCard/BlogCard";
import axios from "axios";

const fetchData = async () => {
  try {
    const postResponse = await axios.get("http://localhost:8080/api/posts/type/2");
    
    const modifiedPosts = await Promise.all(
      postResponse.data.map(async (blog) => {
        const cid = blog.cid;
        const categoryResponse = await axios.get(`http://localhost:8080/api/categories/${cid}`);
        return { ...blog, cat: categoryResponse.data.label };
      })
    );
    
    return modifiedPosts;
  } catch (error) {
    console.log(error);
  }
};

export default async function News() {
  const data = await fetchData();
  console.log(data);
  return (
    <div className="news">
      <div className="container">
        <div className="left">
          <h5>Últimas novedades</h5>
          <div className="news__container">
            {data && data.map((blog) => <BlogCard data={blog} key={blog.id} />)}
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
