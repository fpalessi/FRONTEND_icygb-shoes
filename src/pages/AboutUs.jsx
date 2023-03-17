import styled from "styled-components";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import store from "../assets/store.jpg";
import InfoAboutUs from "../components/InfoAboutUs";

const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;

  @media only screen and (max-width: 1260px) {
    margin: 20px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
const MainTitle = styled.h2`
  font-size: 30px;
  margin: 25px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>
        <MainTitle>¿Quiénes somos?</MainTitle>
        <ImgContainer>
          <img
            src={store}
            width={500}
            style={{ borderRadius: "1rem", objectFit: "cover" }}
          />
        </ImgContainer>
        <InfoAboutUs />
      </Container>
    </>
  );
};

export default AboutUs;
