import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div className='flex justify-between h-12 bg-indigo-600 items-center text-white px-4 shadow-md'>
      <p className='text-base font-semibold'>Welcome Admin</p>
      <button 
        className='mr-3 px-4 py-2 bg-slate-700 hover:cursor-pointer hover:bg-slate-600 rounded-lg transition duration-300'
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  )
}

export default Navbar
