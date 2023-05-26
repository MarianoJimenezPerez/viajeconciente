import NewsletterVertical from "../NewsletterVertical/NewsletterVertical";
import "./Categories.css";
export default function Categories() {
  return (
    <div className="categories">
      <div className="container">
        <div className="left">
          <h5 className="categorie__title">What’s Trending</h5>
          <div className="categorie__blogs__container">
            <div className="blog">
              <div className="blog__img">
                <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/02/high-altitude-balloons.jpg" />
                <span>World</span>
              </div>
              <div className="blog__content">
                <h4>Hot Air Ballooning As An Alternative Means Of Travel</h4>
                <p>
                  Elementum nulla turpis cursus. Integer liberos kusto euismod
                  aene pretium faucibus ...
                </p>
                <span>April 7, 2023</span>
              </div>
            </div>
            <div className="blog">
              <div className="blog__img">
                <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/02/high-altitude-balloons.jpg" />
                <span>World</span>
              </div>
              <div className="blog__content">
                <h4>Hot Air Ballooning As An Alternative Means Of Travel</h4>
                <p>
                  Elementum nulla turpis cursus. Integer liberos kusto euismod
                  aene pretium faucibus ...
                </p>
                <span>April 7, 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <NewsletterVertical />
        </div>
      </div>
    </div>
  );
}
