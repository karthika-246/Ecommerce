// // // src/Pages/Cart.jsx
// // import React, { useContext, useState, useEffect } from "react";
// // import { ShopContext } from "../Context/ShopContext";
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import "./Cart.css";

// // const Cart = () => {
// //   const {
// //     cartItems = {},
// //     all_product: allProducts = [],
// //     updateCartItemCount,
// //     removeFromCart,
// //     getTotalCartAmount,
// //   } = useContext(ShopContext) || {};

// //   const navigate = useNavigate();
// //   const [showPaymentModal, setShowPaymentModal] = useState(false);
// //   const [showInvoice, setShowInvoice] = useState(false);
// //   const [paymentMethod, setPaymentMethod] = useState("card");
// //   const [cardNumber, setCardNumber] = useState("");
// //   const [upiId, setUpiId] = useState("");

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (!token) {
// //       toast.info("Please login to view your cart", { autoClose: 2000 });
// //       navigate("/login");
// //     }
// //   }, [navigate]);

// //   // ✅ Build cart products
// //   const cartProducts = Object.entries(cartItems)
// //     .map(([id, qty]) => {
// //       if (qty > 0) {
// //         const product = allProducts.find(
// //           (p) => String(p._id || p.id) === String(id)
// //         );
// //         return product ? { ...product, quantityInCart: qty } : null;
// //       }
// //       return null;
// //     })
// //     .filter(Boolean);

// //   // ✅ Handle quantity change
// //   const handleQuantityChange = (product, newQty) => {
// //     const productId = product.id || product._id;

// //     if (newQty <= 0) {
// //       removeFromCart(productId); // 🔹 restores stock
// //     } else {
// //       updateCartItemCount(newQty, productId); // 🔹 decreases or restores stock
// //     }
// //   };

// //   // ✅ Remove product completely
// //   const handleRemoveProduct = (product) => {
// //     removeFromCart(product.id || product._id); // 🔹 restores stock
// //   };

// //   // ✅ Place order
// //   const handlePlaceOrder = () => {
// //     if (getTotalCartAmount() === 0) {
// //       toast.warn("Your cart is empty!");
// //       return;
// //     }
// //     setShowPaymentModal(true);
// //   };

// //   // ✅ Confirm payment
// //   const handleConfirmPayment = async () => {
// //     if (paymentMethod === "card" && cardNumber.length < 12) {
// //       toast.error("Please enter a valid card number");
// //       return;
// //     }
// //     if (paymentMethod === "upi" && !upiId.includes("@")) {
// //       toast.error("Please enter a valid UPI ID");
// //       return;
// //     }

// //     try {
// //       // Empty the cart (stock already updated in real-time)
// //       Object.keys(cartItems).forEach((id) => updateCartItemCount(0, id));

// //       setShowPaymentModal(false);
// //       setShowInvoice(true);
// //       toast.success("✅ Payment Successful! Order Placed!", { autoClose: 2000 });
// //     } catch (error) {
// //       console.error("Error during payment:", error);
// //       toast.error("Payment failed. Try again.");
// //     }
// //   };

// //   return (
// //     <div className="cart-container">
// //       {/* 🛒 CART */}
// //       {!showInvoice && (
// //         <>
// //           <h2 className="cart-title">🛒 Your Shopping Cart</h2>

// //           <div className="cart-items">
// //             {cartProducts.length === 0 ? (
// //               <p className="empty-cart">Your cart is empty.</p>
// //             ) : (
// //               cartProducts.map((product) => {
// //                 const productId = String(product.id || product._id);
// //                 const qty = product.quantityInCart;
// //                 const price = product.new_price || product.price || 0;

// //                 return (
// //                   <div className="cart-card" key={productId}>
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="cart-img"
// //                     />
// //                     <div className="cart-info">
// //                       <h3>{product.name}</h3>
// //                       <p className="price">
// //                         ₹{price} × {qty}
// //                       </p>
// //                       <p className="total">Total: ₹{price * qty}</p>

// //                       {/* Stock status */}
// //                       <p
// //                         className={`stock-status ${
// //                           product.stock <= 0 ? "out-of-stock" : "in-stock"
// //                         }`}
// //                       >
// //                         {product.stock > 0
// //                           ? `Stock Left: ${product.stock}`
// //                           : "Out of Stock"}
// //                       </p>

// //                       {/* Cart controls */}
// //                       <div className="cart-controls">
// //                         {/* Decrease */}
// //                         <button
// //                           className="qty-btn"
// //                           onClick={() => handleQuantityChange(product, qty - 1)}
// //                           disabled={qty <= 1}
// //                         >
// //                           -
// //                         </button>

// //                         <span className="qty-value">{qty}</span>

// //                         {/* Increase */}
// //                         <button
// //                           className="qty-btn"
// //                           onClick={() => handleQuantityChange(product, qty + 1)}
// //                           disabled={product.stock <= 0}
// //                         >
// //                           +
// //                         </button>

// //                         {/* Remove */}
// //                         <button
// //                           className="remove-btn"
// //                           onClick={() => handleRemoveProduct(product)}
// //                         >
// //                           Remove
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 );
// //               })
// //             )}
// //           </div>

