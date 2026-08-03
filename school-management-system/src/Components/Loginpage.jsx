import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiEye } from "react-icons/fi";
import image from "../assets/image/logo.png"
import student from "../assets/image/student.png"
const LoginPage = () => {
  
  return (
    <div className="flex flex-col
     lg:flex-row min-h-screen">
  
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 bg-blue-200">
            <div className="">
          <img src={image} alt="Logo" className="w-40 md:w-48" />
 </div>
          

          <p className="text-gray-500 mt-4 text-m font-semibold">
            Please enter your credentials to access your dashboard.
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 flex gap-2">
           <span className="text-blue-600">Welcome</span><span className="text-3xl text-gray-700">Back!</span>
            </h2>
          

        
          <div className="relative mt-8">
            <HiOutlineMail className="absolute left-4 top-4, text-gray-400 text-xl"/>
            <input
              type="email"
              placeholder="mail@example.com"
              className=" bg-white w-full pl-12 pr-4 py-4 rounded-xl border-none outline-none"
            />
          </div>

          
          <div className="relative mt-5">
            <FiLock className="absolute left-4 top-4 text-gray-400 text-xl" />
            <input
              type="password"
              placeholder="Password"
              className=" bg-white w-full pl-12 pr-12 py-4 rounded-xl border-none outline-none"
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

    
        <div className="bg-[#397AFC] h-screen w-full lg:w-1/2 flex flex-col text-white pt-12">

          <h1 className="text-4xl font-semibold pl-45">
            Continue Managing!
          </h1>

          <p className="text-center text-lg mt-6 leading-7 pr-20 font-lightest text-white-100 pl-3">
            Pick up right where you left off. Sign in to the world's<br></br>
        favorite fast, easy and 100% free school <br></br>management platform.
          </p>

          <img
            src={student}
            alt="Student"
            className="w- h-110 mt-10 pl-20 pr-20"
          />
          </div>

        </div>

    
  
)
}
      
  


export default LoginPage
