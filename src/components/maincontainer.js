import React from "react";
import "./Maincontainer.css";
import Cardcomp from "./Cardcomp";
import Tablecomp from "./Tablecomp";
import PieChart from "./PieChart";

const Maincontainer = () => {
  return (
    <div className="row maincontainer">
      <div className="col">
        <Cardcomp />
      </div>
      <div className="col">
        <Cardcomp />
      </div>
      <div className="col">
        <Cardcomp />
      </div>
      <div className="row">
        <div className="col-9">
         <Tablecomp />
        </div>
        <div className="col-3">
         <PieChart />
        </div>
      </div>
      
    </div>
  );
};

export default Maincontainer;
