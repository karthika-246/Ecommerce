// // // // // src/Context/ShopContext.js
// // // // import React, { createContext, useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import categories from "../Components/Categories/SeedData";
// // // // import all_product from "../Components/Assets/all_product";

// // // // export const ShopContext = createContext();

// // // // // 🔹 Flatten seed data
// // // // const getSeedDataProducts = () => {
// // // //   let products = [];
// // // //   categories.forEach((cat) => {
// // // //     cat.products?.forEach((p) => {
// // // //       products.push({ ...p, category: cat.name.toLowerCase() });
// // // //     });
// // // //     cat.subcategories?.forEach((sub) => {
// // // //       sub.products?.forEach((p) => {
// // // //         products.push({ ...p, category: sub.name.toLowerCase() });
// // // //       });
// // // //     });
// // // //   });
// // // //   return products;
// // // // };

// // // // // 🔹 Merge & deduplicate
// // // // const mergeUniqueProducts = (extra = []) => {
// // // //   const combined = [...all_product, ...getSeedDataProducts(), ...extra];
// // // //   const unique = [];
// // // //   const seen = new Set();
// // // //   combined.forEach((p) => {
// // // //     const key = String(p._id || p.id);
// // // //     if (!seen.has(key)) {
// // // //       seen.add(key);
// // // //       // ✅ Ensure stock field always exists
// // // //       unique.push({ ...p, stock: p.stock ?? 10 });
// // // //     }
// // // //   });
// // // //   return unique;
// // // // };

// // // // export const ShopProvider = ({ children }) => {
// // // //   const [cartItems, setCartItems] = useState({});
// // // //   const [cartOrder, setCartOrder] = useState([]);
// // // //   const [allProducts, setAllProducts] = useState(mergeUniqueProducts());

// // // //   // ✅ Fetch products from backend on load
// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         const res = await axios.get("http://localhost:5000/api/product/getAll");
// // // //         setAllProducts(mergeUniqueProducts(res.data));
// // // //       } catch (err) {
// // // //         console.error("Error fetching products:", err);
// // // //       }
// // // //     };
// // // //     fetchProducts();
// // // //   }, []);

// // // //   // ✅ Update stock in backend (relative change)
// // // //   const updateStock = async (id, change) => {
// // // //     try {
// // // //       await axios.put(`http://localhost:5000/api/product/updateStock/${id}`, {
// // // //         change,
// // // //       });
// // // //       // Refresh after update
// // // //       const res = await axios.get("http://localhost:5000/api/product/getAll");
// // // //       setAllProducts(mergeUniqueProducts(res.data));
// // // //     } catch (err) {
// // // //       console.error("Error updating stock:", err);
// // // //     }
// // // //   };

// // // //   // ✅ Direct stock set (Admin override)
// // // //   const setStock = async (id, newStock) => {
// // // //     try {
// // // //       await axios.put(`http://localhost:5000/api/product/setStock/${id}`, {
// // // //         stock: newStock,
// // // //       });
// // // //       // Refresh after update
// // // //       const res = await axios.get("http://localhost:5000/api/product/getAll");
// // // //       setAllProducts(mergeUniqueProducts(res.data));
// // // //     } catch (err) {
// // // //       console.error("Error setting stock:", err);
// // // //     }
// // // //   };

// // // //   // Add to cart
// // // //   const addToCart = (id) => {
// // // //     const product = allProducts.find((p) => String(p._id || p.id) === String(id));
// // // //     if (!product || product.stock <= 0) return; // prevent adding if out of stock

// // // //     setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
// // // //     setCartOrder((prev) => [id, ...prev.filter((pid) => pid !== id)]);
// // // //     updateStock(id, -1); // 🔹 Decrease stock
// // // //   };

// // // //   // Remove completely from cart
// // // //   const removeFromCart = (id) => {
// // // //     const qty = cartItems[id] || 0;
// // // //     if (qty > 0) updateStock(id, qty); // 🔹 Restore all removed
// // // //     setCartItems((prev) => ({ ...prev, [id]: 0 }));
// // // //     setCartOrder((prev) => prev.filter((pid) => pid !== id));
// // // //   };

