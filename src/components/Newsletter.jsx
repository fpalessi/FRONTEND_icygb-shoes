import styled from "styled-components";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Container = styled.div`
  height: 40vh;
  margin: 10px;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  @media only screen and (max-width: 794px) {
    font-size: 40px;
  }
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  @media only screen and (max-width: 794px) {
    text-align: center;
    font-size: 16px;
  }
`;
const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  @media only screen and (max-width: 794px) {
    width: 70%;
  }
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #bfbfbf;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 1px 1px 25px 10px rgba(106, 106, 106, 0.398);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(120, 120, 120, 0.901),
      transparent
    );
    transition: all 650ms;
  }
  :hover::before {
    left: 100%;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Sé el primero en recibir las ofertas en tus zapas favoritas.
      </Description>
      <InputContainer>
        <Input placeholder="Introduce tu dirección de correo electrónico " />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
