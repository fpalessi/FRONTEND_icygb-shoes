import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 35px;
  background-color: #bfbfbf;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
`;

const Banner = () => {
  return <Container>Envío gratis hasta octubre de 2023</Container>;
};

export default Banner;
