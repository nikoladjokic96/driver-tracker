import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaEdit, FaWrench, FaRegClock } from 'react-icons/fa'
import { HiOutlineClipboardDocument } from 'react-icons/hi2'
import { BsCalendarMinus } from 'react-icons/bs'
import { ImEye } from 'react-icons/im'
import { TbDeviceLaptop } from 'react-icons/tb'

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <FaHome className="nav-icon" />
          Home
        </li>
        <li className="nav-item">
          <FaEdit className="nav-icon" />
          <Link to="/logs">Driver Logs</Link>
        </li>
        <li className="nav-item">
          <HiOutlineClipboardDocument className="nav-icon" />
          Inspection logs
        </li>
        <li className="nav-item">
          <BsCalendarMinus className="nav-icon" />
          Unidentified Driving
        </li>
        <li className="nav-item">
          <FaWrench className="nav-icon" />
          DVIR
        </li>
        <li className="nav-item">
          <ImEye className="nav-icon" />
          <Link to="/tracking">Live Tracking</Link>
        </li>
        <li className="nav-item">
          <FaRegClock className="nav-icon" />
          Location History
        </li>
        <li className="nav-item">
          <FaEdit className="nav-icon" />
          Reports
        </li>
        <li className="nav-item">
          <TbDeviceLaptop className="nav-icon" />
          Administration
        </li>
      </ul>
    </nav>
  )
}

export default Nav
