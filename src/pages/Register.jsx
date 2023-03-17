import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Banner from "../components/Banner";

import backgroundImg from "../assets/log-reg-img.jpeg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 90.39vh;
  background: url(${backgroundImg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  @media only screen and (max-width: 794px) {
    width: 70%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 0.5rem;
`;
const Policy = styled.span`
  font-size: 11.3px;
  font-weight: 600;
  margin: 15px 0px; ;
`;
const Button = styled.button`
  width: 35%;
  border: none;
  padding: 15px 20px;
  background-color: #5e5e5e;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: auto;
  @media only screen and (max-width: 794px) {
    width: 55%;
  }
  &:hover {
    background-color: #8b8b8b;
  }
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedpass, setRepeatedpass] = useState("");
  const [alert, setAlert] = useState({});

  const { user } = useAuth();

  const navigate = useNavigate();

  const successfullyRegistered = () => toast("Te has registrado correctamente");

  const delayRedirection = () => {
    timeout = setTimeout(redirect, 4000);
  };

  const redirect = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [navigate, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      [
        username,
        email,
        password,
        repeatedpass,
        address,
        phone,
        card,
        city,
      ].includes("")
    ) {
      setAlert({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }
    if (phone.length < 9) {
      setAlert({
        msg: "El número de teléfono debe contener al menos 9 números",
        error: true,
      });
      return;
    }
    if (card.length < 16) {
      setAlert({
        msg: "Tu tarjeta de crédito es demasiado corta, inténtalo de nuevo",
        error: true,
      });
      return;
    }
    if (password.length < 6) {
      setAlert({
        msg: "Tu contraseña debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }
    if (password !== repeatedpass) {
      setAlert({ msg: "Los passwords no coinciden", error: true });
      return;
    }

    setAlert({});

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
        {
          username,
          email,
          password,
          phone,
          card,
          city,
          address,
        }
      );
      successfullyRegistered();
      delayRedirection();
    } catch (error) {
      setAlert({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alert;

  return (
    <>
      <Navbar />
      <Banner />
      <Container>
        <Wrapper>
          <Title>Crea tu cuenta</Title>

          {msg && <Alert alert={alert} />}
          <Form>
            <Input
              placeholder="Nombre de usuario"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Número de teléfono"
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              placeholder="Ciudad"
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />{" "}
            <Input
              placeholder="Dirección"
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              placeholder="Tarjeta de crédito"
              id="card"
              type="text"
              value={card}
              onChange={(e) => setCard(e.target.value)}
            />{" "}
            <Input
              placeholder="Contraseña (>6 ch.)"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Repite tu contraseña"
              id="password2"
              type="password"
              value={repeatedpass}
              onChange={(e) => setRepeatedpass(e.target.value)}
            />
            <Policy>
              He leído y al registrarme acepto lo descrito en las cláusulas
              informativas del tratamiento del sitio web, la Política de
              Privacidad y la Política de Cookies.
            </Policy>
            <Button type="submit" onClick={handleSubmit}>
              Registrarse
            </Button>
          </Form>
        </Wrapper>
        <ToastContainer autoClose={3000} />
      </Container>
    </>
  );
};

export default Register;
