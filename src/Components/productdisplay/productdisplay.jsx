import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './productdisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    all_product,
    addToCart,
    wishlistItems,
    addToWishlist,
    removeFromWishlist
  } = useContext(ShopContext);

  const product = all_product.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="productdisplay">Product not found.</div>;
  }

  const isWishlisted = wishlistItems.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product.id);
    navigate('/cart'); 
  };

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={product.image} alt={product.name} />
          ))}
        </div>
        <div className="productdisplay-img-main">
          <img src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="star" />
          <p>(122 reviews)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
  {product.description || "This elegant dress features a timeless design crafted from high-quality fabric. Perfect for casual outings, formal events, or everyday wear, it offers both comfort and style to enhance your wardrobe."}
</div>

        <div className="productdisplay-right-buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleToggleWishlist}>
            {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
