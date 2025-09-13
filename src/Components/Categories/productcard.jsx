// import React, { useContext } from "react";
// import { ShopContext } from "../../Context/ShopContext";


// const ProductCard = ({ product }) => {
//   const { addToCart } = useContext(ShopContext);

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} className="product-img" />
//       <h3>{product.name}</h3>
//       <p className="price">₹{product.new_price || product.price}</p>

//       <p
//         className={`stock-status ${
//           product.quantity > 0 ? "in-stock" : "out-of-stock"
//         }`}
//       >
//         {product.quantity > 0
//           ? `Stock Left: ${product.quantity}`
//           : "Out of Stock"}
//       </p>

//       <button
//         className="add-to-cart-btn"
//         onClick={() => addToCart(product.id)}
//         disabled={product.quantity <= 0} // 🔥 Prevent adding if out of stock
//       >
//         {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>Stock: {product.stock}</p>

      {product.stock <= 0 ? (
        <button disabled className="btn-disabled">
          Currently Unavailable
        </button>
      ) : (
        <button onClick={() => addToCart(product._id)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
