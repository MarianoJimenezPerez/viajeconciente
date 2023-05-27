import Link from "next/link";
import "./CategorySlider.css";
export default function CategorySlider() {
  return (
    <div className="category__slider">
      <div className="container">
        <h6 className="category__slider__title">Latest Videos</h6>
        <div className="category__slider__slider">
          <div className="slide">
            <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/03/president-infrastructure-plans-1-600x359.jpg" />
            <Link href={"#"}>
              <h5>Innovative Tech Gadgets That Will Make Your Life Easies</h5>
            </Link>
            <span>April 7, 2023</span>
          </div>
          <div className="slide">
            <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/03/president-infrastructure-plans-1-600x359.jpg" />
            <Link href={"#"}>
              <h5>Innovative Tech Gadgets That Will Make Your Life Easies</h5>
            </Link>
            <span>April 7, 2023</span>
          </div>
          <div className="slide">
            <img src="https://avada.website/magazine/wp-content/uploads/sites/166/2023/03/president-infrastructure-plans-1-600x359.jpg" />
            <Link href={"#"}>
              <h5>Innovative Tech Gadgets That Will Make Your Life Easies</h5>
            </Link>
            <span>April 7, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
