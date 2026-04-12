import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Customer.css";

function Customers() {
  const [customers, setCustomers] = useState([]);

  const API = process.env.REACT_APP_BE_API_URL;
  const token = localStorage.getItem("token");

  async function getCustomersDetails() {
    try {
      let res = await axios.get(`${API}/admin/allCustomers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCustomers(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCustomersDetails();
  }, []);

  return (
    <div className="customers-container">
      <h2>Registered Customers</h2>

      <div className="table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item, ind) => (
              <tr key={item._id}>
                <td>{ind + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
