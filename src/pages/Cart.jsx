import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { clearCart } from "../features/cart/cartSlice";

import Modal from "react-modal";
import Spinner from "../components/Spinner";

import greenCheck from "../assets/green_check.png";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const customStyles = {
  content: {
    maxWidth: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  @media only screen and (max-width: 794px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media only screen and (max-width: 794px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;
const TopButton = styled.button`
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

  @media only screen and (max-width: 794px) {
    margin: 20px;
  }

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

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 794px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 794px) {
    flex-direction: column;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  border: none;
  border-radius: 5rem;
  margin-bottom: 10px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Hr = styled.hr`
  background-color: #bab9b9;
  border: none;
  height: 0.5px;
`;

const Summary = styled.div`
  flex: 1;
  height: 45vh;
  border: 0.5px solid lightgray;
  border-radius: 2rem;
  padding: 20px;
  margin: 10px;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Cart = () => {
  const [checkOutModalIsOpen, setCheckOutModalIsOpen] = useState(false);
  const [anonymousUserModalIsOpen, setAnonymousUserModalIsOpen] =
    useState(false);
  const [loader, setLoader] = useState(false);

  const { user } = useAuth();
  const cart = useSelector((state) => state.cart);
  const total = cart.total;
  const quantity = cart.qty;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const successfulBuy = async () => {
    setTimeout(() => {
      setLoader(true);
    }, 8000);
    setLoader(false);
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, {
      total,
      quantity,
      user,
    });
  };

  const openCheckOutModal = () => {
    if (user) {
      setCheckOutModalIsOpen(true);
      successfulBuy();
    } else {
      setAnonymousUserModalIsOpen(true);
    }
  };

  const closeCheckOutModal = () => {
    if (user) {
      setCheckOutModalIsOpen(false);
    } else {
      setAnonymousUserModalIsOpen(false);
    }
  };
  const A = (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h2>Gracias por confiar en nosotros.</h2>
      <Spinner />
      <h3>
        Estamos efectuando un cargo en la tarjeta de crédito: {user?.card} por
        un total de {cart.total}€.
      </h3>
    </div>
  );
  const B = (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h2>Tu pedido se ha realizado con éxito.</h2>
      <img src={greenCheck} height={60} style={{ margin: "60px 5px" }} />{" "}
      <h3>
        {" "}
        Ya estamos preparando tu pedido, en un plazo de 2 a 5 días llegará a tu
        dirección indicada ({user?.address} en {user?.city}).
      </h3>
    </div>
  );

  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <Title>🛒</Title>
        <Top>
          <TopButton onClick={() => navigate("/sneakers")}>
            SEGUIR COMPRANDO
          </TopButton>

          <TopButton
            onClick={() => {
              dispatch(clearCart(cart));
            }}
          >
            VACIAR CARRITO
          </TopButton>
          <TopButton onClick={openCheckOutModal}>TRAMITAR PEDIDO</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Hr />
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Zapatilla: </b> {product.title}
                    </ProductName>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductPrice>Precio: {product.price} €</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Resumen del Pedido</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Costes de Envío</SummaryItemText>
              <SummaryItemPrice>Gratis</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
            </SummaryItem>
            <TopButton onClick={openCheckOutModal}>CHECKOUT</TopButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Modal
        isOpen={checkOutModalIsOpen}
        onRequestClose={closeCheckOutModal}
        style={customStyles}
      >
        {loader ? B : A}
      </Modal>
      <Modal
        isOpen={anonymousUserModalIsOpen}
        onRequestClose={closeCheckOutModal}
        style={customStyles}
      >
        <h2> ⚠️ Para completar esta acción, debes primero identificarte. ⚠️</h2>
        <div style={{ display: "flex" }}>
          <TopButton
            onClick={() => navigate("/login")}
            style={{ marginTop: "3rem" }}
          >
            Iniciar sesión
          </TopButton>
          <TopButton
            onClick={() => navigate("/register")}
            style={{ marginTop: "3rem" }}
          >
            Registrarse
          </TopButton>
        </div>
      </Modal>

      <Footer />
    </Container>
  );
};
export default Cart;
