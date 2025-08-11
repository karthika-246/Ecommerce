<<<<<<< HEAD
import React, { useContext } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext'; 

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const totalCartItems = Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  const location = useLocation();

  // Derive current active page based on route
  const activePath = location.pathname;
=======
import React, { useState, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';  // ✅ Make sure the path is correct

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  // ✅ Get cart items from context
  const { cartItems } = useContext(ShopContext);

  // ✅ Calculate total number of items in cart
  const totalCartItems = Object.values(cartItems).reduce((total, qty) => total + qty, 0);
>>>>>>> 5b91bf0 (updation1)

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
<<<<<<< HEAD
        <li className={activePath === "/" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
        </li>
        <li className={activePath === "/men" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>
        </li>
        <li className={activePath === "/women" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>
        </li>
        <li className={activePath === "/kid" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/kid'>Kids</Link>
        </li>
        <li className={activePath.startsWith("/admin") ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/admin'>Admin</Link>
=======
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kid")}>
          <Link style={{ textDecoration: 'none' }} to='/kid'>Kids</Link>
          {menu === "kid" ? <hr /> : null}
>>>>>>> 5b91bf0 (updation1)
        </li>
      </ul>

      <div className="nav-login-cart">
<<<<<<< HEAD
        <Link to='/login'>
          <button>Login</button>
        </Link>
=======
        <Link to='/login'><button>Login</button></Link>
>>>>>>> 5b91bf0 (updation1)

        <Link to='/cart'>
          <img src={cart_icon} alt="cart" />
        </Link>

        <div className="nav-login-cart-count">{totalCartItems}</div> 
      </div>
    </div>
  );
};

export default Navbar;
