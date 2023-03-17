import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { brands } from "../constants";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 794px) {
    padding: 0px;
    flex-direction: column;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;
const Title = styled.h2`
  margin: 1rem;
  font-weight: 600;
`;

const Brands = () => {
  return (
    <>
      <TitleContainer>
        <Title>Nuestras marcas</Title>
      </TitleContainer>
      <Container>
        {brands.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Brands;
