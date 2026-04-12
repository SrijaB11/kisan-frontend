import React, { useState } from "react";
import axios from "axios";
import "./orderDetails.css";

function OrderDetails({ order, arr }) {
  const [isAccepted, setisAccepted] = useState(order.isAccepted);
  const [isShipped, setisShipped] = useState(order.isShipped);
  const [isDelivered, setisDelivered] = useState(order.isDelivered);
  const [isCanceled, setisCanceled] = useState(order.isCanceled);

  return (
    <div className="order-card">
      <div className="order-top">
        <div className="order-status">
          {isCanceled ? (
            <span className="status canceled">Canceled X</span>
          ) : (
            <>
              <div className="switch-row">
                <label>
                  <input
                    type="checkbox"
                    checked={isAccepted}
                    onChange={async () => {
                      try {
                        await axios.put(
                          `${process.env.REACT_APP_BE_API_URL}/orders/update/${order._id}`,
                          { isAccepted: true },
                          {
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem("token")}`,
                            },
                          },
                        );

                        setisAccepted(true);
                      } catch (error) {
                        console.error("Error updating order:", error);
                        alert("Failed to accept order");
                      }
                    }}
                  />
                  Accept
                </label>

                {!isAccepted && (
                  <label>
                    <input
                      type="checkbox"
                      checked={isCanceled}
                      onChange={async () => {
                        try {
                          await axios.put(
                            `${process.env.REACT_APP_BE_API_URL}/orders/update/${order._id}`,
                            { isCanceled: true },
                            {
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                              },
                            },
                          );
                          setisCanceled(true);
                        } catch (error) {
                          console.error(error);
                        }
                      }}
                    />
                    Cancel
                  </label>
                )}
              </div>

              <div className="switch-row">
                <label>
                  <input
                    type="checkbox"
                    checked={isShipped}
                    onChange={async () => {
                      try {
                        await axios.put(
                          `${process.env.REACT_APP_BE_API_URL}/orders/update/${order._id}`,
                          { isShipped: true },
                          {
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem("token")}`,
                            },
                          },
                        );
                        setisShipped(true);
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  />
                  Shipped
                </label>
              </div>

              <div className="switch-row">
                <label>
                  <input
                    type="checkbox"
                    checked={isDelivered}
                    onChange={async () => {
                      try {
                        await axios.put(
                          `${process.env.REACT_APP_BE_API_URL}/orders/update/${order._id}`,
                          { isDelivered: true },
                          {
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem("token")}`,
                            },
                          },
                        );
                        setisDelivered(true);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  />
                  Delivered
                </label>
              </div>
            </>
          )}
        </div>

        <div className="order-address">
          <h4>Total: ₹{order.price}</h4>
          <p>{order.name}</p>
          <p>{order.phoneNo}</p>
          <p>{order.pincode}</p>
          <p>{order.address}</p>
        </div>

        <div className="order-date">
          <p>{order.orderDate}</p>
          <p>{order.orderTime}</p>
        </div>
      </div>

      <div className="order-products">{arr}</div>
    </div>
  );
}

export default OrderDetails;
