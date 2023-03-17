import { useState } from "react";

import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { sliderItems } from "../constants";

import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.7;
  z-index: 2;
  cursor: pointer;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 80%;
  flex: 1;
  @media only screen and (max-width: 1528px) {
    height: 70%;
  }
  @media only screen and (max-width: 1282px) {
    height: 60%;
  }
  @media only screen and (max-width: 1100px) {
    height: 55%;
  }
  @media only screen and (max-width: 900px) {
    height: 45%;
  }
  @media only screen and (max-width: 800px) {
    height: 40%;
  }
`;
const Image = styled.img`
  height: 70%;
  padding: 5rem;
  @media only screen and (max-width: 1145px) {
    padding: 2.5rem;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
`;
const Title = styled.h1`
  font-size: 40px;
  @media only screen and (max-width: 1528px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 942px) {
    font-size: 20px;
  }
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1.5px;
  @media only screen and (max-width: 1528px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 942px) {
    font-size: 14px;
  }
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Link to={"/sneakers"} className="text-link">
                <Button>visita nuestras marcas</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
