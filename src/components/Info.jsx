import styled from "styled-components";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Container = styled.div`
  height: 36vh;
  margin: 20px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 80vh;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Divider = styled.hr`
  border-top: 1px solid #bbb;
  border-radius: 5px;
  margin-top: 3vh;
  width: 90%;
  margin: 0px auto;
`;
const Left = styled.div`
  flex: 1;
  margin: 20px;
`;
const Center = styled.div`
  flex: 1;
  margin: 20px;
`;
const Right = styled.div`
  flex: 1;
  margin: 20px;
`;
const Title = styled.h2`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  margin-top: 15px;
`;
const Text = styled.p`
  font-size: 18px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 30px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = () => {
  return (
    <Container>
      <Divider />
      <Wrapper>
        <Left>
          <IconContainer>
            <WhatsAppIcon />
          </IconContainer>
          <Title>atención 24h</Title>
          <Text>
            Estamos disponibles en todo momento para resolver tus dudas antes de
            comprar o para lo que sea.
          </Text>
        </Left>
        <Center>
          <IconContainer>
            {" "}
            <LockOpenIcon />
          </IconContainer>
          <Title>pago seguro</Title>
          <Text>
            Utilizamos un sistema de pago seguro mediante pasarelas de pago
            cifradas. ¡Garantizamos tu seguridad!
          </Text>
        </Center>
        <Right>
          <IconContainer>
            <LocalShippingIcon />
          </IconContainer>
          <Title>entrega express</Title>
          <Text>
            Entregaremos el pedido el plazo de un día máximo. Consulta nuestras
            condiciones de compra
          </Text>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Info;
