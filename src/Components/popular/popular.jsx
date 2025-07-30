import React, { useState } from 'react';
import './popular.css';
import data_product from '../Assets/all_product';
import Item from '../items/item';

const Popular = ({ defaultCategory = '' }) => {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [cart, setCart] = useState([]);
  const [detailVisibleId, setDetailVisibleId] = useState(null);

  const handleSearch = () => {
    setSearchTerm(input.trim());
  };
  const toggleCartItem = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const isInCart = (id) => cart.some(item => item.id === id);

  const toggleDetail = (id) => {
    setDetailVisibleId(prev => (prev === id ? null : id));
  };
  const filteredProducts = data_product.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes((input || searchTerm).toLowerCase());
    const categoryMatch = selectedCategory
      ? item.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    return nameMatch && categoryMatch;
  });

  return (
    <div className='popular'>
      <h1>POPULAR OFFERS</h1>
      <hr />

      {/* Search & Filter */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setSearchTerm(e.target.value);
          }}
        />
        <button type="button" onClick={handleSearch} className="search-btn">
          Search
        </button>

        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kids</option>
        </select>
      </div>

      {/* Product List */}
      <div className="popular-item">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <div key={i} className="item-wrapper">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
              <div className="button-group">
                <button
                  onClick={() => toggleCartItem(item)}
                  className={`cart-btn ${isInCart(item.id) ? 'in-cart' : ''}`}
                >
                  {isInCart(item.id) ? 'Remove from Cart' : 'Add to Cart'}
                </button>
                <button onClick={() => toggleDetail(item.id)} className="detail-btn">
                  {detailVisibleId === item.id ? 'Hide Detail' : 'Detail'}
                </button>
              </div>

              {detailVisibleId === item.id && (
                <div className="product-detail-inline">
                  <p><strong>Name:</strong> {item.name}</p>
                  <p><strong>Price:</strong> ₹{item.new_price}</p>
                  <p><strong>Category:</strong> {item.category}</p>
                  <p><strong>Description:</strong> High-quality and stylish {item.category} product perfect for everyday or special occasions.</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

    </div>
  );
};

export default Popular;