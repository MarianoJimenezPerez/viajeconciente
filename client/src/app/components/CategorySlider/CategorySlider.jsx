import Link from "next/link";
import "./CategorySlider.css";
import axios from "axios";

const fetchData = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/posts/category/3");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export default async function CategorySlider() {
  const data = await fetchData();
  return (
    <div className="category__slider">
      <div className="container">
        <h6 className="category__slider__title">Viajes con amigos</h6>
        <div className="category__slider__slider">
          {data.map((blog) => (
            <div className="slide">
              <img src={`http://localhost:3000/uploads/${blog.img}`}/>
              <Link href={`/post/${blog.slug}`}>
                <h5>{blog.title}</h5>
              </Link>
              <span>{blog.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
