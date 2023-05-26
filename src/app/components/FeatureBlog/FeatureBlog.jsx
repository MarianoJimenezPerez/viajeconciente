import Link from "next/link";
import "./FeatureBlog.css";
export default function FeatureBlog() {
  return (
    <Link href={"#"}>
      <article className="feature__blog">
        <div className="feature__blog__img">
          <img
            src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/03/healthy-snacks-200x120.jpg"
            alt="Sample"
          />
        </div>
        <div className="feature__blog__content">
          <h4>Easy & Healthy Snack Ideas To Keep You Energized</h4>
          <p>
            Categories: <Link href={"#"}>Food</Link>
          </p>
        </div>
      </article>
    </Link>
  );
}
