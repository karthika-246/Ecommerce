// // // import React, { createContext, useState } from 'react';
// // // import all_product from '../Components/Assets/all_product';

// // // export const ShopContext = createContext();

// // // const getDefaultCart = () => {
// // //   let cart = {};
// // //   for (let i = 0; i < all_product.length; i++) {
// // //     cart[all_product[i].id] = 0;
// // //   }
// // //   return cart;
// // // };

// // // const ShopContextProvider = (props) => {
// // //   const [cartItems, setCartItems] = useState(getDefaultCart());
// // //   const [wishlistItems, setWishlistItems] = useState([]);

// // //   const addToCart = (itemId) => {
// // //     setCartItems((prev) => ({
// // //       ...prev,
// // //       [itemId]: prev[itemId] + 1,
// // //     }));
// // //   };

// // //   const removeFromCart = (itemId) => {
// // //     setCartItems((prev) => ({
// // //       ...prev,
// // //       [itemId]: prev[itemId] - 1,
// // //     }));
// // //   };

// // //   const updateCartItemCount = (newAmount, itemId) => {
// // //     setCartItems((prev) => ({
// // //       ...prev,
// // //       [itemId]: Number(newAmount),
// // //     }));
// // //   };

// // //   const getTotalCartAmount = () => {
// // //     let totalAmount = 0;
// // //     for (const itemId in cartItems) {
// // //       if (cartItems[itemId] > 0) {
// // //         const product = all_product.find((p) => p.id === Number(itemId));
// // //         if (product) {
// // //           totalAmount += product.new_price * cartItems[itemId];
// // //         }
// // //       }
// // //     }
// // //     return totalAmount;
// // //   };

// // //   const addToWishlist = (itemId) => {
// // //     setWishlistItems((prev) => [...prev, itemId]);
// // //   };

// // //   const removeFromWishlist = (itemId) => {
// // //     setWishlistItems((prev) => prev.filter((id) => id !== itemId));
// // //   };

// // //   return (
// // //     <ShopContext.Provider
// // //       value={{
// // //         all_product,
// // //         cartItems,
// // //         addToCart,
// // //         removeFromCart,
// // //         updateCartItemCount, 
// // //         getTotalCartAmount,
// // //         wishlistItems,
// // //         addToWishlist,
// // //         removeFromWishlist
// // //       }}
// // //     >
// // //       {props.children}
// // //     </ShopContext.Provider>
// // //   );
// // // };

// // // export default ShopContextProvider;
// // // import React, { createContext, useState } from "react";
// // // import all_product from "../Components/Assets/all_product";

// // // export const ShopContext = createContext();

// // // const getDefaultCart = () => {
// // //   let cart = {};
// // //   all_product.forEach((product) => {
// // //     cart[String(product.id)] = 0; // ✅ String keys
// // //   });
// // //   return cart;
// // // };

// // // const ShopContextProvider = ({ children }) => {
// // //   const [cartItems, setCartItems] = useState(getDefaultCart());
// // //   const [wishlistItems, setWishlistItems] = useState([]);

// // //   // Add to cart
// // //   const addToCart = (product) => {
// // //     const itemId = String(product.id);
// // //     setCartItems((prev) => ({
// // //       ...prev,
// // //       [itemId]: (prev[itemId] || 0) + 1,
// // //     }));
// // //   };

// // //   // Remove from cart
// // //   const removeFromCart = (itemId) => {
// // //     itemId = String(itemId);
// // //     setCartItems((prev) => ({
// // //       ...prev,
// // //       [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
// // //     }));
// // //   };

// // //   // Update quantity
// // //   const updateCartItemCount = (newAmount, itemId) => {
// // //     itemId = String(itemId);
// // //     setCartItems((prev) => ({
// // //       ...prev,
// // //       [itemId]: Number(newAmount),
// // //     }));
// // //   };

// // //   // Calculate grand total
// // //   const getTotalCartAmount = () => {
// // //     let total = 0;
// // //     for (const itemId in cartItems) {
// // //       if (cartItems[itemId] > 0) {
// // //         const product = all_product.find((p) => String(p.id) === itemId);
// // //         if (product) total += product.price * cartItems[itemId];
// // //       }
// // //     }
// // //     return total;
// // //   };

// // //   // Add to wishlist
// // //   const addToWishlist = (product) => {
// // //     if (!wishlistItems.find((p) => p.id === product.id)) {
// // //       setWishlistItems([...wishlistItems, product]);
// // //     }
// // //   };

// // //   // Remove from wishlist
// // //   const removeFromWishlist = (itemId) => {
// // //     setWishlistItems((prev) => prev.filter((p) => p.id !== itemId));
// // //   };

// // //   return (
// // //     <ShopContext.Provider
// // //       value={{
// // //         all_product,
// // //         cartItems,
// // //         addToCart,
// // //         removeFromCart,
// // //         updateCartItemCount,
// // //         getTotalCartAmount,
// // //         wishlistItems,
// // //         addToWishlist,
// // //         removeFromWishlist,
// // //       }}
// // //     >
// // //       {children}
// // //     </ShopContext.Provider>
// // //   );
// // // };

// // // export default ShopContextProvider;
// // import React, { createContext, useState } from "react";
// // import all_product from "../Components/Assets/all_product";

// // export const ShopContext = createContext();

// // const getDefaultCart = () => {
// //   const cart = {};
// //   all_product.forEach((product) => {
// //     cart[String(product.id)] = 0; // ✅ Use string keys
// //   });
// //   return cart;
// // };

