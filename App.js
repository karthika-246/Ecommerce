import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductDisplay from './Components/productdisplay/productdisplay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
// import LoginSignup from './pages/LoginSignup';
import Login from './Components/SignupLogin/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        </Routes>

        <Footer />
        <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      </BrowserRouter>
    </div>
  );
}

export default App;
