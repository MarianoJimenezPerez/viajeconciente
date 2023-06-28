import React from "react";
import "./CategoryBlog.css";
import { formatHtml, formatText } from "@/app/utils";
import Link from "next/link";

export default function CategoryBlog({ data, cat }) {
  const { title, desc, img, date, slug } = data;

  return (
    <div className="blog">
      <div className="blog__img">
        <img src={`http://localhost:3000/uploads/${img}`} />
        <span>{cat}</span>
      </div>
      <div className="blog__content">
        <Link href={`/post/${slug}`}><h4>{title}</h4></Link>
        <p>{formatText(formatHtml(desc), 96)}</p>
        <span>{date}</span>
      </div>
    </div>
  );
}