// // const ShopContextProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState(getDefaultCart());
// //   const [wishlistItems, setWishlistItems] = useState([]);

// //   // Add to cart
// //   const addToCart = (product) => {
// //     const id = String(product.id);
// //     setCartItems((prev) => ({
// //       ...prev,
// //       [id]: (prev[id] || 0) + 1,
// //     }));
// //   };

// //   // Remove from cart
// //   const removeFromCart = (itemId) => {
// //     itemId = String(itemId);
// //     setCartItems((prev) => ({
// //       ...prev,
// //       [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
// //     }));
// //   };

// //   // Update quantity
// //   const updateCartItemCount = (amount, itemId) => {
// //     itemId = String(itemId);
// //     setCartItems((prev) => ({
// //       ...prev,
// //       [itemId]: Number(amount),
// //     }));
// //   };

// //   // Calculate total
// //   const getTotalCartAmount = () => {
// //     let total = 0;
// //     for (const itemId in cartItems) {
// //       const product = all_product.find((p) => String(p.id) === itemId);
// //       if (product && cartItems[itemId] > 0) {
// //         total += cartItems[itemId] * (product.price || product.new_price || 0);
// //       }
// //     }
// //     return total;
// //   };

// //   // Wishlist
// //   const addToWishlist = (product) => {
// //     if (!wishlistItems.find((p) => p.id === product.id)) {
// //       setWishlistItems([...wishlistItems, product]);
// //     }
// //   };

// //   const removeFromWishlist = (id) => {
// //     setWishlistItems((prev) => prev.filter((p) => p.id !== id));
// //   };

// //   return (
// //     <ShopContext.Provider
// //       value={{
// //         all_product,
// //         cartItems,
// //         addToCart,
// //         removeFromCart,
// //         updateCartItemCount,
// //         getTotalCartAmount,
// //         wishlistItems,
// //         addToWishlist,
// //         removeFromWishlist,
// //       }}
// //     >
// //       {children}
// //     </ShopContext.Provider>
// //   );
// // };

// // export default ShopContextProvider;
// // src/Context/ShopContext.js
// import React, { createContext, useState } from "react";
// import all_product from "../Components/Assets/all_product";

// export const ShopContext = createContext();

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 0; i < all_product.length; i++) {
//     cart[all_product[i].id] = 0;
//   }
//   return cart;
// };

// const ShopProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (id) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [id]: prev[id] + 1,
//     }));
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => ({ ...prev, [id]: 0 }));
//   };

//   const updateCartItemCount = (newAmount, id) => {
//     if (newAmount >= 0) {
//       setCartItems((prev) => ({ ...prev, [id]: newAmount }));
//     }
//   };

//   const getTotalCartAmount = () => {
//     let total = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const product = all_product.find((p) => p.id === Number(item));
//         if (product) {
//           total += (product.price || product.new_price) * cartItems[item];
//         }
//       }
//     }
//     return total;
//   };

//   return (
//     <ShopContext.Provider
//       value={{
//         all_product,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateCartItemCount,
//         getTotalCartAmount,
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopProvider;
import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import categories from "../Components/Categories/SeedData";

export const ShopContext = createContext();

// 🔹 Flatten SeedData products and assign category
const getSeedDataProducts = () => {
  let products = [];
  categories.forEach((cat) => {
    // Products directly under category
    cat.products?.forEach((p) => {
      products.push({ ...p, category: cat.name.toLowerCase() });
    });
    // Products under subcategories
    cat.subcategories?.forEach((sub) => {
      sub.products?.forEach((p) => {
        products.push({ ...p, category: sub.name.toLowerCase() });
      });
    });
  });
  return products;
};

// 🔹 Merge & Deduplicate Products by id/_id
const mergeUniqueProducts = () => {
  const combined = [...all_product, ...getSeedDataProducts()];
  const unique = [];
  const seen = new Set();

  combined.forEach((p) => {
    const key = String(p._id || p.id);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(p);
    }
  });

  return unique;
};

const mergedProducts = mergeUniqueProducts();

// 🔹 Create empty cart with default quantities
const getDefaultCart = () => {
  let cart = {};
  mergedProducts.forEach((p) => {
    const key = String(p._id || p.id);
    cart[key] = 0;
  });
  return cart;
};

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartOrder, setCartOrder] = useState([]); // ✅ tracks order of products

  // Add item to cart
  const addToCart = (id) => {
    setCartItems((prev) => {
      const newQty = (prev[id] || 0) + 1;
      return { ...prev, [id]: newQty };
    });

    // ✅ Move product to front of cartOrder if already exists, else add it
    setCartOrder((prev) => {
      const filtered = prev.filter((pid) => pid !== id);
      return [id, ...filtered];
    });
  };

  // Remove item completely from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: 0 }));
    setCartOrder((prev) => prev.filter((pid) => pid !== id));
  };

  // Update cart count (increment/decrement)
  const updateCartItemCount = (newAmount, id) => {
    if (newAmount >= 0) {
      setCartItems((prev) => ({ ...prev, [id]: newAmount }));
      if (newAmount === 0) {
        setCartOrder((prev) => prev.filter((pid) => pid !== id));
      }
    }
  };

  // Calculate grand total
  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = mergedProducts.find(
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
        all_product: mergedProducts,
        cartItems,
        cartOrder, // ✅ expose order
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
