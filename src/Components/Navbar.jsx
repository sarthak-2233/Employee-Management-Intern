import React from 'react'
import { useNavigate } from 'react-router-dom'
{/** Here main 
    usenavigate to handle on click 
  
  */}
function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  }

  return (
    <div className='flex justify-between h-12 bg-teal-600 items-center text-white px-2'>
      <p className='text-base font-bold'>Welcome admin</p>
      <button 
        className='mr-3 px-4 py-2 bg-teal-700 hover:cursor-pointer hover:bg-teal-800' 
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  )
}

export default Navbar
