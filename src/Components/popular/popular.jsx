import React, { useState } from 'react';
import './popular.css';
import data_product from '../Assets/all_product';
import Item from '../items/item';

const Popular = ({ defaultCategory = '' }) => {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const handleSearch = () => {
    setSearchTerm(input.trim());
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
