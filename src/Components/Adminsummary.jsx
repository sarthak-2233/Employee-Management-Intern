import React from 'react'
import Summarycard from './Summarycard'
import { FaBuilding, FaCogs, FaUser } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

function Adminsummary() {
  return (
    <div className='p-6'>
        <h3 className='text-2xl font-bold'>Dashboard Overview</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-0 mt-6'>
            <Summarycard icon={<FaUser/>} text={"TOTAL EMPLOYEES"} number={13} color="bg-teal-600"></Summarycard>
            <Summarycard icon={<FaBuilding/>} text={"TOTAL DEPARTMENTS"} number={3} color="bg-yellow-500"></Summarycard>
            <Summarycard icon={<FaMoneyBill1Wave/>} text={"MONTHLY PAY"} number={30000} color="bg-green-500"></Summarycard>
        </div>

      <div className='mt-20'>
      <h4 className=' text-3xl font-bold'>Leave Deatils</h4>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6  mt-4'>
      <Summarycard icon={<FaUser/>} text={"LEAVE APPLIED"} number={2} color="bg-teal-600"></Summarycard>
      <Summarycard icon={<FaUser/>} text={"LEAVE PENDING"} number={5} color="bg-yellow-500"></Summarycard>
      <Summarycard icon={<FaUser/>} text={"LEAVE APPROVED"} number={16} color="bg-green-600"></Summarycard>
      <Summarycard icon={<FaUser/>} text={"LEAVE REJECTED"} number={5} color="bg-red-600"></Summarycard>
      </div>


      </div>



    </div>
  )
}

export default Adminsummary
