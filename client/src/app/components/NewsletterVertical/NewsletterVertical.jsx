import "./NewsletterVertical.css";
export default function NewsletterVertical() {
  return (
    <div className="newsletter__vertical">
      <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/03/newsletter-icon-200x159.png"></img>
      <h6>News Via Inbox</h6>
      <p>Nulla turp dis cursus. Integer liberos euismod pretium faucibua</p>
      <form className="newsletter__form">
        <input type="text" placeholder="Enter your email*" />
        <button type="submit">Suscribe</button>
        <span>Advice</span>
      </form>
    </div>
  );
}
