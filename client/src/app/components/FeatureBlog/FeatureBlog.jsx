import Link from "next/link";
import "./FeatureBlog.css";
import { formatText } from "@/app/utils";
export default function FeatureBlog({ data }) {
  const { title, clabel, img, slug } = data;
  return (
    <article className="feature__blog">
      <div className="feature__blog__img">
        <img src={`http://localhost:3000/uploads/${img}`} alt="Sample" />
      </div>
      <div className="feature__blog__content">
        <Link href={`/post/${slug}`}>
          <h4>{formatText(title, 80)}</h4>
        </Link>

        <p>
          Categories: <Link href={"#"}>{clabel}</Link>
        </p>
      </div>
    </article>
  );
}
