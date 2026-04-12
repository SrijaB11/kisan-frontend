import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import axios from "axios";
import { FaUsers, FaBox, FaShoppingCart, FaRupeeSign } from "react-icons/fa";

function AdminHome() {
  const [stats, setStats] = useState({
    customers: 0,
    products: 0,
    orders: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);

  async function getStats() {
    try {
      const token = localStorage.getItem("token");

      const [custRes, prodRes, orderRes] = await Promise.all([
        axios.get(`${process.env.REACT_APP_BE_API_URL}/admin/allCustomers`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${process.env.REACT_APP_BE_API_URL}/products`),
        axios.get(`${process.env.REACT_APP_BE_API_URL}/admin/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const orders = orderRes.data || [];

      const totalRevenue = orders.reduce(
        (sum, item) => sum + (item?.price || 0),
        0,
      );

      setStats({
        customers: custRes.data?.length || 0,
        products: prodRes.data?.length || 0,
        orders: orders.length,
        revenue: totalRevenue,
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
    <div className="admin-home">
      <h2>KisanMart Dashboard</h2>

      <div className="cards">
        <div className="card">
          <FaUsers className="icon" />
          <h3>Customers</h3>
          {/* <p>{stats.customers}</p> */}
        </div>

        <div className="card">
          <FaBox className="icon" />
          <h3>Products</h3>
          {/* <p>{stats.products}</p> */}
        </div>

        <div className="card">
          <FaShoppingCart className="icon" />
          <h3>Orders</h3>
          {/* <p>{stats.orders}</p> */}
        </div>

        {/* <div className="card">
          <FaRupeeSign className="icon" />
          <h3>Revenue</h3>
          <p>₹ {stats.revenue}</p> 
        </div> */}
      </div>
    </div>
  );
}

export default AdminHome;
