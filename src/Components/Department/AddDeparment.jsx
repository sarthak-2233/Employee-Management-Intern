import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function AddDeparment() {
    const [department,setDepartment]=useState({
            dep_name:'',
            description:'',
    })
    const handlechange =(e)=>{
            const {name,value} =e.target
            setDepartment({...department,[name]:value})
        }

        const handleSubmit= async (e)=>{
                e.preventdefault()            
        }

       const navigate = useNavigate();
       
         const Callreturn = () => {
           navigate('/admin-dashboard/departments');
         } 

    return (    
      <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
        <h3 className='text-2xl font-bold mb-6'>Add Department</h3>
        <form onSubmit={handleSubmit}>
            
            <div>
                <label htmlFor='dep_name' className='text-sm font-medium text-gray-700'>
                    Department Name
                    </label>
                <input type="text" name='dep_name' onChange={handlechange} placeholder='Enter Department Name'
                 className='mt-1 w-full border p-2 border-gray-300 rounded-md'
                 required
                 />
            </div>

            <div className='mt-3'>
                <label htmlFor="description" className='block text-sm font-medium text-gray-700'> Description</label>
                <textarea name='description' placeholder='Description' onChange={handlechange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' rows='4'></textarea>
            </div>

            <button type='submit'
                    onClick={Callreturn}
                className='w-full mt-6 bg-slate-700 hover:cursor-pointer hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-md'
            >Add Department </button>
        </form>
      </div>

    
  )
}

export default AddDeparment
