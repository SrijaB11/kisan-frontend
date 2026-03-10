import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./components/customer/Register";
//import AdminDashboard from "./components/admin/AdminDashboard";
//import CustomerDashboard from "./components/customer/CustomerDashboard";

import Login from "./components/Login";
import Home from "./components/customer/Home";
//import Navbar from "./components/customer/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/customerDashboard" element={<CustomerDashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
