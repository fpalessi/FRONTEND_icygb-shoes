import { useState } from "react";
import axios from "axios";

import Product from "./Product";
import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

const Products = ({ brand, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    try {
      // fetching data from our backend
      const response = await axios.get(
        brand
          ? `${import.meta.env.VITE_BACKEND_URL}/api/products?brand=${brand}`
          : `${import.meta.env.VITE_BACKEND_URL}/api/products`
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [brand]);

  useEffect(() => {
    brand &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, brand, filter]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "Asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <TitleContainer>
        <Title>{brand ? null : "Últimas novedades"}</Title>
      </TitleContainer>
      <Container>
        {brand
          ? filteredProducts.map((item) => (
              <Product item={item} key={item._id} />
            ))
          : products
              .slice(0, 12)
              .map((item) => <Product item={item} key={item._id} />)}
      </Container>
    </>
  );
};

export default Products;