// // // //   // Update quantity (increase/decrease)
// // // //   const updateCartItemCount = (newAmount, id) => {
// // // //     const current = cartItems[id] || 0;
// // // //     setCartItems((prev) => ({ ...prev, [id]: newAmount }));

// // // //     if (newAmount > current) {
// // // //       updateStock(id, -(newAmount - current)); // 🔹 Decrease stock
// // // //     } else if (newAmount < current) {
// // // //       updateStock(id, current - newAmount); // 🔹 Restore stock
// // // //     }

// // // //     if (newAmount === 0) {
// // // //       setCartOrder((prev) => prev.filter((pid) => pid !== id));
// // // //     }
// // // //   };

// // // //   // Get total cart amount
// // // //   const getTotalCartAmount = () => {
// // // //     let total = 0;
// // // //     for (const item in cartItems) {
// // // //       if (cartItems[item] > 0) {
// // // //         const product = allProducts.find(
// // // //           (p) => String(p._id || p.id) === String(item)
// // // //         );
// // // //         if (product) {
// // // //           total += (product.price || product.new_price) * cartItems[item];
// // // //         }
// // // //       }
// // // //     }
// // // //     return total;
// // // //   };

// // // //   return (
// // // //     <ShopContext.Provider
// // // //       value={{
// // // //         all_product: allProducts,
// // // //         cartItems,
// // // //         cartOrder,
// // // //         addToCart,
// // // //         removeFromCart,
// // // //         updateCartItemCount,
// // // //         getTotalCartAmount,
// // // //         setAllProducts,
// // // //         setStock, // ✅ Admin can override stock
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </ShopContext.Provider>
// // // //   );
// // // // };

// // // // export default ShopProvider;
// // // // src/Context/ShopContext.js
// // // import React, { createContext, useState, useEffect } from "react";
// // // import axios from "axios";
// // // import categories from "../Components/Categories/SeedData";
// // // import all_product from "../Components/Assets/all_product";

// // // export const ShopContext = createContext();

// // // // 🔹 Flatten seed data
// // // const getSeedDataProducts = () => {
// // //   let products = [];
// // //   categories.forEach((cat) => {
// // //     cat.products?.forEach((p) => {
// // //       products.push({ ...p, category: cat.name.toLowerCase() });
// // //     });
// // //     cat.subcategories?.forEach((sub) => {
// // //       sub.products?.forEach((p) => {
// // //         products.push({ ...p, category: sub.name.toLowerCase() });
// // //       });
// // //     });
// // //   });
// // //   return products;
// // // };

// // // // 🔹 Merge & deduplicate
// // // const mergeUniqueProducts = (extra = []) => {
// // //   const combined = [...all_product, ...getSeedDataProducts(), ...extra];
// // //   const unique = [];
// // //   const seen = new Set();

// // //   combined.forEach((p) => {
// // //     const key = String(p._id || p.id);
// // //     if (!seen.has(key)) {
// // //       seen.add(key);
// // //       // ✅ Ensure stock field always exists
// // //       unique.push({ ...p, stock: p.stock ?? 10 });
// // //     }
// // //   });
// // //   return unique;
// // // };

// // // export const ShopProvider = ({ children }) => {
// // //   const [cartItems, setCartItems] = useState({});
// // //   const [cartOrder, setCartOrder] = useState([]);
// // //   const [allProducts, setAllProducts] = useState(mergeUniqueProducts());

// // //   // ✅ Fetch products from backend on load
// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const res = await axios.get("http://localhost:5000/api/product/getAll");
// // //         setAllProducts(mergeUniqueProducts(res.data));
// // //       } catch (err) {
// // //         console.error("Error fetching products:", err);
// // //       }
// // //     };
// // //     fetchProducts();
// // //   }, []);

// // //   // ✅ Update stock in backend (relative change)
// // //   const updateStock = async (id, change) => {
// // //     try {
// // //       await axios.put(`http://localhost:5000/api/product/updateStock/${id}`, {
// // //         change,
// // //       });
// // //       // Refresh products after update
// // //       const res = await axios.get("http://localhost:5000/api/product/getAll");
// // //       setAllProducts(mergeUniqueProducts(res.data));
// // //     } catch (err) {
// // //       console.error("Error updating stock:", err);
// // //     }
// // //   };