// //           {/* Cart summary */}
// //           {cartProducts.length > 0 && (
// //             <div className="cart-summary-box">
// //               <h3>Order Summary</h3>
// //               <p>
// //                 Grand Total:{" "}
// //                 <span className="summary-total">₹{getTotalCartAmount()}</span>
// //               </p>
// //               <button className="checkout-btn" onClick={handlePlaceOrder}>
// //                 Proceed to Payment
// //               </button>
// //               <button className="continue-btn" onClick={() => navigate("/")}>
// //                 ← Continue Shopping
// //               </button>
// //             </div>
// //           )}
// //         </>
// //       )}

// //       {/* 💳 PAYMENT MODAL */}
// //       {showPaymentModal && (
// //         <div className="payment-modal">
// //           <div className="modal-content">
// //             <h3>Payment Details</h3>
// //             <label>
// //               Payment Method:
// //               <select
// //                 value={paymentMethod}
// //                 onChange={(e) => setPaymentMethod(e.target.value)}
// //               >
// //                 <option value="cod">Cash on Delivery</option>
// //                 <option value="card">Credit/Debit Card</option>
// //                 <option value="upi">UPI</option>
// //               </select>
// //             </label>
// //             {paymentMethod === "card" && (
// //               <input
// //                 type="text"
// //                 placeholder="Card Number"
// //                 value={cardNumber}
// //                 onChange={(e) => setCardNumber(e.target.value)}
// //               />
// //             )}
// //             {paymentMethod === "upi" && (
// //               <input
// //                 type="text"
// //                 placeholder="UPI ID"
// //                 value={upiId}
// //                 onChange={(e) => setUpiId(e.target.value)}
// //               />
// //             )}
// //             <div className="modal-buttons">
// //               <button onClick={handleConfirmPayment} className="confirm-btn">
// //                 Confirm Payment
// //               </button>
// //               <button
// //                 onClick={() => setShowPaymentModal(false)}
// //                 className="cancel-btn"
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* 🧾 INVOICE */}
// //       {showInvoice && (
// //         <div className="invoice-card">
// //           <h2 className="invoice-title">Payment Receipt</h2>
// //           <div className="invoice-products">
// //             {cartProducts.map((product) => {
// //               const qty = product.quantityInCart;
// //               const price = product.new_price || product.price || 0;
// //               return (
// //                 <div className="invoice-item" key={product.id || product._id}>
// //                   <img
// //                     src={product.image}
// //                     alt={product.name}
// //                     className="invoice-img"
// //                   />
// //                   <div>
// //                     <h4>{product.name}</h4>
// //                     <p>
// //                       {qty} × ₹{price}
// //                     </p>
// //                     <p className="invoice-total">₹{price * qty}</p>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //           <div className="invoice-summary">
// //             <p>
// //               <strong>Grand Total:</strong> ₹{getTotalCartAmount()}
// //             </p>
// //           </div>
// //           <div className="invoice-actions">
// //             <button className="btn-home" onClick={() => navigate("/")}>
// //               Back to Home
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;
// // src/Pages/Cart.jsx
// import React, { useContext, useState, useEffect } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./Cart.css";

