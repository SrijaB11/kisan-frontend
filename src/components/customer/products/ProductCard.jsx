import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../redux/cartSlice";

function ProductCard({ item }) {
  const { image, name, price, unit, quantity, isOrganic, _id } = item;
  const dispatch = useDispatch();

  async function handleAddToCart() {
    if (quantity === 0) {
      return alert("Out of stock");
    }

    try {
      let res = await axios.post(
        `${process.env.REACT_APP_BE_API_URL}/cart/add`,
        { productId: _id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      alert("Added to cart");

      dispatch(
        add([
          {
            ...res.data,
            productId: item,
          },
        ]),
      );
    } catch (err) {
      alert("Error adding to cart");
    }
  }

  return (
    <div className={`product-card ${quantity === 0 ? "disabled" : ""}`}>
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p className="price">
        ₹ {price} / {unit}
      </p>

      {isOrganic && <span className="organic-badge">Organic</span>}

      <span className="quantity">Stock: {quantity}</span>

      {quantity === 0 ? (
        <button className="out-btn" disabled>
          Out of Stock
        </button>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default ProductCard;

