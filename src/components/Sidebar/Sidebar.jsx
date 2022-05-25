import React from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo.png'

import SidebarData from '../../Data/Data';

import { FaSignOutAlt } from 'react-icons/fa';

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
            {SidebarData.map((item, index)=>{
              return(
                    <div className="menuItem active">
                          <item.icon />
                        <div/>

                        <span>
                          {item.heading}
                        </span>
                    </div>
                    )
            })}
            <div className="menuItem">
              <FaSignOutAlt />
            </div>
      </div>
    </div>
  )
}

export default Sidebar