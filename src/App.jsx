import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sneakers from "./pages/Sneakers";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import useAuth from "./hooks/useAuth";
import { UserContextProvider } from "./context/UserContext";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const { user } = useAuth();
  return (
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to={"/"} /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to={"/"} /> : <Register />}
        />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
