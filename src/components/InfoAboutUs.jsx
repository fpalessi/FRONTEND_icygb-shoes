import styled from "styled-components";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FemaleIcon from "@mui/icons-material/Female";
import PlaceIcon from "@mui/icons-material/Place";

const Container = styled.div`
  height: 36vh;
  margin: 20px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 80vh;
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

const InfoAboutUs = () => {
  return (
    <Container>
      <Divider />
      <Wrapper>
        <Left>
          <IconContainer>
            <PlaceIcon />
          </IconContainer>
          <Title>Emplazamiento</Title>
          <Text>
            Nos encontramos físicamente en calle Desengaño nº 21, Madrid,
            exactamente al final de la Calle San Marcos.
          </Text>
        </Left>
        <Center>
          <IconContainer>
            {" "}
            <FemaleIcon />
          </IconContainer>
          <Title>Mujeres</Title>
          <Text>
            En nuestra empresa luchamos contra la desigualdad laboral, es por
            ello que la mayor parte de la plantilla se compone de mujeres.
          </Text>
        </Center>
        <Right>
          <IconContainer>
            <ConnectWithoutContactIcon />
          </IconContainer>
          <Title>Redes sociales</Title>
          <Text>
            La mayoría de nuestros clientes nos conoce por las redes sociales,
            contamos en Instagram con un total de 19 seguidores.
          </Text>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default InfoAboutUs;
