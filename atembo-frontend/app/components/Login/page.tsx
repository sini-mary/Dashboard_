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
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-green-700 text-4xl mb-4 font-bold">LOGIN TO DASHBOARD</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            User Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder=""
            name="username"
            value={formData.username}
            onChange={(event) => handleChange('username', event.target.value)}
            style={{ width: '501px', height: '56px', backgroundColor: '#ECE2E2', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder=""
            name="password"
            value={formData.password}
            onChange={(event) => handleChange('password', event.target.value)}
            style={{ width: '501px', height: '56px', backgroundColor: '#ECE2E2', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
