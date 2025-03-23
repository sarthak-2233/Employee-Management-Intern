import React from 'react'
import { Link } from 'react-router'
function DepartmentList() {
  return (
    <div className='p-5'>
      
      <div className='text-center'>
         <h2 className='text-2xl font-bold'>Manage Departments</h2>
      </div>

      <div className='flex justify-between items-center'>
        <input type='text' placeholder='Search By Department Name' className='w-[240px] p-2'></input>
        <Link to="/admin-dashboard/add-department" className='px-4 py-1 bg-teal-600 rounded text-white'>Add New Department</Link>
        </div>     



    </div>
  )
}

export default DepartmentList
