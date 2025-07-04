// import React, { useContext } from 'react';
// import { ShopContext } from '../Context/ShopContext';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify'; 
// import './Cart.css';

// const Cart = () => {
//   const {
//     cartItems,
//     all_product,
//     removeFromCart,
//     updateCartItemCount,
//     getTotalCartAmount,
//   } = useContext(ShopContext);

//   const navigate = useNavigate();

//   const handlePlaceOrder = () => {
//     toast.success('🎉 Order Placed Successfully!', {
//       position: 'top-right',
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: true,
//       progress: undefined,
//       theme: 'colored',
//     });
//   };

//   return (
//     <div className="cart-page">
//       <h2>Shopping Cart</h2>
//       {all_product.map((product) => {
//         if (cartItems[product.id] > 0) {
//           return (
//             <div className="cart-item" key={product.id}>
//               <img src={product.image} alt={product.name} />
//               <div className="cart-item-details">
//                 <h4>{product.name}</h4>
//                 <p>₹{product.new_price} x {cartItems[product.id]}</p>
//                 <p>Total: ₹{product.new_price * cartItems[product.id]}</p>
//                 <div className="quantity-selector">
//                   <label>Qty: </label>
//                   <select
//                     value={cartItems[product.id]}
//                     onChange={(e) =>
//                       updateCartItemCount(Number(e.target.value), product.id)
//                     }
//                   >
//                     {[...Array(10)].map((_, i) => (
//                       <option key={i + 1} value={i + 1}>
//                         {i + 1}
//                       </option>
//                     ))}
//                   </select>
//                   <button
//                     style={{
//                       marginLeft: '1rem',
//                       background: '#ff4d4f',
//                       color: '#fff',
//                       border: 'none',
//                       padding: '0.3rem 0.7rem',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                     }}
//                     onClick={() => removeFromCart(product.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         }
//         return null;
//       })}

//       <div className="cart-summary">
//         Grand Total: ₹{getTotalCartAmount()}
//       </div>

//       <div className="cart-actions">
//         <button className="place-order-btn" onClick={handlePlaceOrder}>
//           Place Order
//         </button>

//         <button className="continue-shopping" onClick={() => navigate('/')}>
//           ← Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    all_product,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  // 🔹 Redirect to login if not logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.info('Please login to view your cart', {
        position: 'top-center',
        autoClose: 2000,
      });
      navigate('/login');
    }
  }, [navigate]);

  const handlePlaceOrder = () => {
    toast.success('🎉 Order Placed Successfully!', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    });
    // You can also clear cart or send order API request here
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="cart-item-details">
                <h4>{product.name}</h4>
                <p>₹{product.new_price} x {cartItems[product.id]}</p>
                <p>Total: ₹{product.new_price * cartItems[product.id]}</p>
                <div className="quantity-selector">
                  <label>Qty: </label>
                  <select
                    value={cartItems[product.id]}
                    onChange={(e) =>
                      updateCartItemCount(Number(e.target.value), product.id)
                    }
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    style={{
                      marginLeft: '1rem',
                      background: '#ff4d4f',
                      color: '#fff',
                      border: 'none',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="cart-summary">
        Grand Total: ₹{getTotalCartAmount()}
      </div>

      <div className="cart-actions">
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>

        <button className="continue-shopping" onClick={() => navigate('/')}>
          ← Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