// // //   // ✅ Direct stock set (Admin override)
// // //   const setStock = async (id, newStock) => {
// // //     try {
// // //       await axios.put(`http://localhost:5000/api/product/setStock/${id}`, {
// // //         stock: newStock,
// // //       });
// // //       // Refresh after update
// // //       const res = await axios.get("http://localhost:5000/api/product/getAll");
// // //       setAllProducts(mergeUniqueProducts(res.data));
// // //     } catch (err) {
// // //       console.error("Error setting stock:", err);
// // //     }
// // //   };

// // //   // 🔹 Add to cart
// // //   const addToCart = (id) => {
// // //     const product = allProducts.find((p) => String(p._id || p.id) === String(id));
// // //     if (!product || product.stock <= 0) return; // prevent adding if out of stock

// // //     setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
// // //     setCartOrder((prev) => [id, ...prev.filter((pid) => pid !== id)]);
// // //     updateStock(id, -1); // reduce stock
// // //   };

// // //   // 🔹 Remove completely from cart (restore full qty)
// // //   const removeFromCart = (id) => {
// // //     const qty = cartItems[id] || 0;
// // //     if (qty > 0) updateStock(id, qty); // restore stock
// // //     setCartItems((prev) => ({ ...prev, [id]: 0 }));
// // //     setCartOrder((prev) => prev.filter((pid) => pid !== id));
// // //   };

// // //   // 🔹 Update cart item count (increase/decrease with sync to stock)
// // //   const updateCartItemCount = (newAmount, id) => {
// // //     const current = cartItems[id] || 0;
// // //     setCartItems((prev) => ({ ...prev, [id]: newAmount }));

// // //     if (newAmount > current) {
// // //       updateStock(id, -(newAmount - current)); // decrease stock
// // //     } else if (newAmount < current) {
// // //       updateStock(id, current - newAmount); // restore stock
// // //     }

// // //     if (newAmount === 0) {
// // //       setCartOrder((prev) => prev.filter((pid) => pid !== id));
// // //     } else {
// // //       setCartOrder((prev) => [id, ...prev.filter((pid) => pid !== id)]);
// // //     }
// // //   };

// // //   // 🔹 Total cart amount
// // //   const getTotalCartAmount = () => {
// // //     let total = 0;
// // //     for (const item in cartItems) {
// // //       if (cartItems[item] > 0) {
// // //         const product = allProducts.find(
// // //           (p) => String(p._id || p.id) === String(item)
// // //         );
// // //         if (product) {
// // //           total += (product.price || product.new_price) * cartItems[item];
// // //         }
// // //       }
// // //     }
// // //     return total;
// // //   };

// // //   return (
// // //     <ShopContext.Provider
// // //       value={{
// // //         all_product: allProducts,
// // //         cartItems,
// // //         cartOrder,
// // //         addToCart,
// // //         removeFromCart,
// // //         updateCartItemCount,
// // //         getTotalCartAmount,
// // //         setAllProducts,
// // //         setStock, // ✅ Admin override
// // //       }}
// // //     >
// // //       {children}
// // //     </ShopContext.Provider>
// // //   );
// // // };

// // // export default ShopProvider;
// // // src/Context/ShopContext.jsx
// // import React, { createContext, useState } from "react";
// // import { toast } from "react-toastify";
// // import categories from "../Components/Categories/SeedData";
// // import all_product from "../Components/Assets/all_product";

// // export const ShopContext = createContext();

// // // 🔹 Flatten seed data
// // const getSeedDataProducts = () => {
// //   let products = [];
// //   categories.forEach((cat) => {
// //     cat.products?.forEach((p) => {
// //       products.push({ ...p, category: cat.name.toLowerCase() });
// //     });
// //     cat.subcategories?.forEach((sub) => {
// //       sub.products?.forEach((p) => {
// //         products.push({ ...p, category: sub.name.toLowerCase() });
// //       });
// //     });
// //   });
// //   return products;
// // };

