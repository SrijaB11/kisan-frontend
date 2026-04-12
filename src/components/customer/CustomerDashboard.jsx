import { Outlet } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";

function CustomerDashboard() {
  return (
    <div>
      <CustomerNavbar />
      <Outlet />
    </div>
  );
}

export default CustomerDashboard;
