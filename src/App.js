import './App.css';
import Navbar from './Components/Navbar/Navbar';
<<<<<<< HEAD
import ProductDisplay from'./Components/productdisplay/productdisplay';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import UserLogin from'./Components/SignupLogin/Login';
import UserRegister from'./Components/SignupLogin/Register';
=======
import ProductDisplay from './Components/productdisplay/productdisplay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
// import LoginSignup from './pages/LoginSignup';
import Login from './Components/SignupLogin/Login';
>>>>>>> 5b91bf0 (updation1)
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
import AdminLogin from './Components/Admin/AdminLogin';
import AdminRegister from './Components/Admin/AdminRegister';
import ProductForm from './Components/Admin/ProductForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Shop Routes */}
          <Route path="/" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          {/* Shop Categories */}
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kid" element={<ShopCategory banner={kids_banner} category="kid" />} />

          {/* User Authentication */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />

          {/* Admin Authentication */}
          <Route path="/admin" element={<Navigate to="/admin/login" />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Product Form */}
          <Route path="/admin/productform" element={<ProductForm />} />
=======

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kid' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/login' element={<LoginSignup />} /> */}
>>>>>>> 5b91bf0 (updation1)
        </Routes>

        <Footer />
        <ToastContainer position="top-right" autoClose={2000} theme="colored" />
<<<<<<< HEAD
      </div>
    </BrowserRouter>
=======
      </BrowserRouter>
    </div>
>>>>>>> 5b91bf0 (updation1)
  );
}

export default App;
