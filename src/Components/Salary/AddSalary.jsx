import React from 'react'

function AddSalary() {
  return (
    <div className='max-w-4xl  mx-auto mt-16 bg-white p-8 rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-8'>Add New Employees</h2>

      <form >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/**DEPARTMENT */}
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
                {/**Employee */}
            <div>
            <label className='block text-sm font-medium text-gray-700'>
                Employee
            </label>
            <select 
                name='Department'
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            >
                <option value="">Select Level </option>
                <option value="Junior Level">Junior Level </option>
                <option value="Mid Level">Mid Level</option>
                <option value="Lead Level">Lead Level</option>
                <option value="Manager Level">Manager Level</option>
               
            </select>
            </div>

             {/**Basic Salary FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Basic Salary
            </label>
            <input 
            type='numbers'
            name='basicSalary'
            placeholder='Basic Salary'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>

            {/**Allowances Salary FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
                Allowances
            </label>
            <input 
            type='numbers'
            name='Allowance'
            placeholder='Monthly Allowances'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>

        {/**Deductions Salary FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
            Deductions
            </label>
            <input 
            type='numbers'
            name='deductions'
            placeholder='Monthly Deductions'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>

        {/**Pay Date FILE */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>
            Pay Date
            </label>
            <input 
            type='date'
            name='Pay Date'
            placeholder='Monthly Deductions'
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            required
            />
        </div>
        

        </div>

            <button type='submit'
                className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md'
            >
                Add Salary
            </button>
      </form>
    </div>
  )
}

export default AddSalary
