import { useContext, useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import avi from "../assets/avi.png";
import axios from "axios";
import { format } from "date-fns";

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  @media only screen and (max-width: 1260px) {
    margin: 20px;
  }
`;

const Divider = styled.hr`
  border-top: 1px solid #bbb;
  border-radius: 5px;
  margin-top: 3vh;
  width: 100%;
  margin: 0px auto;
`;

const MainTitle = styled.h2`
  font-size: 25px;
  margin: 25px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserWrapper = styled.div`
  display: flex;
  margin: 10px auto;
  align-items: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
`;

const RightContainer = styled.div`
  flex: 1;
`;

const OrderContainer = styled.div`
  margin-top: 2vh;
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Profile = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState(null);

  if (!user) {
    return <Navigate to="/" />;
  }
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/orders`
      );
      setOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Container>
        <MainTitle>Mi cuenta</MainTitle>
        <img
          src={avi}
          width={100}
          style={{ display: "flex", margin: "20px auto" }}
        />
        <Divider />
        <Wrapper>
          <LeftContainer>
            <UserWrapper>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user-circle"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.25"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
              </span>
              <span>Usuario: {user?.username}</span>
            </UserWrapper>
            <UserWrapper>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-at"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.25"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                </svg>
              </span>
              <span>Correo electrónico: {user?.email}</span>
            </UserWrapper>{" "}
            <UserWrapper>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-location"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.25"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
              </span>
              <span>Tarjeta: {user?.card}</span>
            </UserWrapper>{" "}
          </LeftContainer>
          <RightContainer>
            <UserWrapper>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-map-pin"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.25"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
              </span>
              <span>Ciudad: {user?.city}</span>
            </UserWrapper>
            <UserWrapper>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pin"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.25"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
                  <line x1="9" y1="15" x2="4.5" y2="19.5" />
                  <line x1="14.5" y1="4" x2="20" y2="9.5" />
                </svg>
              </span>
              <span>Dirección: {user?.address}</span>
            </UserWrapper>
            <UserWrapper>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.25"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </span>
              <span>Número de teléfono: {user?.phone}</span>
            </UserWrapper>
          </RightContainer>
        </Wrapper>
        <Divider />
        <OrderContainer>
          <OrderWrapper>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-package"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                <line x1="12" y1="12" x2="20" y2="7.5" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <line x1="12" y1="12" x2="4" y2="7.5" />
                <line x1="16" y1="5.25" x2="8" y2="9.75" />
              </svg>
            </span>
            <h3 style={{ fontWeight: "600" }}>Mis pedidos</h3>
            <div>
              {orders?.length > 0 ? (
                orders?.map((order) => (
                  <div
                    key={order._id}
                    style={{ margin: "10px", padding: "5px" }}
                  >
                    <h4>Número de pedido: #{order._id}</h4>
                    <p>
                      Fecha de pedido:{" "}
                      {format(new Date(order.createdAt), "yyyy-MM-dd")}
                    </p>
                    <p>Pares de zapatillas: {order.quantity}</p>
                    <p>Coste total: {order.total}€</p>
                    <p>Llegada: 2 a 5 días</p>
                    <p>Envío gratuito</p>
                  </div>
                ))
              ) : (
                <NavLink to="/sneakers" className="unnstyled-link">
                  Haz tu primer pedido ya, pincha aquí.
                </NavLink>
              )}
            </div>
          </OrderWrapper>
        </OrderContainer>
      </Container>
    </div>
  );
};

export default Profile;
