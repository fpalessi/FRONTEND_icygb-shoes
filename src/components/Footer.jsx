import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 2rem;
  display: flex;
  @media only screen and (max-width: 794px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
  line-height: 2rem;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ICYGB</Logo>
        <Description>
          <b>
            <i>In Case You Go Barefoot</i>
          </b>{" "}
          es una tienda online especializada en sneakers. <br /> ICYGB nace con
          la idea de que todo el mundo se pueda permitir sus zapatillas
          favoritas, garantizando los mejores precios del mercado con un margen
          de 2,88% sobre el precio del competidor más barato.
        </Description>
      </Left>
      <Center>
        <Title>Síguenos en redes</Title>
        <SocialContainer>
          <a href="https://facebook.com/ICYGBStore" target="_blank">
            <SocialIcon color="3B5999">
              <FacebookOutlinedIcon />
            </SocialIcon>
          </a>
          <a href="https://instagram.com/ICYGBStore" target="_blank">
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
          </a>
          <a href="https://twitter.com/ICYGBStore" target="_blank">
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Center>
      <Right>
        <Title>Contactános en </Title>
        <ContactItem>
          <AlternateEmailOutlinedIcon style={{ marginRight: "5px" }} />
          ICYGB@outlook.com
        </ContactItem>
        <ContactItem>
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
