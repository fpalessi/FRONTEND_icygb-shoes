import styled from "styled-components";
import { Link } from "react-router-dom";
import jordanCrying from "../assets/Michael_Jordan_crying.jpg";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  font-family: #f2eee8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const JordanCrying = styled.div`
  width: 273px;
  height: 364px;
  background: url(${jordanCrying});
  border-radius: 10rem;
`;

const Button = styled.button`
  font-weight: 600;
  padding: 20px;
  color: #fb4d4d;
  width: 320px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  margin: 50px;

  @media screen and (max-width: 400px) {
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 50px;
    width: 200px;
  }
`;
const Text = styled.h1`
  font-weight: 800;
  color: #fb4d4d;
  text-align: center;
  font-size: 2.5em;
  margin: 20px;

  @media screen and (max-width: 400px) {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 2em;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Text>Oops... Algo salió mal!</Text>
      <JordanCrying />{" "}
      <Link to="/" className="text-link">
        <Button>Volver a Home</Button>{" "}
      </Link>
    </Container>
  );
};

export default NotFound;
