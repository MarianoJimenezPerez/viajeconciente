import "./FeatureBlogs.css";
import axios from "axios";
import FeatureBlog from "../FeatureBlog/FeatureBlog";

const getFeatureBlogs = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/posts/quantity/6");

    //retorno los 3 anteriores a los que renderiza el Hero component
    return res.data.slice(3, 6);
  } catch (error) {
    console.log(error);
  }
};
export default async function FeatureBlogs() {
  const data =await getFeatureBlogs();
  return (
    <section className="feature__blogs__container">
      <div className="container feature__blogs">
        {data && data.map((blog) => (
          <FeatureBlog data={blog} key={blog.id}/>
        ))}
      </div>
    </section>
  );
}
