import React from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo.png'

import { MdOutlineDashboard} from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { FiPackage, FiPieChart  } from 'react-icons/fi';
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
                < HiOutlineClipboardList />
              </div>
              <span> Orders</span>
            </div>

            <div className="menuItem">
              <div>
                < FiUsers />
              </div>
              <span> Users</span>
            </div>

            <div className="menuItem">
              <div>
                < FiPackage />
              </div>
              <span> Products </span>
            </div>

            <div className="menuItem">
              <div>
                < FiPieChart />
              </div>
              <span> Analytics </span>
            </div>
      </div>
    </div>
  )
}

export default Sidebar