// // // 🔹 Merge & deduplicate
// // const mergeUniqueProducts = (extra = []) => {
// //   const combined = [...all_product, ...getSeedDataProducts(), ...extra];
// //   const unique = [];
// //   const seen = new Set();

// //   combined.forEach((p) => {
// //     const key = String(p._id || p.id);
// //     if (!seen.has(key)) {
// //       seen.add(key);
// //       unique.push({ ...p, stock: p.stock ?? 10 }); // default stock = 10
// //     }
// //   });
// //   return unique;
// // };

// // export const ShopProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState({});
// //   const [cartOrder, setCartOrder] = useState([]);
// //   const [allProducts, setAllProducts] = useState(mergeUniqueProducts());

// //   // ✅ Update stock locally
// //   const updateStock = async (id, change) => {
// //     try {
// //       setAllProducts((prev) =>
// //         prev.map((p) =>
// //           String(p._id || p.id) === String(id)
// //             ? { ...p, stock: Math.max(0, (p.stock || 0) + change) }
// //             : p
// //         )
// //       );
// //       return true;
// //     } catch (err) {
// //       console.error("Error updating stock:", err);
// //       toast.error("❌ Failed to update stock (local)");
// //       return false;
// //     }
// //   };

// //   // ✅ Admin override
// //   const setStock = async (id, newStock) => {
// //     try {
// //       setAllProducts((prev) =>
// //         prev.map((p) =>
// //           String(p._id || p.id) === String(id)
// //             ? { ...p, stock: newStock }
// //             : p
// //         )
// //       );
// //       toast.success("✅ Stock updated (local)");
// //       return true;
// //     } catch (err) {
// //       console.error("Error setting stock:", err);
// //       toast.error("❌ Failed to set stock (local)");
// //       return false;
// //     }
// //   };

// //   // 🔹 Add to cart
// //   const addToCart = async (id) => {
// //     const product = allProducts.find((p) => String(p._id || p.id) === String(id));
// //     if (!product || product.stock <= 0) {
// //       toast.warn("⚠️ Product is currently unavailable");
// //       return;
// //     }

// //     setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
// //     setCartOrder((prev) => [id, ...prev.filter((pid) => pid !== id)]);
// //     await updateStock(id, -1); // reduce stock
// //   };

// //   // 🔹 Remove completely from cart
// //   const removeFromCart = async (id) => {
// //     const qty = cartItems[id] || 0;
// //     if (qty > 0) await updateStock(id, qty); // restore stock
// //     setCartItems((prev) => ({ ...prev, [id]: 0 }));
// //     setCartOrder((prev) => prev.filter((pid) => pid !== id));
// //   };

// //   // 🔹 Update cart count
// //   const updateCartItemCount = async (newAmount, id) => {
// //     const current = cartItems[id] || 0;
// //     setCartItems((prev) => ({ ...prev, [id]: newAmount }));

// //     if (newAmount > current) {
// //       await updateStock(id, -(newAmount - current));
// //     } else if (newAmount < current) {
// //       await updateStock(id, current - newAmount);
// //     }

// //     if (newAmount === 0) {
// //       setCartOrder((prev) => prev.filter((pid) => pid !== id));
// //     } else {
// //       setCartOrder((prev) => [id, ...prev.filter((pid) => pid !== id)]);
// //     }
// //   };

// //   // 🔹 Cart total
// //   const getTotalCartAmount = () => {
// //     let total = 0;
// //     for (const item in cartItems) {
// //       if (cartItems[item] > 0) {
// //         const product = allProducts.find(
// //           (p) => String(p._id || p.id) === String(item)
// //         );
// //         if (product) {
// //           total += (product.price || product.new_price) * cartItems[item];
// //         }
// //       }
// //     }
// //     return total;
// //   };

// //   return (
// //     <ShopContext.Provider
// //       value={{
// //         all_product: allProducts,
// //         cartItems,
// //         cartOrder,
// //         addToCart,
// //         removeFromCart,
// //         updateCartItemCount,
// //         getTotalCartAmount,
// //         setAllProducts,
// //         setStock, // Admin override
// //       }}
// //     >
// //       {children}
// //     </ShopContext.Provider>
// //   );
// // };

