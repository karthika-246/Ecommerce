import React, { useContext } from 'react';
<<<<<<< HEAD
import { useParams, useNavigate } from 'react-router-dom';
=======
>>>>>>> 5b91bf0 (updation1)
import { ShopContext } from '../../Context/ShopContext';
import './productdisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

<<<<<<< HEAD
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
=======
const ProductDisplay = ({ product }) => {
  const { addToCart, wishlistItems, toggleWishlist } = useContext(ShopContext);
>>>>>>> 5b91bf0 (updation1)

  if (!product) {
    return <div className="productdisplay">Product not found.</div>;
  }

<<<<<<< HEAD
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
=======
  const isWishlisted = wishlistItems?.includes(product.id);

  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
>>>>>>> 5b91bf0 (updation1)
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
<<<<<<< HEAD
          {[...Array(4)].map((_, index) => (
            <img key={index} src={product.image} alt={product.name} />
          ))}
=======
          <img src={product.image} alt={product.name} />
>>>>>>> 5b91bf0 (updation1)
        </div>
        <div className="productdisplay-img-main">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
<<<<<<< HEAD

=======
>>>>>>> 5b91bf0 (updation1)
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="star" />
<<<<<<< HEAD
          <p>(122 reviews)</p>
        </div>

=======
          <p>(122)</p>
        </div>
>>>>>>> 5b91bf0 (updation1)
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>
<<<<<<< HEAD

        <div className="productdisplay-right-description">
  {product.description || "This elegant dress features a timeless design crafted from high-quality fabric. Perfect for casual outings, formal events, or everyday wear, it offers both comfort and style to enhance your wardrobe."}
</div>

        <div className="productdisplay-right-buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
=======
        <div className="productdisplay-right-description">{product.description}</div>
        <div className="productdisplay-right-buttons">
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
>>>>>>> 5b91bf0 (updation1)
          <button onClick={handleToggleWishlist}>
            {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ProductDisplay;
=======
export default ProductDisplay;
>>>>>>> 5b91bf0 (updation1)
