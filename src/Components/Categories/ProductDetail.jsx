import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import { ShopContext } from "../../Context/ShopContext";
import { toast } from "react-toastify";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./productdisplay.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ navigation hook
  const {
    all_product,
    addToCart,
    addToWishlist,
    removeFromWishlist,
    wishlistItems,
  } = useContext(ShopContext);

  // find by id or _id
  const product = all_product.find(
    (p) => String(p.id) === String(id) || String(p._id) === String(id)
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    if (product) {
      setMainImage(product.image || "");
      setSelectedSize(""); // reset when product changes
    }
  }, [product]);

  useEffect(() => {
    if (product && Array.isArray(wishlistItems)) {
      setIsInWishlist(
        wishlistItems.some((it) => String(it.id) === String(product.id))
      );
    } else {
      setIsInWishlist(false);
    }
  }, [wishlistItems, product]);

  if (!product) {
    return <div className="product-not-found">❌ Product not found</div>;
  }

  // average rating
  const avgRating =
    product.reviews && product.reviews.length > 0
      ? product.reviews.reduce((s, r) => s + Number(r.rating || 0), 0) /
        product.reviews.length
      : 0;

  const renderStars = (rating) => {
    const r = Number(rating) || 0;
    const full = Math.floor(r);
    const half = r - full >= 0.5;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < full) stars.push(<FaStar key={i} color="#FFD700" />);
      else if (i === full && half)
        stars.push(<FaStarHalfAlt key={i} color="#FFD700" />);
      else stars.push(<FaRegStar key={i} color="#FFD700" />);
    }
    return stars;
  };

  // ensure 3 thumbnails
  const thumbnails = [product.image, ...(product.images || [])];
  while (thumbnails.length < 3) thumbnails.push(product.image);

  const handleAddToCart = () => {
    if (product.category === "dresses" && !selectedSize) {
      toast.error("Please select a size before adding to cart");
      return;
    }
    addToCart(product.id ?? product._id, selectedSize || null);
    toast.success("Added to cart");
    navigate("/cart"); // ✅ redirect to Cart page
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id ?? product._id);
      toast.info("Removed from wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to wishlist");
      navigate("/wishlist"); // ✅ redirect to Wishlist page
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {thumbnails.slice(0, 3).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${product.name}-thumb-${i}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        <img
          src={mainImage || product.image}
          alt={product.name}
          className="productdisplay-main-img"
        />
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-star">
          {renderStars(avgRating)}
          <span className="avg-rating">
            {" "}
            {avgRating ? avgRating.toFixed(1) : "0.0"} / 5
          </span>
        </div>

        <div className="productdisplay-right-prices">
          {product.old_price && <div className="old">₹{product.old_price}</div>}
          <div className="new">₹{product.price ?? product.new_price}</div>
        </div>

        <p className="productdisplay-right-description">
          {product.description}
        </p>

        {product.category === "dresses" && (
          <div className="productdisplay-right-size">
            <h2>Select Size</h2>
            <div className="productdisplay-size-options">
              {["S", "M", "L", "XL"].map((s) => (
                <div
                  key={s}
                  className={`size-option ${
                    selectedSize === s ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </div>
              ))}
            </div>
            {!selectedSize && (
              <p className="size-error">Select size before add to cart</p>
            )}
          </div>
        )}

        <div className="productdisplay-right-buttons">
          <button onClick={handleAddToCart}>🛒 Add to Cart</button>
          <button onClick={handleWishlistToggle}>
            {isInWishlist ? "❌ Remove Wishlist" : "❤️ Add to Wishlist"}
          </button>
        </div>

        <div className="reviews-section">
          <h3>Customer Reviews</h3>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((rev, i) => (
              <div className="review" key={i}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <strong>{rev.user}</strong>
                  {renderStars(rev.rating)}
                </div>
                <p>{rev.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;