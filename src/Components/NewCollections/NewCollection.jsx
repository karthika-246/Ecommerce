import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./NewCollections.css";

const Item = ({ _id, id, name, image, new_price, old_price }) => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useContext(ShopContext);

  const productId = id || _id;

  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-image"
        onClick={() => navigate(`/product/${productId}`)} // ✅ click to go to details
      />
      <h4 className="product-name">{name}</h4>
      <p className="product-price">
        ₹{new_price}{" "}
        {old_price && <span className="product-old-price">₹{old_price}</span>}
      </p>
      <div className="product-buttons">
        <button className="btn-cart" onClick={() => {
          addToCart(productId);
          navigate("/cart"); // ✅ after add, go to cart
        }}>
          Add to Cart
        </button>
        <button className="btn-wishlist" onClick={() => addToWishlist(productId)}>
          ❤️ Wishlist
        </button>
      </div>
    </div>
  );
};

const NewCollections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="collections-container">
      <h1 className="collections-title">🛍 New Collections</h1>
      <div className="collections-grid">
        {products.map((product) => (
          <Item key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
