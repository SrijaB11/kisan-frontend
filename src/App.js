import "./App.css";
import RegisterPage from "./components/customer/RegisterPage";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import LandingPage from "./components/landingPage/LandingPage";
import Customers from "./components/admin/customer/Customers";
import Products from "./components/admin/products/Products";

import CustomerProductCard from "./components/customer/products/CustomerProductCard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer" element={<CustomerDashboard />}>
            <Route index element={<h1>custmer dashboard</h1>} />

            <Route path="products" element={<CustomerProductCard />} />
          </Route>
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<h1>admin dashboard</h1>} />

            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
