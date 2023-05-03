import React from "react";
import "./Maincontainer.css";
import Cardcomp from "./Cardcomp";
// import Tablecomp from "./Tablecomp";

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
      
    </div>
  );
};

export default Maincontainer;
