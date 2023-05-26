import Link from "next/link";
import "./FeatureBlogs.css";
import FeatureBlog from "../FeatureBlog/FeatureBlog";
export default function FeatureBlogs() {
  return (
    <section className="feature__blogs__container">
      <div className="container feature__blogs">
        <FeatureBlog />
        <FeatureBlog />
        <FeatureBlog />
      </div>
    </section>
  );
}
