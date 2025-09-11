import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = () => {
  const { categoryName } = useParams(); // e.g., /women, /men, /kid
  const { all_product, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  // Filter products safely by category
  const filteredProducts = all_product.filter(
    (product) =>
      product.category &&
      typeof product.category === "string" &&
      product.category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="shop-category">
      <h2 className="shop-category-title">
        {categoryName
          ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
          : "Category"}{" "}
        Products
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="no-products">No products found in this category.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image || ""}
                alt={product.name || "Product"}
                className="product-img"
              />
              <h3>{product.name || "Unnamed Product"}</h3>
              <p>₹{product.new_price || product.price || 0}</p>
              <button
                onClick={() => {
                  addToCart(product.id);
                  navigate("/cart");
                }}
              >
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
