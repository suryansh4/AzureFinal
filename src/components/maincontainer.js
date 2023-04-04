import React from "react";
import "./Maincontainer.css";
import Cardcomp from "./Cardcomp";
import Tablecomp from "./Tablecomp";

const Maincontainer = () => {
  return (
    <div className="maincontainer">
      <div className="cardcontainer">
        <Cardcomp />
        <Cardcomp />
        <Cardcomp />
        <Cardcomp />
      </div>
      <div className="table container">
        <Tablecomp />
      </div>
    </div>
  );
};

export default Maincontainer;
