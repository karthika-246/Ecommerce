import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const Shop = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-container">
      <h2>🛍 All Products</h2>
      <div className="shop-grid">
        {all_product.map((product) => (
          <div className="shop-card" key={product.id}>
            {/* ✅ Clicking image or name navigates to /product/:id */}
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="shop-img" />
            </Link>

            <Link to={`/product/${product.id}`} className="shop-name">
              <h3>{product.name}</h3>
            </Link>

            <p>₹{product.price || product.new_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
