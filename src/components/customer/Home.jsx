import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";
import Farmers from "./Farmers";
import Footer from "./Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <Categories />

      <Products />

      <Farmers />

      <Footer />
    </div>
  );
}

export default Home;
