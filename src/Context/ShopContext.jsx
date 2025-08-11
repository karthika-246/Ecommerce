<<<<<<< HEAD
import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[all_product[i].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Number(newAmount),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = all_product.find((p) => p.id === Number(itemId));
        if (product) {
          totalAmount += product.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const addToWishlist = (itemId) => {
    setWishlistItems((prev) => [...prev, itemId]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => prev.filter((id) => id !== itemId));
  };

  return (
    <ShopContext.Provider
      value={{
=======
import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
        cart[all_product[i].id] = 0; // use product id, not index
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId, quantity = 1) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + quantity,
        }));
    };

    const removeFromCart = (itemId, quantity = 1) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - quantity, 0),
        }));
    };

    const contextValue = {
>>>>>>> 5b91bf0 (updation1)
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
<<<<<<< HEAD
        updateCartItemCount, // ✅ Added this
        getTotalCartAmount,
        wishlistItems,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
=======
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
>>>>>>> 5b91bf0 (updation1)
};

export default ShopContextProvider;
