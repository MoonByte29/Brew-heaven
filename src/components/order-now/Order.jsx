import React from "react";
import "./Order.css";

const Order = ({ onClose }) => {
  return (
    <div className="order-modal">
      <div className="order-content">
        <h2>Order Now</h2>
        <p>Here you can place your order.</p>
        {/* Add order form fields or details here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Order;
