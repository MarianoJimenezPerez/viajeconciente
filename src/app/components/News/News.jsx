import Link from "next/link";
import "./News.css";

export default function News() {
  return (
    <div className="news">
      <div className="container">
        <div className="left">
          <h5>Popular News & Articles</h5>
          <div className="news__container">
            <article className="new">
              <div className="new__img">
                <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/02/save-money-with-tech-3-400x240.jpg" />
              </div>
              <div className="new__content">
                <h6>Businesses</h6>
                <Link href={"#"}>
                  <h4>Scalable Cloud Computing For Online Businesses</h4>
                </Link>
                <p>
                  Elementum nulla turpis cursus. Integer liberos kusto euismod
                  aene pretium faucibus ...
                </p>
                <Link href={"#"} className="cta">
                  Read more
                </Link>
              </div>
            </article>
            <article className="new">
              <div className="new__img">
                <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/02/save-money-with-tech-3-400x240.jpg" />
              </div>
              <div className="new__content">
                <h6>Businesses</h6>
                <Link href={"#"}>
                  <h4>Scalable Cloud Computing For Online Businesses</h4>
                </Link>
                <p>
                  Elementum nulla turpis cursus. Integer liberos kusto euismod
                  aene pretium faucibus ...
                </p>
                <Link href={"#"} className="cta">
                  Read more
                </Link>
              </div>
            </article>
            <article className="new">
              <div className="new__img">
                <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/02/save-money-with-tech-3-400x240.jpg" />
              </div>
              <div className="new__content">
                <h6>Businesses</h6>
                <Link href={"#"}>
                  <h4>Scalable Cloud Computing For Online Businesses</h4>
                </Link>
                <p>
                  Elementum nulla turpis cursus. Integer liberos kusto euismod
                  aene pretium faucibus ...
                </p>
                <Link href={"#"} className="cta">
                  Read more
                </Link>
              </div>
            </article>
          </div>
        </div>
        <div className="right">
          <div className="add__space">Add space</div>
          <div className="news__carousel">
            <h5>Weekly Popular</h5>
            <Link className="slide" href={"#"}>
              <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/02/experience-magical-resources-4.jpg" />
              <div>
                <h4>Top 10 Destinations For Barcelona</h4>
                <p>
                  Categories: <span>Security</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
