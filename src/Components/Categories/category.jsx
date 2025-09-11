// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import categories from "./SeedData";
// import { ShopContext } from "../../Context/ShopContext";
// import { getNewProducts } from "../../api";
// import "./category.css";

// const Category = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState(null);
//   const [newCollection, setNewCollection] = useState([]);
//   const { addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchNewProducts = async () => {
//       try {
//         const { data } = await getNewProducts();
//         setNewCollection(data);
//       } catch (err) {
//         console.error("Error fetching new products:", err);
//       }
//     };
//     fetchNewProducts();
//   }, []);

//   const handleAddToCart = (id) => {
//     addToCart(id);
//     navigate("/cart");
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory(null);
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     if (subcategory.route) navigate(subcategory.route);
//     else if (subcategory.products) setSelectedSubcategory(subcategory);
//   };

//   const handleBack = () => {
//     if (selectedSubcategory) setSelectedSubcategory(null);
//     else setSelectedCategory(null);
//   };

//   return (
//     <div className="category-container">
//       <h1 className="category-title">Shop by Category</h1>

//       {/* New Collection */}
//       {newCollection.length > 0 && (
//         <div className="new-collection">
//           <h2>🆕 New Collection</h2>
//           <div className="product-grid">
//             {newCollection.map((product) => (
//               <div key={product._id} className="product-card">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-img"
//                 />
//                 <h4>{product.name}</h4>
//                 <p>₹{product.price}</p>
//                 <button onClick={() => handleAddToCart(product._id)}>
//                   🛒 Add to Cart
//                 </button>
//                 <button onClick={() => navigate(`/product/${product._id}`)}>
//                   View Details
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Categories */}
//       {!selectedCategory && (
//         <div className="category-grid">
//           {categories.map((cat, i) => (
//             <div
//               key={i}
//               className="category-card"
//               onClick={() => handleCategoryClick(cat)}
//             >
//               {cat.image && (
//                 <img src={cat.image} alt={cat.name} className="category-img" />
//               )}
//               <div>{cat.name}</div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Subcategories */}
//       {selectedCategory && !selectedSubcategory && (
//         <div className="details-container">
//           <h2>{selectedCategory.name} - Subcategories</h2>
//           <div className="subcategory-grid">
//             {selectedCategory.subcategories?.map((sub, i) => (
//               <div
//                 key={i}
//                 className="subcategory-card"
//                 onClick={() => handleSubcategoryClick(sub)}
//               >
//                 {sub.name}
//               </div>
//             ))}
//           </div>

//           {selectedCategory.products && (
//             <div className="category-products">
//               <h3>{selectedCategory.name} Products</h3>
//               <div className="product-grid">
//                 {selectedCategory.products.map((product) => (
//                   <div key={product.id} className="product-card">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="product-img"
//                     />
//                     <h4>{product.name}</h4>
//                     <p>₹{product.price}</p>
//                     <button onClick={() => handleAddToCart(product.id)}>
//                       🛒 Add to Cart
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           <button onClick={handleBack}>⬅ Back</button>
//         </div>
//       )}

//       {/* Subcategory Products */}
//       {selectedSubcategory && (
//         <div className="subcategory-products">
//           <h2>{selectedSubcategory.name}</h2>
//           <div className="product-grid">
//             {selectedSubcategory.products.map((product) => (
//               <div key={product.id} className="product-card">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-img"
//                 />
//                 <h4>{product.name}</h4>
//                 <p>₹{product.price}</p>
//                 <p>{product.description}</p>
//                 <button onClick={() => handleAddToCart(product.id)}>
//                   🛒 Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//           <button onClick={handleBack}>⬅ Back</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Category;
// src/Pages/Category/Category.jsx
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import categories from "./SeedData";
import { ShopContext } from "../../Context/ShopContext";
import { getNewProducts } from "../../api";
import "./category.css";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [newCollection, setNewCollection] = useState([]);
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const { data } = await getNewProducts();

        // ✅ remove duplicates by product name (prevents Dress from showing twice)
        const uniqueProducts = data.filter(
          (prod, index, self) =>
            index === self.findIndex((p) => p.name === prod.name)
        );

        setNewCollection(uniqueProducts);
      } catch (err) {
        console.error("Error fetching new products:", err);
      }
    };
    fetchNewProducts();
  }, []);

  const handleAddToCart = (id) => {
    addToCart(id);
    navigate("/cart");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    if (subcategory.route) navigate(subcategory.route);
    else if (subcategory.products) setSelectedSubcategory(subcategory);
  };

  const handleBack = () => {
    if (selectedSubcategory) setSelectedSubcategory(null);
    else setSelectedCategory(null);
  };

  return (
    <div className="category-container">
      <h1 className="category-title">Shop by Category</h1>

      {/* 🆕 New Collection */}
      {newCollection.length > 0 && (
        <div className="new-collection">
          <h2>🆕 New Collection</h2>
          <div className="product-grid">
            {newCollection.map((product) => (
              <div key={product._id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                  onClick={() => navigate(`/product/${product._id}`)}
                />
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
                <button onClick={() => handleAddToCart(product._id)}>
                  🛒 Add to Cart
                </button>
                <button onClick={() => navigate(`/product/${product._id}`)}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 📌 Categories */}
      {!selectedCategory && (
        <div className="category-grid">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="category-card"
              onClick={() => handleCategoryClick(cat)}
            >
              {cat.image && (
                <img src={cat.image} alt={cat.name} className="category-img" />
              )}
              <div>{cat.name}</div>
            </div>
          ))}
        </div>
      )}

      {/* 📌 Subcategories */}
      {selectedCategory && !selectedSubcategory && (
        <div className="details-container">
          <h2>{selectedCategory.name} - Subcategories</h2>
          <div className="subcategory-grid">
            {selectedCategory.subcategories?.map((sub, i) => (
              <div
                key={i}
                className="subcategory-card"
                onClick={() => handleSubcategoryClick(sub)}
              >
                {sub.name}
              </div>
            ))}
          </div>

          {selectedCategory.products && (
            <div className="category-products">
              <h3>{selectedCategory.name} Products</h3>
              <div className="product-grid">
                {selectedCategory.products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                      onClick={() => navigate(`/product/${product.id}`)}
                    />
                    <h4>{product.name}</h4>
                    <p>₹{product.price}</p>
                    <button onClick={() => handleAddToCart(product.id)}>
                      🛒 Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button onClick={handleBack}>⬅ Back</button>
        </div>
      )}

      {/* 📌 Subcategory Products */}
      {selectedSubcategory && (
        <div className="subcategory-products">
          <h2>{selectedSubcategory.name}</h2>
          <div className="product-grid">
            {selectedSubcategory.products.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                  onClick={() => navigate(`/product/${product.id}`)}
                />
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => handleAddToCart(product.id)}>
                  🛒 Add to Cart
                </button>
              </div>
            ))}
          </div>
          <button onClick={handleBack}>⬅ Back</button>
        </div>
      )}
    </div>
  );
};

export default Category;
