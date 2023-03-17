import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Brands from "../components/Brands";
import Products from "../components/Products";
import Info from "../components/Info";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Slider />
      <Products />
      <Brands />
      <Newsletter />
      <Info />
      <Footer />
    </>
  );
};

export default Home;
