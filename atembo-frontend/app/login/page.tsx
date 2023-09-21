'use client'
import React, { useState } from 'react';


function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Login data:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-custom-green text-4xl mb-4 font-bold">LOGIN TO DASHBOARD</h1>
        <div className="mb-4">
          <label className="block text-custom-black  text-2xl text-2xl mb-4" htmlFor="username">
            User Name
          </label>
          <input
            className="shadow-lg appearance-none rounded-lg bg-custom-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-custom-black leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder=""
            name="username"
            value={formData.username}
            onChange={(event) => handleChange('username', event.target.value)}
           
          />
        </div>
        <div className="mb-6">
        <label className="block text-custom-black text-2xl text-2xl mb-2" htmlFor="password">
           Password
          </label>

          <input
             className="shadow-lg appearance-none rounded-lg bg-custom-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-custom-black leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder=""
            name="password"
            value={formData.password}
            onChange={(event) => handleChange('password', event.target.value)}
        
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-custom-green hover:bg-custom-green text-white text-2xl  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
