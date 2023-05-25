import Link from "next/link";
import "./FeatureBlogs.css";
export default function FeatureBlogs() {
  return (
    <section className="feature__blogs__container">
      <div className="container feature__blogs">
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
      </div>
    </section>
  );
}
