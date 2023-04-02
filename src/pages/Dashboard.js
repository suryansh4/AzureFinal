import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">{/* Sidebar content */}</div>
      <div className="cards">
        <div className="card">{/* Card content */}</div>
        <div className="card">{/* Card content */}</div>
        <div className="card">{/* Card content */}</div>
      </div>
      <div className="big-components">
        <div className="big-component">{/* Big component content */}</div>
        <div className="big-component">{/* Big component content */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
