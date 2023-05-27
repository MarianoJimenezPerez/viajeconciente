import Link from "next/link";
import "./BlogCard.css";
export default function BlogCard() {
  return (
    <article className="blog__card__h">
      <div className="blog__card__h__img">
        <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/02/save-money-with-tech-3-400x240.jpg" />
      </div>
      <div className="blog__card__h__content">
        <h6>Businesses</h6>
        <Link href={"#"}>
          <h4>Scalable Cloud Computing For Online Businesses</h4>
        </Link>
        <p>
          Elementum nulla turpis cursus. Integer liberos kusto euismod aene
          pretium faucibus ...
        </p>
        <Link href={"#"} className="cta">
          Read more
        </Link>
      </div>
    </article>
  );
}
