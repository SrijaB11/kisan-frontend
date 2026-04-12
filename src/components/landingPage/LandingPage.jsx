import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="navbar">
        <div className="logo-box">
          <img src={logo} alt="logo" />
          <h2>KisanMart</h2>
        </div>

        <div className="nav-links">
          <button onClick={() => navigate("/login")}>Login</button>
          <button className="register" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>

      <div className="hero">
        <div className="hero-left">
          <h1>Fresh Products Direct from Farmers</h1>
          <p>
            Buy organic vegetables, fruits and farming essentials directly from
            trusted farmers.
          </p>

          <button onClick={() => navigate("/login")}>Shop Now</button>
        </div>

        <div className="hero-right">
          <img src={logo} alt="farmer" />
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/50/delivery.png" alt="" />
          <h3>Fast Delivery</h3>
          <p>Quick and reliable delivery service</p>
        </div>

        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/50/leaf.png" alt="" />
          <h3>Organic Products</h3>
          <p>Healthy and natural farm products</p>
        </div>

        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/50/money.png" alt="" />
          <h3>Best Prices</h3>
          <p>Affordable rates for everyone</p>
        </div>
      </div>

      <div className="footer">
        <p>© 2026 KisanMart. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LandingPage;
