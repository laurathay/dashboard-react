import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo2.png';
//check

import SidebarData from '../../Data/Data';
import { FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {

  const [selected, setSelected] = useState(0)

  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img className="logo2" src={ Logo } alt="" />
        <span>
          Ch<span>a</span>llenges
        </span>
      </div>

      {/* menu */}
      <div className="menu">
            {SidebarData.map((item, index)=>{
              return(
                    <div className={ selected ===index ? 'menuItem active':'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                      <div>
                        <item.icon/>
                      </div>
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