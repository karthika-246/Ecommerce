import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className='item'>
      <Link to={`/product/${id}`}>

        <img src={image} alt={name} className="item-image" />
      </Link>
      <p className="item-name">{name}</p>
      <div className="item-prices">
        <div className="item-price-new">₹ {new_price}</div>
        <div className="item-price-old"><s>₹ {old_price}</s></div>
      </div>
    </div>
  );
};

export default Item;