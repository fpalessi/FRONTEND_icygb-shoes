import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 50px;
`;

const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  @media only screen and (max-width: 794px) {
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media only screen and (max-width: 794px) {
    margin-right: 0px;
  }
`;

const Select = styled.select`
  width: 110px;
  padding: 10px;
  margin-right: 5px;
  @media only screen and (max-width: 794px) {
    margin: 10px 0px;
  }
`;
const Option = styled.option``;

const GoBackButton = styled.button`
  height: 50px;
  margin-top: 50px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  padding: 13px 31px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);

  &:after {
    content: "";
    background-color: #bfbfbf;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }
  &:hover::after {
    top: 0px;
    left: 0px;
  }
  @media only screen and (max-width: 360px) {
    margin-top: 0;
    margin-bottom: 10px;
    width: 200px;
  }
`;

const ButtonCtn = styled.div`
  width: 90%;
  display: flex;
  @media only screen and (max-width: 360px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductList = () => {
  const location = useLocation();
  const brand = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const [filter, setFilter] = useState({});

  const [sort, setSort] = useState("Newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Banner />
      <ButtonCtn>
        <Title>{brand}</Title>
        <GoBackButton onClick={() => navigate(-1)}>Volver</GoBackButton>
      </ButtonCtn>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option value="">Color</Option>
            <Option>Blanco</Option>
            <Option>Negro</Option>
            <Option>Azul</Option>
            <Option>Verde</Option>
            <Option>Amarillo</Option>
            <Option>Rojo</Option>
            <Option>Gris</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option value="">Talla</Option>
            <Option>37</Option>
            <Option>38</Option>
            <Option>39</Option>
            <Option>40</Option>
            <Option>41</Option>
            <Option>42</Option>
            <Option>43</Option>
            <Option>44</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="">Selecciona</Option>{" "}
            <Option value="Newest">Novedad</Option>
            <Option value="Asc">Baratos primero </Option>
            <Option value="Desc">Caros primero</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products brand={brand} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
