import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addProduct } from "../features/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  @media only screen and (max-width: 1080px) {
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 1080px) {
    padding: 30px;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
const Image = styled.img`
  max-width: 80%;
  height: auto;
  border-radius: 1.3rem;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 400;
  @media only screen and (max-width: 550px) {
    font-size: 25px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: justify;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 60%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 794px) {
    width: 90%;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const StyledButton = styled.button`
  margin: 30px;
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
`;
const ButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;
const ButtonCtn = styled.div`
  display: none;

  @media only screen and (max-width: 1080px) {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -2rem;
  }
  @media only screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});

  const [qty, setQty] = useState(1);

  const [size, setSize] = useState();

  const dispatch = useDispatch();

  const addedToCartMsg = () => toast("Producto añadido al carrito!");

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/find/${id}`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, [id]);

  const AddProductToCart = () => {
    dispatch(addProduct({ ...product, qty, size }));
    addedToCartMsg();
  };

  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>{product.price} €</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Tallas disponibles:</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <ButtonsContainer>
            <StyledButton onClick={AddProductToCart}>
              AÑADIR ZAPATILLA
            </StyledButton>{" "}
            <StyledButton onClick={() => navigate("/cart")}>
              VER CARRITO
            </StyledButton>
            <StyledButton onClick={() => navigate(-1)}>
              SEGUIR COMPRANDO
            </StyledButton>{" "}
          </ButtonsContainer>
        </InfoContainer>
      </Wrapper>{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonCtn>
          {" "}
          <StyledButton onClick={AddProductToCart}>
            AÑADIR ZAPATILLA
          </StyledButton>{" "}
          <StyledButton onClick={() => navigate("/cart")}>
            VER CARRITO
          </StyledButton>
          <StyledButton onClick={() => navigate(-1)}>
            SEGUIR COMPRANDO
          </StyledButton>
        </ButtonCtn>
      </div>
      <Newsletter />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default Product;
