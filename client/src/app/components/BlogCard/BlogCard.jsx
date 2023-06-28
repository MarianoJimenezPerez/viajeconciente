import Link from "next/link";
import "./BlogCard.css";
import { formatHtml, formatText } from "@/app/utils";


export default function BlogCard({ data }) {
  const { title, img, cid, desc, slug, cat } = data;
  console.log(data)
  return (
    <article className="blog__card__h">
      <div className="blog__card__h__img">
        <img src={`http://localhost:3000/uploads/${img}`} />
      </div>
      <div className="blog__card__h__content">
        <h6>{cat}</h6>
        <Link href={`/post/${slug}`}>
          <h4>{title}</h4>
        </Link>
        <p>{formatText(formatHtml(desc), 92)}</p>
        <Link href={`/post/${slug}`} className="cta">
          Leer más
        </Link>
      </div>
    </article>
  );
}
