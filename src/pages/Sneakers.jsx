import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Brands from "../components/Brands";

const Container = styled.div``;

const Sneakers = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Brands />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Sneakers;
