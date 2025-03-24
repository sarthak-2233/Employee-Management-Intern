import React from 'react'
import { Link } from 'react-router-dom'

function Employee() {
    return (
        <div className='p-5'>
          
          <div className='text-center mb-4'>
             <h2 className='text-2xl font-bold'>Manage Employees</h2>
          </div>
    
          <div className='flex justify-between items-center'>
            <input 
              type='text' 
              placeholder='Search By Employee ID' 
              className='w-[240px] p-2 border border-slate-400 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300'
            />
            <Link 
              to='/admin-dashboard/add-employees' 
              className='px-4 py-2 bg-slate-700 hover:cursor-pointer hover:bg-slate-600 rounded text-white transition duration-300'
            >
              Add New Employee
            </Link>
          </div>     
        </div>
      )
}

export default Employee
