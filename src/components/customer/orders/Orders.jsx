import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import axios from "axios";
import "./orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    try {
      let res = await axios.get(`${process.env.REACT_APP_BE_API_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="orders-container">
      <h2>My Orders</h2>

      {orders.map((order) => {
        const dateObj = new Date(order.date);
        const orderDate = dateObj.toLocaleDateString("en-IN");
        const orderTime = dateObj.toLocaleTimeString("en-IN");

        return (
          <div className="order-card" key={order._id}>
            <div className="order-date">
              <span>{orderDate}</span>
              <span>{orderTime}</span>
            </div>

            <div className="order-products">
              {order.products.map((item) => {
                const product = item?.productId;
                if (!product) return null;

                return (
                  <OrderCard
                    key={item._id}
                    image={product.image}
                    category={product.category}
                    name={product.name}
                    price={product.price}
                    count={item.count}
                    units={product.unit}
                    totalPrice={product.price * item.count}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
