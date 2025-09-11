import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    all_product,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    cartOrder, // ✅ get order from context
  } = useContext(ShopContext);

  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [upiId, setUpiId] = useState("");

  // ✅ Redirect if not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.info("Please login to view your cart", { autoClose: 2000 });
      navigate("/login");
    }
  }, [navigate]);

  // ✅ Place Order -> Show Payment Modal
  const handlePlaceOrder = () => {
    if (getTotalCartAmount() === 0) {
      toast.warn("Your cart is empty!");
      return;
    }
    setShowPaymentModal(true);
  };

  // ✅ Confirm Payment Validation
  const handleConfirmPayment = () => {
    if (paymentMethod === "card" && cardNumber.length < 12) {
      toast.error("Please enter a valid card number");
      return;
    }
    if (paymentMethod === "upi" && !upiId.includes("@")) {
      toast.error("Please enter a valid UPI ID");
      return;
    }
    setShowPaymentModal(false);
    setShowInvoice(true);
    toast.success("Payment Successful! Order Placed!", { autoClose: 2000 });
  };

  // ✅ Get products in "recent-first" order
  const cartProducts = cartOrder
    .map((id) =>
      all_product.find((p) => String(p._id || p.id) === String(id))
    )
    .filter((p) => p && cartItems[String(p._id || p.id)] > 0);

  return (
    <div className="cart-container">
      {/* 🛒 CART SECTION */}
      {!showInvoice && (
        <>
          <h2 className="cart-title">🛒 Your Shopping Cart</h2>

          <div className="cart-items">
            {cartProducts.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              cartProducts.map((product) => {
                const productId = String(product._id || product.id);
                const qty = cartItems[productId];
                const price = product.price || product.new_price || 0;

                return (
                  <div className="cart-card" key={productId}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="cart-img"
                    />
                    <div className="cart-info">
                      <h3>{product.name}</h3>
                      <p className="price">
                        ₹{price} × {qty}
                      </p>
                      <p className="total">Total: ₹{price * qty}</p>

                      <div className="cart-controls">
                        <label>Qty:</label>
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateCartItemCount(qty - 1, productId)
                          }
                          disabled={qty <= 1}
                        >
                          -
                        </button>
                        <span className="qty-value">{qty}</span>
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateCartItemCount(qty + 1, productId)
                          }
                        >
                          +
                        </button>
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(productId)}
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

          {/* ✅ Order Summary */}
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
          <div className="invoice-section">
            <p>
              <strong>Customer:</strong> Karthika
            </p>
            <p>
              <strong>Address:</strong> 47, Green Street, Chennai
            </p>
            <p>
              <strong>Payment Method:</strong> {paymentMethod}
            </p>
          </div>
          <div className="invoice-products">
            {cartProducts.map((product) => {
              const productId = String(product._id || product.id);
              const qty = cartItems[productId];
              const price = product.price || product.new_price || 0;
              return (
                <div className="invoice-item" key={productId}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="invoice-img"
                  />
                  <div>
                    <h4>{product.name}</h4>
                    <p>
                      {qty} × ₹{price}
                    </p>
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
            <p>
              <strong>Delivery Date:</strong> 20 Aug 2025
            </p>
            <p>
              <strong>Return Policy:</strong> 7 Days
            </p>
            <p>
              <strong>Replace Policy:</strong> 15 Days
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
