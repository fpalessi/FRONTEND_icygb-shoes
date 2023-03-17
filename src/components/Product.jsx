import styled from "styled-components";
import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const InfoContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${InfoContainer} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #ffffff6f;
  position: absolute;
`;
const Img = styled.img`
  height: 75%;
  z-index: 2;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e93838;
    transform: scale(1.4);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Img src={item.img} />
      <InfoContainer>
        <IconContainer>
          <Link to={`/product/${item._id}`} className="text-link">
            <RemoveRedEyeOutlinedIcon />
          </Link>
        </IconContainer>
      </InfoContainer>
    </Container>
  );
};

export default Product;
