import React from "react";
import Header from "../admin/landingPage/Header";
import styles from "./CustomerDashboard.module.css";
import { Outlet } from "react-router-dom";

function CustomerDashboard() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default CustomerDashboard;
