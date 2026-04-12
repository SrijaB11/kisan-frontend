import React from "react";

function OrderCard({ image, category, name, price, count, totalPrice, units }) {
  return (
    <div className="product-row">
      <img src={image} alt={name} />

      <div className="product-info">
        <p className="category">{category}</p>
        <h4>{name}</h4>
        <p>₹ {price}</p>
        <p>
          Qty: {count} {units}
        </p>
      </div>

      <div className="product-total">₹ {totalPrice}</div>
    </div>
  );
}

export default OrderCard;
