import axios from "axios";
import NewsletterVertical from "../NewsletterVertical/NewsletterVertical";
import "./Categories.css";
import CategoryBlog from "../CategoryBlog/CategoryBlog";

const getCategoryBlogs = async (catId) => {
  if (typeof catId !== "number") catId == 2;
  try {
    const postsResponse = await axios.get(
      `http://localhost:8080/api/posts/category/${catId}`
    );
    const categoryResponse = await axios.get(
      `http://localhost:8080/api/categories/${catId}`
    );
    return [postsResponse, categoryResponse];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default async function Categories() {
  const data = await getCategoryBlogs(2);
  return (
    <div className="categories">
      <div className="container">
        <div className="left">
          <h5 className="categorie__title">Viajes en familia</h5>
          <div className="categorie__blogs__container">
            {data[0].data.map((blog) => (
              <CategoryBlog data={blog} key={blog.id} cat={data[1].data.label} />
            ))}
          </div>
        </div>
        <div className="right">
          <NewsletterVertical />
        </div>
      </div>
    </div>
  );
}
