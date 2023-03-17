import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media only screen and (max-width: 794px) {
    height: 20vh;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 15rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 794px) {
    top: 1rem;
  }
  @media only screen and (max-height: 794px) {
    display: none;
  }
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  border: 1px solid black;
  background-color: #ffffffb2;
  padding: 1rem 1.5rem;
  color: black;
  padding: 13px 50px 13px;
  text-transform: uppercase;
  border-radius: 5rem;

  transition: all 1s ease-in-out;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1rem #fff, -0.5rem -0.5rem 1rem #ccc;
  }

  &:active {
    box-shadow: inset 0.2rem 0.2rem 1rem #fff, -0.2rem -0.2rem 1rem #ccc;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.title}`}>
        <Image src={item.img} />
        <Info>
          <Button>IR A {item.title}</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
