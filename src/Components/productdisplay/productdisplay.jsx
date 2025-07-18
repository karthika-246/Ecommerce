import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './productdisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
  const { addToCart, wishlistItems, toggleWishlist } = useContext(ShopContext);

  if (!product) {
    return <div className="productdisplay">Product not found.</div>;
  }

  const isWishlisted = wishlistItems?.includes(product.id);

  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
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
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">{product.description}</div>
        <div className="productdisplay-right-buttons">
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          <button onClick={handleToggleWishlist}>
            {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;