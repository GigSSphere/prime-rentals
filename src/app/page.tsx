import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Banner />
      <Categories />
    </div>
  );
}
