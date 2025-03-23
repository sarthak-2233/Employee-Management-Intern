import React from 'react'
import { Link } from 'react-router-dom'
function Employee() {
    return (
        <div className='p-5'>
          
          <div className='text-center'>
             <h2 className='text-2xl font-bold'>Manage Employees</h2>
          </div>
    
          <div className='flex justify-between items-center'>
            <input type='text' placeholder='Search By Employee ID' className='w-[240px] p-2'></input>
            <Link to='/admin-dashboard/add-employees' className='px-4 py-1 bg-teal-600 rounded text-white'>Add New Employee</Link>
            </div>     

            
    
    
        </div>
      )
}

export default Employee
