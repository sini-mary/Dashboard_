'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
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
    console.log('Login data:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-green text-4xl mb-4 font-bold">LOGIN TO DASHBOARD</h1>
        <div className="mb-4">
          <label className="block text-black text-2xl text-2xl mb-4" htmlFor="username">
            User Name
          </label>
          <input
            className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder=""
            name="username"
            value={formData.username}
            onChange={(event) => handleChange('username', event.target.value)}
          />
        </div>
        <div className="mb-6 relative">
          <label className="block text-black text-2xl text-2xl mb-2" htmlFor="password">
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
          <Link href="/systemlists">
            <button
              className="bg-green hover:bg-green text-white text-2xl  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </Link>
        </div>
        <div className="text-left font-semibold text-2xl mt-4">
          Don't have an account? 
          <Link href="/register"><span className="text-green p-1 m-1"> Register</span></Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
