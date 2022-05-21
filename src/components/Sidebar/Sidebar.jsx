import React from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo.png'

import { MdOutlineDashboard} from 'react-icons/md';

// import { Data } from "../../Data/Data";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={ Logo } alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
            <div className="menuItem">
              <div>
                < MdOutlineDashboard />
              </div>
              <span>Dashboard</span>
            </div>

            <div className="menuItem">
              <div>
                < MdOutlineDashboard />
              </div>
              <span>Dashboard</span>
            </div>
      </div>
    </div>
  )
}

export default Sidebar