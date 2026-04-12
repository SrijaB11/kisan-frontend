import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderDetails from "./OrderDetails";
import OrderCard from "./OrderCard";
import "./AdminOrders.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BE_API_URL}/orders/getAll`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      setOrders(res.data.reverse());
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="admin-orders">
      <h2 className="admin-title">All Orders</h2>

      {orders.map((order, ind) => {
        const arr = order.products.map((item) => {
          let totalPrice = item.productId.price * item.count;

          return (
            <OrderCard
              key={item._id}
              count={item.count}
              category={item.productId.category}
              image={item.productId.image}
              name={item.productId.name}
              price={item.productId.price}
              units={item.productId.unit}
              totalPrice={totalPrice}
            />
          );
        });

        const dateObj = new Date(order.date);

        const orderDate = dateObj.toLocaleDateString("en-IN");
        const orderTime = dateObj.toLocaleTimeString("en-IN");

        order.orderDate = orderDate;
        order.orderTime = orderTime;

        return <OrderDetails order={order} arr={arr} key={ind} />;
      })}
    </div>
  );
}

export default AdminOrders;
