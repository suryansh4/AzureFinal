import React from "react";
import "./Dashboard.css";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import Maincontainer from "../components/Maincontainer";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  return (
    <div className="container-fluid bg-secondary-subtle ">
      <div className="row">
        <div className="col=12">
        <Topbar/>
        </div>
      </div>
      <div className="row ">
        <div className="col-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-9 mainwindow">
          <Maincontainer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
