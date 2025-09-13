import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="product-list">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