// const Cart = () => {
//   const {
//     cartItems = {},
//     all_product: allProducts = [],
//     updateCartItemCount,
//     removeFromCart,
//     getTotalCartAmount,
//   } = useContext(ShopContext) || {};

//   const navigate = useNavigate();
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showInvoice, setShowInvoice] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [cardNumber, setCardNumber] = useState("");
//   const [upiId, setUpiId] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.info("Please login to view your cart", { autoClose: 2000 });
//       navigate("/login");
//     }
//   }, [navigate]);

//   // ✅ Build cart products
//   const cartProducts = Object.entries(cartItems)
//     .map(([id, qty]) => {
//       if (qty > 0) {
//         const product = allProducts.find(
//           (p) => String(p._id || p.id) === String(id)
//         );
//         return product ? { ...product, quantityInCart: qty } : null;
//       }
//       return null;
//     })
//     .filter(Boolean);

//   // ✅ Handle quantity change
//   const handleQuantityChange = (product, newQty) => {
//     const productId = product._id || product.id;

//     if (newQty <= 0) {
//       removeFromCart(productId);
//     } else {
//       if (newQty > product.quantityInCart && product.stock <= 0) {
//         toast.warn("⚠️ Product is out of stock");
//         return;
//       }
//       updateCartItemCount(newQty, productId);
//     }
//   };

//   // ✅ Remove product completely
//   const handleRemoveProduct = (product) => {
//     removeFromCart(product._id || product.id);
//   };

//   // ✅ Place order
//   const handlePlaceOrder = () => {
//     if (getTotalCartAmount() === 0) {
//       toast.warn("Your cart is empty!");
//       return;
//     }
//     setShowPaymentModal(true);
//   };

//   // ✅ Confirm payment
//   const handleConfirmPayment = async () => {
//     if (paymentMethod === "card" && cardNumber.length < 12) {
//       toast.error("Please enter a valid card number");
//       return;
//     }
//     if (paymentMethod === "upi" && !upiId.includes("@")) {
//       toast.error("Please enter a valid UPI ID");
//       return;
//     }

//     try {
//       // Empty cart (stock already updated live)
//       Object.keys(cartItems).forEach((id) => updateCartItemCount(0, id));

//       setShowPaymentModal(false);
//       setShowInvoice(true);
//       toast.success("✅ Payment Successful! Order Placed!", { autoClose: 2000 });
//     } catch (error) {
//       console.error("Error during payment:", error);
//       toast.error("Payment failed. Try again.");
//     }
//   };

//   return (
//     <div className="cart-container">
//       {/* 🛒 CART */}
//       {!showInvoice && (
//         <>
//           <h2 className="cart-title">🛒 Your Shopping Cart</h2>

//           <div className="cart-items">
//             {cartProducts.length === 0 ? (
//               <p className="empty-cart">Your cart is empty.</p>
//             ) : (
//               cartProducts.map((product) => {
//                 const productId = String(product._id || product.id);
//                 const qty = product.quantityInCart;
//                 const price = product.new_price || product.price || 0;

//                 return (
//                   <div className="cart-card" key={productId}>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="cart-img"
//                     />
//                     <div className="cart-info">
//                       <h3>{product.name}</h3>
//                       <p className="price">₹{price} × {qty}</p>
//                       <p className="total">Total: ₹{price * qty}</p>

//                       {/* Stock status */}
//                       <p
//                         className={`stock-status ${
//                           product.stock <= 0 ? "out-of-stock" : "in-stock"
//                         }`}
//                       >
//                         {product.stock > 0
//                           ? `Stock Left: ${product.stock}`
//                           : "Out of Stock"}
//                       </p>

//                       {/* Cart controls */}
//                       <div className="cart-controls">
//                         {/* Decrease */}
//                         <button
//                           className="qty-btn"
//                           onClick={() => handleQuantityChange(product, qty - 1)}
//                           disabled={qty <= 1}
//                         >
//                           -
//                         </button>

//                         <span className="qty-value">{qty}</span>

