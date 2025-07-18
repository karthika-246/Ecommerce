import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useContext(ShopContext);

  if (!product) return <div>No product data available</div>;

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info('Removed from wishlist');
    } else {
      addToWishlist(product.id);
      toast.success('Added to wishlist');
    }
  };

  const handleOrder = () => {
    addToCart(product.id);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width={150} />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={handleOrder}>Add to Cart</button>
      <button onClick={handleWishlist}>
        {isInWishlist(product.id) ? '❤️ Remove' : '🤍 Wishlist'}
      </button>
    </div>
  );
};

export default ProductCard;
