
// // // import React, { useContext, useState } from "react";
// // // import { ShopContext } from "../../Context/ShopContext";
// // // import { toast } from "react-toastify";
// // // import "./admindashboard.css";

// // // const AdminDashboard = () => {
// // //   const { all_product: allProducts, setStock } = useContext(ShopContext);
// // //   const [editing, setEditing] = useState(null);
// // //   const [newStock, setNewStock] = useState("");

// // //   const handleStockUpdate = (id) => {
// // //     const parsedStock = parseInt(newStock, 10);
// // //     if (isNaN(parsedStock) || parsedStock < 0) {
// // //       toast.error("Enter a valid stock number");
// // //       return;
// // //     }
// // //     setStock(id, parsedStock);
// // //     setEditing(null);
// // //     setNewStock("");
// // //     toast.success("✅ Stock updated!");
// // //   };

// // //   return (
// // //     <div className="admin-container">
// // //       <h2 className="admin-title">📦 Admin Dashboard</h2>

// // //       <table className="admin-table">
// // //         <thead>
// // //           <tr>
// // //             <th>Product</th>
// // //             <th>Stock</th>
// // //             <th>Update</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {allProducts.map((product) => (
// // //             <tr key={product._id || product.id}>
// // //               <td className="product-cell">
// // //                 <img
// // //                   src={product.image}
// // //                   alt={product.name}
// // //                   className="admin-img"
// // //                 />
// // //                 {product.name}
// // //               </td>
// // //               <td>
// // //                 {editing === product._id || editing === product.id ? (
// // //                   <input
// // //                     type="number"
// // //                     value={newStock}
// // //                     onChange={(e) => setNewStock(e.target.value)}
// // //                     className="stock-input"
// // //                   />
// // //                 ) : (
// // //                   <span
// // //                     className={`stock-badge ${
// // //                       product.stock > 0 ? "in-stock" : "out-stock"
// // //                     }`}
// // //                   >
// // //                     {product.stock > 0
// // //                       ? `${product.stock} left`
// // //                       : "Out of Stock"}
// // //                   </span>
// // //                 )}
// // //               </td>
// // //               <td>
// // //                 {editing === product._id || editing === product.id ? (
// // //                   <button
// // //                     className="save-btn"
// // //                     onClick={() => handleStockUpdate(product._id || product.id)}
// // //                   >
// // //                     Save
// // //                   </button>
// // //                 ) : (
// // //                   <button
// // //                     className="edit-btn"
// // //                     onClick={() => {
// // //                       setEditing(product._id || product.id);
// // //                       setNewStock(product.stock);
// // //                     }}
// // //                   >
// // //                     Edit
// // //                   </button>
// // //                 )}
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;
// // import React, { useContext, useState } from "react";
// // import { ShopContext } from "../../Context/ShopContext";
// // import "./admindashboard.css";

// // const AdminDashboard = () => {
// //   const { all_product, updateStock, resetStock } = useContext(ShopContext);
// //   const [editStock, setEditStock] = useState({});

// //   const handleEdit = (id, value) => {
// //     setEditStock({ ...editStock, [id]: value });
// //   };

// //   const handleSave = (id) => {
// //     const newStock = parseInt(editStock[id], 10);
// //     if (!isNaN(newStock) && newStock >= 0) {
// //       updateStock(id, newStock);
// //     }
// //   };

// //   return (
// //     <div className="admin-dashboard">
// //       <h2>📦 Admin Dashboard</h2>
// //       <button className="reset-btn" onClick={resetStock}>
// //         🔄 Reset Stock to Default
// //       </button>