// // export default ShopProvider;








// import React, { createContext, useState, useEffect } from "react";
// import all_product from "../Components/Assets/all_product";
// import categories from "../Components/Categories/SeedData";

// export const ShopContext = createContext();

// const ShopProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState({});
//   const [allProducts, setAllProducts] = useState([]);

//   // 🔹 Flatten seed data
//   const getSeedDataProducts = () => {
//     let products = [];
//     categories.forEach((cat) => {
//       if (cat.products) {
//         products = [...products, ...cat.products];
//       }
//       if (cat.subcategories) {
//         cat.subcategories.forEach((sub) => {
//           if (sub.products) {
//             products = [...products, ...sub.products];
//           }
//         });
//       }
//     });
//     return products;
//   };

//   // 🔹 Merge & Deduplicate
//   const mergeUniqueProducts = (extra = []) => {
//     const combined = [...all_product, ...getSeedDataProducts(), ...extra];
//     const unique = [];
//     const seen = new Set();

//     combined.forEach((p) => {
//       const key = String(p._id || p.id);
//       if (!seen.has(key)) {
//         seen.add(key);
//         unique.push({
//           ...p,
//           stock: p.stock !== undefined ? p.stock : 10, // default stock
//         });
//       }
//     });

//     return unique;
//   };

//   // 🔹 Load from localStorage OR defaults
//   useEffect(() => {
//     const saved = localStorage.getItem("products");
//     if (saved) {
//       setAllProducts(JSON.parse(saved));
//     } else {
//       setAllProducts(mergeUniqueProducts());
//     }
//   }, []);

//   // 🔹 Persist to localStorage
//   useEffect(() => {
//     if (allProducts.length > 0) {
//       localStorage.setItem("products", JSON.stringify(allProducts));
//     }
//   }, [allProducts]);

//   // 🔹 Cart Actions
//   const addToCart = (id) => {
//     const product = allProducts.find((p) => String(p._id || p.id) === String(id));
//     if (!product || product.stock <= 0) return;

//     setCartItems((prev) => ({
//       ...prev,
//       [id]: (prev[id] || 0) + 1,
//     }));

//     setAllProducts((prev) =>
//       prev.map((p) =>
//         String(p._id || p.id) === String(id)
//           ? { ...p, stock: p.stock - 1 }
//           : p
//       )
//     );
//   };

//   const removeFromCart = (id) => {
//     const qty = cartItems[id] || 0;
//     if (qty > 0) {
//       setAllProducts((prev) =>
//         prev.map((p) =>
//           String(p._id || p.id) === String(id)
//             ? { ...p, stock: p.stock + qty }
//             : p
//         )
//       );
//     }
//     setCartItems((prev) => ({ ...prev, [id]: 0 }));
//   };

//   const updateCartItemCount = (newAmount, id) => {
//     const current = cartItems[id] || 0;
//     const diff = newAmount - current;

//     if (diff > 0) {
//       // user adding more
//       const product = allProducts.find((p) => String(p._id || p.id) === String(id));
//       if (!product || product.stock < diff) return; // not enough stock
//     }

//     setCartItems((prev) => ({ ...prev, [id]: newAmount }));

//     setAllProducts((prev) =>
//       prev.map((p) => {
//         if (String(p._id || p.id) === String(id)) {
//           return { ...p, stock: p.stock - diff };
//         }
//         return p;
//       })
//     );
//   };

//   const getTotalCartAmount = () => {
//     return Object.entries(cartItems).reduce((total, [id, qty]) => {
//       const product = allProducts.find(
//         (p) => String(p._id || p.id) === String(id)
//       );
//       return total + (product ? (product.price || product.new_price || 0) * qty : 0);
//     }, 0);
//   };

//   // 🔹 Admin stock update
//   const updateStock = (id, newStock) => {
//     setAllProducts((prev) =>
//       prev.map((p) =>
//         String(p._id || p.id) === String(id) ? { ...p, stock: newStock } : p
//       )
//     );
//   };

