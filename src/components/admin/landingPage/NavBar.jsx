import React, { useState } from "react";
import styles from "./NavBar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useNavigate } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { FaUsers, FaBox, FaShoppingCart, FaChartBar } from "react-icons/fa";

function NavBar() {
  const [isMenuClose, setisMenuClose] = useState(false);
  let navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", icon: <FaChartBar />, href: "/admin" },
    { name: "Customers", icon: <FaUsers />, href: "/admin/customers" },
    { name: "Products", icon: <FaBox />, href: "/admin/products" },
    { name: "Orders", icon: <FaShoppingCart />, href: "/admin/orders" },
  ];
  function handleMenu() {
    if (isMenuClose == true) {
      setisMenuClose(false);
      return;
    }
    setisMenuClose(true);
  }
  return (
    <nav
      className={styles.sideBarContainer}
      style={{
        width: isMenuClose ? "70px" : "400px",
        transition: "all 0.2s linear 0s",
      }}
    >
      <div className={styles.header}>
        <div className={styles.menu} onClick={handleMenu}>
          <KeyboardDoubleArrowLeftIcon
            sx={{
              transform: isMenuClose ? "rotate(180deg)" : "",
              transition: "all 0.2s linear 0s",
            }}
          />
          {isMenuClose ? "" : <span>Admin</span>}
        </div>
      </div>
      <div className={styles.navbar}>
        {navItems.map((item, ind) => {
          return (
            <div
              className={styles.navItem}
              onClick={() => navigate(item.href)}
              key={ind}
            >
              {item.icon}
              {isMenuClose ? "" : <span>{item.name}</span>}
            </div>
          );
        })}
      </div>
      <div className={styles.footer}></div>
    </nav>
    // </div>
  );
}

export default NavBar;
