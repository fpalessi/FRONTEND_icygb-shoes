import { useEffect, useState } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import Banner from "../components/Banner";

import Alert from "../components/Alert";

import backgroundImg from "../assets/log-reg-img.jpeg";
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
  width: 25%;
  padding: 2rem;
  background-color: #ffffff;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 0.5rem;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #5e5e5e;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 5px auto;
  &:hover {
    background-color: #8b8b8b;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();
  const { setUser, user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [navigate, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({ msg: "Rellena todos los campos", error: true });
      return;
    }
    setAlert({});

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setUser(response.data);
      navigate("/profile");
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
          <Title>Inicia sesión</Title>
          {msg && <Alert alert={alert} />}
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="text-link">Iniciar Sesión</Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <Link to="/register" className="nav-link">
                <p>¿Todavía no tienes cuenta?</p>
              </Link>
            </div>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
