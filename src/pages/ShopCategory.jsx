import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
// import './ShopCategory.css';
import { Link } from 'react-router-dom';

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="shop-category">
      <img className="category-banner" src={banner} alt={category} />
      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found in {category} category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>₹{product.price}</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
