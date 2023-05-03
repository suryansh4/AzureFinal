import React from 'react'
import './Topbar.css'

const Topbar = () => {
  return (
    <div className="topbar">
      <span className="header-heading h1">Azure Monitoring Tool</span>
      <span className='refresh-button'>
        <button type="button" class="btn btn-outline-primary">
          Refresh Status
        </button>
      </span>
    </div>
  );
}

export default Topbar
