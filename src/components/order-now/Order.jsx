import React from "react";
import order from "../../assets/Cupaccino.png";
import Button2 from "../button/Button2";
import "./Order.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Order() {
  return (
    <>
      {/* <div className="order-container">
        <div className="order-block">
          <h1>Your Order</h1>
          <table>
            <th>Orders</th>
            <th>Details</th>

            <tr>
              <td>
                <div className="order-img">
                  <img src={order} alt="" />
                </div>
              </td>

              <td>
                <div className="order-details">
                  <p>Order ID: #123456789</p>
                  <p>Order Date: 2022-01-01</p>
                  <p>Order Status: Processing</p>
                  <Button2>Order Now</Button2>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div> */}

      <div className="order-container" id="order">
      
        <Popup trigger={<button> Click to open modal </button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">Welcome to GFG!!!</div>
              <div>
                <button onClick={() => close()}>Close modal</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  );
}

export default Order;
