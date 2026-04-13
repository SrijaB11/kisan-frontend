import logo from "./logo.svg";
import "./App.css";
import RegisterPage from "./components/customer/RegisterPage";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import LandingPage from "./components/landingPage/LandingPage";
import Customers from "./components/admin/customer/Customers";
import Products from "./components/admin/products/Products";
import Protected from "./components/ProtectedRoute/Protected";
// import CustomerProducts from "./components/customer/Products/CustomerProducts";
import CartItems from "./components/customer/Cart/CartItems";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "./redux/cartSlice";
import Orders from "./components/customer/orders/Orders";
import AdminHome from "./components/admin/AdminHome";
import AdmminOrders from "./components/admin/orders/AdminOrders";
import CustomerHome from "./components/customer/CustomerHome";
import CustomerProducts from "./components/customer/products/CustomerProducts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/customer"
            element={
              <Protected>
                <CustomerDashboard />
              </Protected>
            }
          >
            <Route index element={<CustomerHome />} />

            <Route path="/customer/products" element={<CustomerProducts />} />
            <Route path="/customer/cart" element={<CartItems />} />
            <Route path="/customer/orders" element={<Orders />} />
          </Route>
          <Route
            path="/admin"
            element={
              <Protected>
                <AdminDashboard />
              </Protected>
            }
          >
            <Route index element={<AdminHome />} />

            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/orders" element={<AdmminOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
