// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "./NewCollections.css";

// function NewCollections() {
//   const [products, setProducts] = useState([]);

//   // Fetch products from backend
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/products");
//       setProducts(res.data);
//     } catch (err) {
//       toast.error("Failed to load products");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-grid">
//       {products.length === 0 ? (
//         <p>No products available</p>
//       ) : (
//         products.map((p) => (
//           <div key={p._id} className="product-card">
//             <img src={p.image} alt={p.name} className="product-image" />
//             <div className="product-info">
//               <div className="product-title">{p.name}</div>
//               <div className="product-prices">
//                 ₹{p.new_price}
//                 {p.old_price && <span className="old-price">₹{p.old_price}</span>}
//               </div>
//               <div className="action-buttons">
//                 <button onClick={() => toast.info("Added to cart")}>
//                   Add to Cart
//                 </button>
//                 <button className="wishlist-btn" onClick={() => toast.info("Added to wishlist")}>
//                   Wishlist
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default NewCollections;
import React, { useEffect, useState } from "react";
import { getNewProducts } from "../../api";
import "./newcollections.css";

const NewCollections = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const { data } = await getNewProducts();
        setNewProducts(data);
      } catch (err) {
        console.error("Error fetching new products:", err);
      }
    };
    fetchNewProducts();
  }, []);

  return (
    <div className="new-collections">
      <h2>🆕 New Collection</h2>
      <div className="collection-grid">
        {newProducts.map((product) => (
          <div key={product._id} className="collection-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
