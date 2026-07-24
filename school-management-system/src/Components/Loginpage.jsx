import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiEye } from "react-icons/fi";
import image from "../assets/image/logo.png"
const LoginPage = () => {
  
  return (
    <div>
  
        <div className="p-10 bg-blue-200">
            <div className="">
          <img src={image} alt="" />
 </div>
          

          <p className="text-gray-500 mt-4 text-m font-semibold">
            Please enter your credentials to access your dashboard.
          </p>

          <h2 className="text-3xl font-bold mt-8 flex gap-2">
           <span className="text-blue-600">Welcome</span><span className="text-3xl text-gray-700">Back!</span>
            </h2>
          

        
          <div className="relative mt-8">
            <HiOutlineMail className="absolute left-4 top-4 text-gray-400 text-xl" />
            <input
              type="email"
              placeholder="mail@example.com"
              className="w-full pl-12 pr-4 py-4 rounded-xl border outline-none focus:border-blue-500"
            />
          </div>

          
          <div className="relative mt-5">
            <FiLock className="absolute left-4 top-4 text-gray-400 text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-12 py-4 rounded-xl border outline-none focus:border-blue-500"
            />
            <FiEye className="absolute right-4 top-4 text-gray-400 cursor-pointer text-xl" />
          </div>

        
          <div className="mt-5">
            <label className=" flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Remember me
            </label>
          </div>

        
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl mt-8 hover:bg-blue-700 transition">
            Login
          </button>

          <p className="mt-8 text-sm text-gray-500">
            Can't recall your password?{" "}
            <span className="text-blue-600 cursor-pointer">
              Reset it here
            </span>
          </p>

        </div>

    
        <div className="bg-blue-600 flex flex-col items-center justify-center text-white p-10">

          <h1 className="text-4xl font-bold">
            Continue Managing!
          </h1>

          <p className="text-center mt-4 max-w-sm leading-7">
            Pick up right where you left off. Sign in to the world's
            favorite fast, easy and secure school management platform.
          </p>

          <img
            src="/student.png"
            alt="Student"
            className="w-80 mt-10"
          />

        </div>

    </div>
  
)
}
      
  


export default LoginPage