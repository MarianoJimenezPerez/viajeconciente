import Hero from "./components/Hero/Hero";
import FeatureBlogs from "./components/FeatureBlogs/FeatureBlogs";
import AddSpace from "./components/AddSpace/AddSpace";
import Categories from "./components/Categories/Categories";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureBlogs />
      <AddSpace />
      <Categories />
    </main>
  );
}
