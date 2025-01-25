import React, { useEffect } from "react";
import { useLocation } from "react-router";

const Dashboard = () => {
  const location = useLocation();
  useEffect(() => {
    const titleElement = document.getElementById("title");
    if (titleElement && location.pathname === "/dashboard") {
      titleElement.innerHTML = "Dahboard | Gadget Heaven";
    }
  }, [location.pathname]);
  return <div>Dashboard</div>;
};

export default Dashboard;
