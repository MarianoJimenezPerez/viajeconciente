import { formatText } from "@/app/utils";
import axios from "axios";
import Link from "next/link";

const getLatestPost = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/posts/quantity/3");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Hero() {
  const data = await getLatestPost();
  return (
    <div className="container">
      <div className="hero">
        <div className="left">
          <div className="blog__card blog__card-big">
            <img src={`http://localhost:3000/uploads/${data[0].img}`} />
            <div className="blog__card__content">
              <span>{data[0].clabel}</span>
              <Link href={`/post/${data[0].slug}`}>
                <h3>{formatText(data[0].title, 45)}</h3>
              </Link>
              <p>Autor: Viajeconsciente | Última vez: {data[0].date}</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="blog__card">
            <img src={`http://localhost:3000/uploads/${data[1].img}`} />
            <div className="blog__card__content">
              <span>{data[1].clabel}</span>
              <Link href={`/post/${data[1].slug}`}>
                <h3>{formatText(data[1].title, 45)}</h3>
              </Link>
              <p>Autor: Viajeconsciente | Última vez: {data[1].date}</p>
            </div>
          </div>
          <div className="blog__card">
            <img src={`http://localhost:3000/uploads/${data[2].img}`} />
            <div className="blog__card__content">
              <span>{data[2].clabel}</span>
              <Link href={`/post/${data[1].slug}`}>
                <h3>{formatText(data[2].title, 45)}</h3>
              </Link>
              <p>Autor: Viajeconsciente | Última vez: {data[2].date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