//                         {/* Increase */}
//                         <button
//                           className="qty-btn"
//                           onClick={() => handleQuantityChange(product, qty + 1)}
//                           disabled={product.stock <= 0}
//                         >
//                           +
//                         </button>

//                         {/* Remove */}
//                         <button
//                           className="remove-btn"
//                           onClick={() => handleRemoveProduct(product)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })
//             )}
//           </div>

//           {/* Cart summary */}
//           {cartProducts.length > 0 && (
//             <div className="cart-summary-box">
//               <h3>Order Summary</h3>
//               <p>
//                 Grand Total:{" "}
//                 <span className="summary-total">₹{getTotalCartAmount()}</span>
//               </p>
//               <button className="checkout-btn" onClick={handlePlaceOrder}>
//                 Proceed to Payment
//               </button>
//               <button className="continue-btn" onClick={() => navigate("/")}>
//                 ← Continue Shopping
//               </button>
//             </div>
//           )}
//         </>
//       )}

//       {/* 💳 PAYMENT MODAL */}
//       {showPaymentModal && (
//         <div className="payment-modal">
//           <div className="modal-content">
//             <h3>Payment Details</h3>
//             <label>
//               Payment Method:
//               <select
//                 value={paymentMethod}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               >
//                 <option value="cod">Cash on Delivery</option>
//                 <option value="card">Credit/Debit Card</option>
//                 <option value="upi">UPI</option>
//               </select>
//             </label>
//             {paymentMethod === "card" && (
//               <input
//                 type="text"
//                 placeholder="Card Number"
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(e.target.value)}
//               />
//             )}
//             {paymentMethod === "upi" && (
//               <input
//                 type="text"
//                 placeholder="UPI ID"
//                 value={upiId}
//                 onChange={(e) => setUpiId(e.target.value)}
//               />
//             )}
//             <div className="modal-buttons">
//               <button onClick={handleConfirmPayment} className="confirm-btn">
//                 Confirm Payment
//               </button>
//               <button
//                 onClick={() => setShowPaymentModal(false)}
//                 className="cancel-btn"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🧾 INVOICE */}
//       {showInvoice && (
//         <div className="invoice-card">
//           <h2 className="invoice-title">Payment Receipt</h2>
//           <div className="invoice-products">
//             {cartProducts.map((product) => {
//               const qty = product.quantityInCart;
//               const price = product.new_price || product.price || 0;
//               return (
//                 <div className="invoice-item" key={product._id || product.id}>
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="invoice-img"
//                   />
//                   <div>
//                     <h4>{product.name}</h4>
//                     <p>{qty} × ₹{price}</p>
//                     <p className="invoice-total">₹{price * qty}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="invoice-summary">
//             <p>
//               <strong>Grand Total:</strong> ₹{getTotalCartAmount()}
//             </p>
//           </div>
//           <div className="invoice-actions">
//             <button className="btn-home" onClick={() => navigate("/")}>
//               Back to Home
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;





