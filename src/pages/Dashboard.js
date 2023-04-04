import React from "react";
import "./Dashboard.css";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import Maincontainer from "../components/Maincontainer";

const Dashboard = () => {
  return (
    <div className="maincontainer">
      <div className="sidebar"><Sidebar /></div>
      <div className="container"><Maincontainer/></div>
    </div>
  );
};

export default Dashboard;
