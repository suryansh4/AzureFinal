import React from 'react'
import Landingcard from './Landingcard';
const Landingcomp = () => {
  return (
    <div>
      <div className="textbox-costum">
        <div class="card text-center">
          <div class="card-header">About Us</div>
          <div class="card-body">
            <h5 class="card-title">Azure Monitoring tool</h5>
            <p class="card-text">
              This app helps you to track pipeline status.
            </p>
          </div>
         
        </div>
      </div>
      <div className="row">
        <div className="col-6 landing-div">
          <Landingcard />
        </div>
        <div className="col-6 landing-div">
          <Landingcard />
        </div>
        <div className="col-6 landing-div">
          <Landingcard />
        </div>
        <div className="col-6 landing-div">
          <Landingcard />
        </div>
      </div>
    </div>
  );
}

export default Landingcomp
