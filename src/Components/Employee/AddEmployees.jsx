import React from 'react'

function AddEmployees() {
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Add New Employees</h2>

      <form >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/**NAME FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Name
            </label>
            <input 
            type='text'
            name='name'
            placeholder='Enter Name'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>

            {/**Email FILE */}
            <div>
            <label className='block text-sm font-medium text-gray-700'>
                Email
            </label>
            <input 
            type='email'
            name='email'
            placeholder='Enter Email'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>

            {/**EmployeeId FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Employee ID
            </label>
            <input 
            type='text'
            name='employeeId'
            placeholder='Employee ID'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>

        {/**Dob FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Date Of Birth
            </label>
            <input 
            type='date'
            name='dob'
            placeholder='DOB'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>   

        {/**Gender FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Gender
            </label>
            <select 
                name='gender'
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </div>

            {/**Marital FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Marital Status
            </label>
            <select 
                name='maritalStatus'
                placeholder='Marital Status'
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            >
                <option value="">Select Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                
            </select>
        </div>

        {/**Designation FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Designation
            </label>
            <input 
            type='text'
            name='designation'
            placeholder='Designation'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>

        {/**Department FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Department
            </label>
            <select 
                name='Department'
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            >
                <option value="">Select Department</option>
                <option value="Management">Management</option>
                <option value="Hr">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
               
            </select>
        </div>

        {/**Salary FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Salary
            </label>
            <input 
            type='number'
            name='salary'
            placeholder='Salary'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>

        {/**Password FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Password
            </label>
            <input 
            type='password'
            name='password'
            placeholder='Enter Password'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>

        {/**Role FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Role
            </label>
            <select 
                name='role'
                
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            >
                <option value="">Select Status</option>
                <option value="admin">Admin</option>
                <option value="Employee">Employee</option>
                
            </select>
        </div>

        {/**Image FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Image Upload
            </label>
            <input 
            type='file'
            name='image'
            placeholder='Image'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            
            />
        </div>


        </div>

            <button type='submit'
                className='w-full mt-6 bg-slate-700 hover:cursor-pointer hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-md'
            >
                Add Employee
            </button>
      </form>
    </div>
  )
}

export default AddEmployees
