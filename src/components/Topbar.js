import React from 'react'
import './Topbar.css'
import Topimage from '../img/topimg.png'

const Topbar = ({ refresh }) => {
  return (
    <div className="topbar">
      <div className='topimg'>
        <img
          className="topimage"
          src={Topimage}
          alt="Top Image"
        />
      </div>
      <div className="header-heading">Azure Monitoring Tool</div>
      <span className="refresh-button">
        <button type="button" class="btn btn-outline-primary" onClick={refresh}>
          Refresh Status
        </button>
      </span>
    </div>
  );
}

export default Topbar
