import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Categories from "./Components/Categories/category";
import ShopCategory from './pages/ShopCategory';
import ProductDisplay from './Components/productdisplay/productdisplay';
import UserLogin from'./Components/SignupLogin/Login';
import UserRegister from'./Components/SignupLogin/Register';
import Footer from './Components/Footer/Footer';
import Cart from './pages/Cart';
import Wishlist from "./Components/Categories/Wishlist";
import AdminLogin from './Components/Admin/AdminLogin';
import AdminRegister from './Components/Admin/AdminRegister';
import ProductForm from './Components/Admin/ProductForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from "./ErrorBoundary";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <ErrorBoundary>
          <Routes>
            {/* Home / Categories */}
            <Route path="/" element={<Categories />} />

            {/* Product Pages */}
            <Route path="/product/:id" element={<ProductDisplay />} />

            {/* Cart & Wishlist */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />

            {/* Shop Categories using route params */}
            <Route path="/category/:categoryName" element={<ShopCategory />} />
            

            {/* User Authentication */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />

            {/* Admin Authentication */}
            <Route path="/admin" element={<Navigate to="/admin/login" />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Admin Product Form */}
            <Route path="/admin/productform" element={<ProductForm />} />
          </Routes>
        </ErrorBoundary>

        <Footer />
        <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      </div>
    </BrowserRouter>
  );
}

export default App;