// //       <table className="admin-table">
// //         <thead>
// //           <tr>
// //             <th>Product</th>
// //             <th>Price (₹)</th>
// //             <th>Current Stock</th>
// //             <th>Edit Stock</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {all_product.map((product) => (
// //             <tr key={product._id || product.id}>
// //               <td>{product.name}</td>
// //               <td>{product.price || product.new_price}</td>
// //               <td>{product.stock}</td>
// //               <td>
// //                 <input
// //                   type="number"
// //                   value={editStock[product._id || product.id] ?? product.stock}
// //                   onChange={(e) =>
// //                     handleEdit(product._id || product.id, e.target.value)
// //                   }
// //                   min="0"
// //                 />
// //               </td>
// //               <td>
// //                 <button
// //                   className="save-btn"
// //                   onClick={() => handleSave(product._id || product.id)}
// //                 >
// //                   Save
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;














// import React, { useContext, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import { toast } from "react-toastify";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const { all_product: allProducts, setStock } = useContext(ShopContext);
//   const [editing, setEditing] = useState(null);
//   const [newStock, setNewStock] = useState("");

//   const handleStockUpdate = (id) => {
//     const parsedStock = parseInt(newStock, 10);
//     if (isNaN(parsedStock) || parsedStock < 0) {
//       toast.error("Enter a valid stock number");
//       return;
//     }
//     setStock(id, parsedStock);
//     setEditing(null);
//     setNewStock("");
//     toast.success("✅ Stock updated!");
//   };

//   return (
//     <div className="admin-container">
//       <h2 className="admin-title">📦 Admin Dashboard</h2>

//       <table className="admin-table">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Stock</th>
//             <th>Update</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allProducts.map((product) => (
//             <tr key={product._id || product.id}>
//               <td className="product-cell">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="admin-img"
//                 />
//                 {product.name}
//               </td>
//               <td>
//                 {editing === product._id || editing === product.id ? (
//                   <input
//                     type="number"
//                     value={newStock}
//                     onChange={(e) => setNewStock(e.target.value)}
//                     className="stock-input"
//                   />
//                 ) : (
//                   <span
//                     className={`stock-badge ${
//                       product.stock > 0 ? "in-stock" : "out-stock"
//                     }`}
//                   >
//                     {product.stock > 0
//                       ? `${product.stock} left`
//                       : "Out of Stock"}
//                   </span>
//                 )}
//               </td>
//               <td>
//                 {editing === product._id || editing === product.id ? (
//                   <button
//                     className="save-btn"
//                     onClick={() => handleStockUpdate(product._id || product.id)}
//                   >
//                     Save
//                   </button>
//                 ) : (
//                   <button
//                     className="edit-btn"
//                     onClick={() => {
//                       setEditing(product._id || product.id);
//                       setNewStock(product.stock);
//                     }}
//                   >
//                     Edit
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;












import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { toast } from "react-toastify";
import "./admindashboard.css";

const AdminDashboard = () => {
  const { all_product: allProducts, setStock } = useContext(ShopContext);
  const [editing, setEditing] = useState(null);
  const [newStock, setNewStock] = useState("");

  const handleStockUpdate = (id) => {
    const parsedStock = parseInt(newStock, 10);
    if (isNaN(parsedStock) || parsedStock < 0) {
      toast.error("Enter a valid stock number");
      return;
    }
    setStock(id, parsedStock);
    setEditing(null);
    setNewStock("");
    toast.success("✅ Stock updated!");
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">📦 Admin Dashboard</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => (
            <tr key={product._id || product.id}>
              <td className="product-cell">
                <img
                  src={product.image}
                  alt={product.name}
                  className="admin-img"
                />
                {product.name}
              </td>
              <td>
                {editing === product._id || editing === product.id ? (
                  <input
                    type="number"
                    value={newStock}
                    onChange={(e) => setNewStock(e.target.value)}
                    className="stock-input"
                  />
                ) : (
                  <span
                    className={`stock-badge ${
                      product.stock > 0 ? "in-stock" : "out-stock"
                    }`}
                  >
                    {product.stock > 0
                      ? `${product.stock} left`
                      : "Out of Stock"}
                  </span>
                )}
              </td>
              <td>
                {editing === product._id || editing === product.id ? (
                  <button
                    className="save-btn"
                    onClick={() => handleStockUpdate(product._id || product.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditing(product._id || product.id);
                      setNewStock(product.stock);
                    }}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
