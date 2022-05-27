import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo.png'

import SidebarData from '../../Data/Data';
import { FaSignOutAlt } from 'react-icons/fa';

// import { Data } from "../../Data/Data";

const Sidebar = () => {

  const [selected, setSelected] = useState(0)

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
                    <div className={selected===index?'menuItem active':'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                          <item.icon/>   
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