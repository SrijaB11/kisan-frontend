import React, { useEffect, useState } from "react";
import "./CustomerHome.css";
import axios from "axios";
import {
  FaBox,
  FaShoppingCart,
  FaClipboardList,
  FaRupeeSign,
} from "react-icons/fa";

function CustomerHome() {
  const [stats, setStats] = useState({
    products: 0,
    cartItems: 0,
    orders: 0,
    spent: 0,
  });

  const [loading, setLoading] = useState(true);

  async function getStats() {
    try {
      const token = localStorage.getItem("token");

      const [prodRes, cartRes, orderRes] = await Promise.all([
        axios.get(`${process.env.REACT_APP_BE_API_URL}/products`),
        axios.get(`${process.env.REACT_APP_BE_API_URL}/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${process.env.REACT_APP_BE_API_URL}/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const orders = orderRes.data || [];

      const totalSpent = orders.reduce(
        (sum, item) => sum + (item?.price || 0),
        0,
      );

      setStats({
        products: prodRes.data?.length || 0,
        cartItems: cartRes.data?.length || 0,
        orders: orders.length,
        spent: totalSpent,
      });

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getStats();
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div className="customer-home">
      <h2>Welcome to KisanMart 🛒</h2>

      <div className="cards">
        <div className="card">
          <FaBox className="icon" />
          <h3>Products</h3>
          {/* <p>{stats.products}</p> */}
        </div>

        <div className="card">
          <FaShoppingCart className="icon" />
          <h3>Cart Items</h3>
          {/* <p>{stats.cartItems}</p> */}
        </div>

        <div className="card">
          <FaClipboardList className="icon" />
          <h3>My Orders</h3>
          {/* <p>{stats.orders}</p> */}
        </div>

        {/* <div className="card">
          <FaRupeeSign className="icon" />
          <h3>Total Spent</h3>
         <p>₹ {stats.spent}</p>
        </div> */}
      </div>
    </div>
  );
}

export default CustomerHome;
