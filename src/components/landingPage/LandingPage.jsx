import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/login", name: "Login" },
    { path: "/register", name: "Register" },
  ];

  return (
    <div className="page">
      {/* 🔝 NAVBAR */}
      <header className="navbar">
        <div className="navContainer">
          {/* LOGO */}
          <div className="logoContainer">
            <img src="/logo.png" alt="logo" className="logoImg" />
            <h2 className="logoText">KisanMart</h2>
          </div>

          <nav className={`navLinks ${open ? "active" : ""}`}>
            {links.map((item) => (
              <Link key={item.name} to={item.path} className="navLink">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="menuIcon" onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>
      </header>

      {/* 🌾 HERO */}
      <section className="hero">
        <div className="heroContent">
          <h1>Empowering Farmers 🌾</h1>
          <p>Fresh products directly from farms to your home.</p>

          <div className="heroButtons">
            <button className="primaryBtn">Shop Now</button>
            <button className="secondaryBtn">Join Us</button>
          </div>
        </div>

        <div className="heroImage">
          <img src="https://images.unsplash.com/photo-1592928302636-c83cf1bda1c6" />
        </div>
      </section>

      {/* 📊 STATS */}
      <section className="stats">
        <div className="statBox">
          <h2>500+</h2>
          <p>Farmers Connected</p>
        </div>
        <div className="statBox">
          <h2>10K+</h2>
          <p>Customers</p>
        </div>
        <div className="statBox">
          <h2>100%</h2>
          <p>Fresh Products</p>
        </div>
      </section>

      {/* 🛒 FEATURES */}
      <section className="section">
        <h2 className="sectionTitle">Why Choose KisanMart?</h2>

        <div className="grid">
          <div className="card">🌿 Fresh from Farms</div>
          <div className="card">💰 Best Market Prices</div>
          <div className="card">🚜 Direct Farmer Supply</div>
          <div className="card">⚡ Fast Delivery</div>
        </div>
      </section>

      {/* 🥕 CATEGORIES */}
      <section className="section categorySection">
        <h2 className="sectionTitle">Popular Categories</h2>

        <div className="grid">
          <div className="categoryCard">🥦 Vegetables</div>
          <div className="categoryCard">🍎 Fruits</div>
          <div className="categoryCard">🌾 Grains</div>
          <div className="categoryCard">🥛 Dairy</div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="cta">
        <h2>Start Your Journey with KisanMart</h2>
        <p>Join today and experience fresh, direct-from-farm shopping.</p>

        <Link to="/register">
          <button className="primaryBtn">Get Started</button>
        </Link>
      </section>

      {/* 📞 FOOTER */}
      <footer className="footer">
        <p>© 2026 KisanMart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
