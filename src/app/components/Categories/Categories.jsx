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
          <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/03/newsletter-icon-200x159.png"></img>
          <h6>News Via Inbox</h6>
          <p>Nulla turp dis cursus. Integer liberos euismod pretium faucibua</p>
          <form className="newsletter__form">
            <input type="text" placeholder="Enter your email*" />
            <button type="submit">Suscribe</button>
            <span>Advice</span>
          </form>
        </div>
      </div>
    </div>
  );
}
