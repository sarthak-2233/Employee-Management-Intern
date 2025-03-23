import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTachometerAlt, FaUsers, FaBuilding, FaCogs, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa'

{
  /** USING END PROPERTY IN REACT TO REMOVE DUPLICATION DURING CHILD SELECTION */
}
function Adminsidebar() {
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
      <div className='bg-teal-600 h-12 flex items-center justify-center'>
        <h3 className='text-2xl text-center '>Employee MS</h3>
      </div>

      <div>
        {/* ✅ Ensure `to` values are unique and correctly match the route */}
        <NavLink to='/admin-dashboard' className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded`} 
        end>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to='/admin-dashboard/employees' className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded`}
        end>
          <FaUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink to='/admin-dashboard/departments' className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded`}
        end>
          <FaBuilding />
          <span>Departments</span>
        </NavLink>

        <NavLink to='/admin-dashboard/leave' className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded`}
        end>
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>

        <NavLink to='/admin-dashboard/salary' className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded`}
        end>
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>

        <NavLink to='/admin-dashboard/settings' className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 py-2.5 px-4 rounded`}
        end>
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Adminsidebar
