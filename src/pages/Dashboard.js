import React from "react";
import "./Dashboard.css";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import Maincontainer from "../components/Maincontainer";
import Topbar from "../components/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingcomp from "../components/Landingcomp";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row top-section">
        <div className="col-12 remove-padding">
          <Topbar />
        </div>
      </div>
      <div className="row bottom-section ">
        <div className="col-3">
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
        <div className="col-9">
          <div className="mainwindow">
            {/* <Maincontainer /> */}
            <Routes>
              <Route path="/" element={<Maincontainer />}></Route>
              <Route path="/landing" element={<Landingcomp />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