//   // 🔹 Reset products back to defaults
//   const resetStock = () => {
//     const fresh = mergeUniqueProducts();
//     setAllProducts(fresh);
//     localStorage.setItem("products", JSON.stringify(fresh));
//   };

//   return (
//     <ShopContext.Provider
//       value={{
//         all_product: allProducts,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateCartItemCount,
//         getTotalCartAmount,
//         updateStock,
//         resetStock,
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopProvider;

















import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import categories from "../Components/Categories/SeedData";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext();

// 🔹 Flatten seed data
const getSeedDataProducts = () => {
  let products = [];
  categories.forEach((cat) => {
    cat.products?.forEach((p) => {
      products.push({ ...p, category: cat.name.toLowerCase() });
    });
    cat.subcategories?.forEach((sub) => {
      sub.products?.forEach((p) => {
        products.push({ ...p, category: sub.name.toLowerCase() });
      });
    });
  });
  return products;
};

// 🔹 Merge & deduplicate
const mergeUniqueProducts = (extra = []) => {
  const combined = [...all_product, ...getSeedDataProducts(), ...extra];
  const unique = [];
  const seen = new Set();

  combined.forEach((p) => {
    const key = String(p._id || p.id);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push({ ...p, stock: p.stock ?? 10 }); // default stock = 10
    }
  });
  return unique;
};

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [cartOrder, setCartOrder] = useState([]);
  const [allProducts, setAllProducts] = useState(mergeUniqueProducts());

  // ✅ Update stock locally
  const updateStock = async (id, change) => {
    try {
      setAllProducts((prev) =>
        prev.map((p) =>
          String(p._id || p.id) === String(id)
            ? { ...p, stock: Math.max(0, (p.stock || 0) + change) }
            : p
        )
      );
      return true;
    } catch (err) {
      console.error("Error updating stock:", err);
      toast.error("❌ Failed to update stock (local)");
      return false;
    }
  };

  // ✅ Admin override
  const setStock = async (id, newStock) => {
    try {
      setAllProducts((prev) =>
        prev.map((p) =>
          String(p._id || p.id) === String(id)
            ? { ...p, stock: newStock }
            : p
        )
      );
      toast.success("✅ Stock updated (local)");
      return true;
    } catch (err) {
      console.error("Error setting stock:", err);
      toast.error("❌ Failed to set stock (local)");
      return false;
    }
  };

  // 🔹 Add to cart
  const addToCart = async (id) => {
    const product = allProducts.find((p) => String(p._id || p.id) === String(id));
    if (!product || product.stock <= 0) {
      toast.warn("⚠️ Product is currently unavailable");
      return;
    }

    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setCartOrder((prev) => [id, ...prev.filter((pid) => pid !== id)]);
    await updateStock(id, -1); // reduce stock
  };

  // 🔹 Remove completely from cart
  const removeFromCart = async (id) => {
    const qty = cartItems[id] || 0;
    if (qty > 0) await updateStock(id, qty); // restore stock
    setCartItems((prev) => ({ ...prev, [id]: 0 }));
    setCartOrder((prev) => prev.filter((pid) => pid !== id));
  };

  // 🔹 Update cart count
  const updateCartItemCount = async (newAmount, id) => {
    const current = cartItems[id] || 0;
    setCartItems((prev) => ({ ...prev, [id]: newAmount }));

    if (newAmount > current) {
      await updateStock(id, -(newAmount - current));
    } else if (newAmount < current) {
      await updateStock(id, current - newAmount);
    }

    if (newAmount === 0) {
      setCartOrder((prev) => prev.filter((pid) => pid !== id));
    } else {
      setCartOrder((prev) => [id, ...prev.filter((pid) => pid !== id)]);
    }
  };

  // 🔹 Cart total
  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = allProducts.find(
          (p) => String(p._id || p.id) === String(item)
        );
        if (product) {
          total += (product.price || product.new_price) * cartItems[item];
        }
      }
    }
    return total;
  };

  return (
    <ShopContext.Provider
      value={{
        all_product: allProducts,
        cartItems,
        cartOrder,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        setAllProducts,
        setStock, // Admin override
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
