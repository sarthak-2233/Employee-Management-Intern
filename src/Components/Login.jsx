import { useState } from "react";
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    function handle(){
      if (email.length !== 0 && password.length!=0)
        navigate("/admin-dashboard")

      else
      {
        alert("Empty Credentials")
      }
    }

    return (
      <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
        <h2 className="font-sevillana text-3xl text-white">NIC</h2>
  
        <div className="border shadow p-6 w-80 bg-white">
          <h2 className="text-2xl font-bold mb-4">LOGIN</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-3 py-2 border"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-3 py-2 border"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
  
            <div className="mb-4 flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
              <a href="#" className="text-teal-600">
                Forgot password
              </a>
            </div>
  
            <button type="submit" className="w-full bg-teal-600 text-white py-2" onClick={handle}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  