import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems = {},
    all_product: allProducts = [],
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext) || {};

  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [upiId, setUpiId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.info("Please login to view your cart", { autoClose: 2000 });
      navigate("/login");
    }
  }, [navigate]);

  // ✅ Build cart products
  const cartProducts = Object.entries(cartItems)
    .map(([id, qty]) => {
      if (qty > 0) {
        const product = allProducts.find(
          (p) => String(p._id || p.id) === String(id)
        );
        return product ? { ...product, quantityInCart: qty } : null;
      }
      return null;
    })
    .filter(Boolean);

  // ✅ Handle quantity change
  const handleQuantityChange = (product, newQty) => {
    const productId = product._id || product.id;

    if (newQty <= 0) {
      removeFromCart(productId);
    } else {
      if (newQty > product.quantityInCart && product.stock <= 0) {
        toast.warn("⚠️ Product is out of stock");
        return;
      }
      updateCartItemCount(newQty, productId);
    }
  };

  // ✅ Remove product completely
  const handleRemoveProduct = (product) => {
    removeFromCart(product._id || product.id);
  };

  // ✅ Place order
  const handlePlaceOrder = () => {
    if (getTotalCartAmount() === 0) {
      toast.warn("Your cart is empty!");
      return;
    }
    setShowPaymentModal(true);
  };

  // ✅ Confirm payment
  const handleConfirmPayment = async () => {
    if (paymentMethod === "card" && cardNumber.length < 12) {
      toast.error("Please enter a valid card number");
      return;
    }
    if (paymentMethod === "upi" && !upiId.includes("@")) {
      toast.error("Please enter a valid UPI ID");
      return;
    }

    try {
      // Empty cart (stock already updated live)
      Object.keys(cartItems).forEach((id) => updateCartItemCount(0, id));

      setShowPaymentModal(false);
      setShowInvoice(true);
      toast.success("✅ Payment Successful! Order Placed!", { autoClose: 2000 });
    } catch (error) {
      console.error("Error during payment:", error);
      toast.error("Payment failed. Try again.");
    }
  };

  return (
    <div className="cart-container">
      {/* 🛒 CART */}
      {!showInvoice && (
        <>
          <h2 className="cart-title">🛒 Your Shopping Cart</h2>

          <div className="cart-items">
            {cartProducts.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              cartProducts.map((product) => {
                const productId = String(product._id || product.id);
                const qty = product.quantityInCart;
                const price = product.new_price || product.price || 0;

                return (
                  <div className="cart-card" key={productId}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="cart-img"
                    />
                    <div className="cart-info">
                      <h3>{product.name}</h3>
                      <p className="price">₹{price} × {qty}</p>
                      <p className="total">Total: ₹{price * qty}</p>

                      {/* Stock status */}
                      <p
                        className={`stock-status ${
                          product.stock <= 0 ? "out-of-stock" : "in-stock"
                        }`}
                      >
                        {product.stock > 0
                          ? `Stock Left: ${product.stock}`
                          : "Out of Stock"}
                      </p>

                      {/* Cart controls */}
                      <div className="cart-controls">
                        {/* Decrease */}
                        <button
                          className="qty-btn"
                          onClick={() => handleQuantityChange(product, qty - 1)}
                          disabled={qty <= 1}
                        >
                          -
                        </button>

                        <span className="qty-value">{qty}</span>

                        {/* Increase */}
                        <button
                          className="qty-btn"
                          onClick={() => handleQuantityChange(product, qty + 1)}
                          disabled={product.stock <= 0}
                        >
                          +
                        </button>

                        {/* Remove */}
                        <button
                          className="remove-btn"
                          onClick={() => handleRemoveProduct(product)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart summary */}
          {cartProducts.length > 0 && (
            <div className="cart-summary-box">
              <h3>Order Summary</h3>
              <p>
                Grand Total:{" "}
                <span className="summary-total">₹{getTotalCartAmount()}</span>
              </p>
              <button className="checkout-btn" onClick={handlePlaceOrder}>
                Proceed to Payment
              </button>
              <button className="continue-btn" onClick={() => navigate("/")}>
                ← Continue Shopping
              </button>
            </div>
          )}
        </>
      )}

      {/* 💳 PAYMENT MODAL */}
      {showPaymentModal && (
        <div className="payment-modal">
          <div className="modal-content">
            <h3>Payment Details</h3>
            <label>
              Payment Method:
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
              </select>
            </label>
            {paymentMethod === "card" && (
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            )}
            {paymentMethod === "upi" && (
              <input
                type="text"
                placeholder="UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            )}
            <div className="modal-buttons">
              <button onClick={handleConfirmPayment} className="confirm-btn">
                Confirm Payment
              </button>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🧾 INVOICE */}
      {showInvoice && (
        <div className="invoice-card">
          <h2 className="invoice-title">Payment Receipt</h2>
          <div className="invoice-products">
            {cartProducts.map((product) => {
              const qty = product.quantityInCart;
              const price = product.new_price || product.price || 0;
              return (
                <div className="invoice-item" key={product._id || product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="invoice-img"
                  />
                  <div>
                    <h4>{product.name}</h4>
                    <p>{qty} × ₹{price}</p>
                    <p className="invoice-total">₹{price * qty}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="invoice-summary">
            <p>
              <strong>Grand Total:</strong> ₹{getTotalCartAmount()}
            </p>
          </div>
          <div className="invoice-actions">
            <button className="btn-home" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
