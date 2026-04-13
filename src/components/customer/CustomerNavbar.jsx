import React, { useEffect, useState } from "react";
import "./CustomerNavbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../redux/cartSlice";

import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { MdSearch, MdArrowDropDown } from "react-icons/md";

import logo from "../../assets/logo.png";

function CustomerNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items || []);
  const [user, setUser] = useState({});
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCart());

    const storedUser = localStorage.getItem("user");

    if (!storedUser || storedUser === "undefined") {
      setUser({});
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser?.user || parsedUser);
    } catch (err) {
      console.log("Invalid JSON in localStorage");
      setUser({});
    }
  }, [dispatch]);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSearch = () => {
    console.log("Searching:", search);
  };
  return (
    <div className="navbar">
      <div className="nav-left" onClick={() => navigate("/customer")}>
        <img src={logo} alt="logo" />
        <h2>KisanMart</h2>
      </div>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>
          <MdSearch size={22} />
        </button>
      </div>

      <div className="nav-right">
        <div className="nav-user" onClick={() => setDropdown(!dropdown)}>
          <FaUserCircle size={28} />
          <div>
            <span>Hello, {user?.name || "User"}</span>
            <b>
              Account <MdArrowDropDown />
            </b>
          </div>

          {dropdown && (
            <div className="dropdown">
              <p onClick={() => navigate("/customer/products")}>Products</p>
              <p onClick={() => navigate("/customer/orders")}>Orders</p>
              <p onClick={() => navigate("/customer/profile")}>Profile</p>
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>

        <div className="nav-cart" onClick={() => navigate("/customer/cart")}>
          <FaShoppingCart size={22} />
          {/* <span>{cartItems.length}</span> */}
        </div>
      </div>
    </div>
  );
}

export default CustomerNavbar;
