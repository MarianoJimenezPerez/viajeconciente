import Hero from "./components/Hero/Hero";
import FeatureBlogs from "./components/FeatureBlogs/FeatureBlogs";
import AddSpace from "./components/AddSpace/AddSpace";
import Categories from "./components/Categories/Categories";
import CategorySlider from "./components/CategorySlider/CategorySlider";
import News from "./components/News/News";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureBlogs />
      <AddSpace />
      <Categories />+
      <CategorySlider />
      <News />
      <AddSpace />
    </main>
  );
}
