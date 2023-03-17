import { ShoppingCartSharp } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const Navbar = () => {
  const qty = useSelector((state) => state.cart.qty);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/logout`);
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li id="logo">
              <NavLink to="/" className="unnstyled-link">
                ICYGB
              </NavLink>
            </li>
            <li>
              {" "}
              {user ? (
                <NavLink to="/profile" className="nav-link">
                  Perfil
                </NavLink>
              ) : (
                <NavLink to="/sneakers" className="nav-link">
                  Marcas
                </NavLink>
              )}
            </li>
            <li>
              {" "}
              {user ? (
                <NavLink to="/" className="nav-link" onClick={handleLogOut}>
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              )}
            </li>
            <li>
              {user ? null : (
                <NavLink to="/register" className="nav-link">
                  Registro
                </NavLink>
              )}
            </li>
            <li>
              <NavLink to="/cart" className="unnstyled-link">
                <Badge badgeContent={qty} color="primary">
                  <ShoppingCartSharp />
                </Badge>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
