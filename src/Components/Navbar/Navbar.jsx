import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const totalCartItems = Object.values(cartItems).reduce(
    (total, qty) => total + qty,
    0
  );

  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>OUTFITLY</p>
      </div>

      <ul className="nav-menu">
        <li className={activePath === "/" ? "active" : ""}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
        </li>
        <li className={activePath === "/men" ? "active" : ""}>
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
        </li>
        <li className={activePath === "/women" ? "active" : ""}>
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
        </li>
        <li className={activePath === "/kid" ? "active" : ""}>
          <Link style={{ textDecoration: "none" }} to="/kid">
            Kids
          </Link>
        </li>
        <li className={activePath.startsWith("/admin") ? "active" : ""}>
          <Link style={{ textDecoration: "none" }} to="/admin">
            Admin
          </Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/wishlist">Wishlist</Link>

        {/* Cart with badge */}
        <Link to="/cart" className="cart-container">
          <img src={cart_icon} alt="cart" />
          {totalCartItems > 0 && (
            <span className="nav-login-cart-count">{totalCartItems}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
