// Components/ProductCard/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-img" />
        <h3>{product.name}</h3>
        <p>₹{product.price || product.new_price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;