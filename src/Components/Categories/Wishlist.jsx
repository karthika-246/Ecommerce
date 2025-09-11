import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";

const Wishlist = () => {
  const { wishlistItems, addToCart, removeFromWishlist } =
    useContext(ShopContext);
  const navigate = useNavigate();

  if (!wishlistItems || wishlistItems.length === 0) {
    return <div className="wishlist-empty">💔 Your wishlist is empty</div>;
  }

  return (
    <div className="wishlist">
      <h2>❤️ My Wishlist</h2>
      <div className="wishlist-container">
        {wishlistItems.map((product) => (
          <div className="wishlist-item" key={product.id || product._id}>
            <img
              src={product.image}
              alt={product.name}
              className="wishlist-img"
              onClick={() => navigate(`/product/${product.id ?? product._id}`)}
            />
            <div className="wishlist-info">
              <h3>{product.name}</h3>
              <p className="wishlist-price">₹{product.price ?? product.new_price}</p>
              <div className="wishlist-actions">
                <button
                  onClick={() => {
                    addToCart(product.id ?? product._id);
                    navigate("/cart");
                  }}
                >
                  🛒 Add to Cart
                </button>
                <button onClick={() => removeFromWishlist(product.id ?? product._id)}>
                  ❌ Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
