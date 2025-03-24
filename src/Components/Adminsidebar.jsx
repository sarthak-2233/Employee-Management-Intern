import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTachometerAlt, FaUsers, FaBuilding, FaCogs, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa'

function Adminsidebar() {
  return (
    <div className='bg-slate-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
      <div className='bg-indigo-600 h-12 flex items-center justify-center shadow-md'>
        <h3 className='text-2xl text-center font-semibold'>Employee MS</h3>
      </div>

      <div>
        <NavLink 
          to='/admin-dashboard' 
          className={({ isActive }) => `${isActive ? "bg-indigo-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-indigo-600 transition duration-300`} 
          end
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink 
          to='/admin-dashboard/employees' 
          className={({ isActive }) => `${isActive ? "bg-indigo-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-indigo-600 transition duration-300`} 
          end
        >
          <FaUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink 
          to='/admin-dashboard/departments' 
          className={({ isActive }) => `${isActive ? "bg-indigo-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-indigo-600 transition duration-300`} 
          end
        >
          <FaBuilding />
          <span>Departments</span>
        </NavLink>

        <NavLink 
          to='/admin-dashboard/leave' 
          className={({ isActive }) => `${isActive ? "bg-indigo-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-indigo-600 transition duration-300`} 
          end
        >
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>

        <NavLink 
          to='/admin-dashboard/salary' 
          className={({ isActive }) => `${isActive ? "bg-indigo-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-indigo-600 transition duration-300`} 
          end
        >
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>

        <NavLink 
          to='/admin-dashboard/settings' 
          className={({ isActive }) => `${isActive ? "bg-indigo-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded hover:bg-indigo-600 transition duration-300`} 
          end
        >
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Adminsidebar
