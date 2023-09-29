'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function RegistrationPage() {
  const router = useRouter();
  const signMeIn = () => {
    ("/login")
}
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = () => {
    console.log('Registration data:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-[0 2px 4px rgba(0, 0, 0, 0.4)]">
        <h1 className="text-green text-4xl mb-4 font-bold">REGISTER TO DASHBOARD</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-black mt-4 text-2xl mb-2">
              Full Name
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-blackleading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder=""
              name="firstName"
              value={formData.firstName}
              onChange={(event) => handleChange('firstName', event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-black mt-4 text-2xl mb-2">
              User Name
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              placeholder=""
              name="userName"
              value={formData.userName}
              onChange={(event) => handleChange('userName', event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black  mt-4 text-2xl mb-2">
              Email
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder=""
              name="email"
              value={formData.email}
              onChange={(event) => handleChange('email', event.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-black  mt-4 text-2xl mb-2">
              Password
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder=""
              name="password"
              value={formData.password}
              onChange={(event) => handleChange('password', event.target.value)}
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
              onClick={togglePasswordVisibility}
              style={{ marginTop: "20px" }}
            >
              {passwordVisible ? (
                <FaEyeSlash className="text-2xl" />
              ) : (
                <FaEye className="text-2xl" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
      
              <button
                 onClick={signMeIn}
                className="bg-green hover:bg-green text-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
             
                <Link href="/login">Register</Link>
              </button>
           
          </div>
          <div className="text-left font-semibold text-2xl mt-4">
            Already have an account? 
            <Link href="/login"><span className="text-green p-1 m-1">Login</span></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
