import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductDisplay from './Components/productdisplay/productdisplay';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Login from './Components/SignupLogin/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminRegister from './Components/Admin/AdminRegister';
import ProductForm from './Components/Admin/ProductForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Shop & Product Routes */}
          <Route path="/" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          {/* Category Pages */}
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kid" element={<ShopCategory banner={kids_banner} category="kid" />} />

          {/* User Login */}
          <Route path="/login" element={<Login />} />

          {/* Admin Auth & Panel */}
          <Route path="/admin" element={<Navigate to="/admin/login" />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/products" element={<ProductForm />} />
        </Routes>

        <Footer />
        <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      </BrowserRouter>
    </div>
  );
}

export default App;
