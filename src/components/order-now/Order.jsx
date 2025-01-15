import React from "react";
import "./Order.css";
import Button2 from "../button/Button2";

const Order = ({ onClose }) => {
  return (
    <div className="order-modal">
      <div className="order-content">
        <h2>Order Now</h2>
        <form className="order-form">
          <input type="text" placeholder="Item name" />
          <input type="number" placeholder="Item Quantity" />
          <input type="text" placeholder="Address" />
          <input type="number" placeholder="Phone No" />
          <Button2 onClick={onClose}>Close</Button2>
        </form>
      </div>
    </div>
  );
};

export default Order;
