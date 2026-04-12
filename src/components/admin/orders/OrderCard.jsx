import React from "react";
import "./orderCard.css";

function OrderCard({ image, name, category, price, count, units, totalPrice }) {
  return (
    <div className="product-row">
      <img src={image} alt={name} />

      <div className="product-info">
        <p className="category">{category}</p>
        <h4>{name}</h4>
        <p className="price">₹ {price}</p>
        <p className="qty">
          Qty: {count} {units}
        </p>
      </div>

      <div className="product-total">₹ {totalPrice}</div>
    </div>
  );
}

export default OrderCard;
