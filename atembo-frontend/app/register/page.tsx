'use client'

import React, { useState } from 'react';
import Link from 'next/link';

function RegistrationPage() {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
userName: '',
email: '',
});

const handleChange = (name: string, value: string) => {
setFormData({
...formData,
[name]: value,
});
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
            <label htmlFor=" Full Name" className="block text-black mt-4 text-2xl mb-2">
              Full Name
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-blackleading-tight focus:outline-none focus:shadow-outline"

              id=" Full Name"
              type="text"
              placeholder=""
              name="firstName"
              value={formData.firstName}
              onChange={(event) => handleChange('firstName', event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-black mt-4 text-2xl mb-2">
              User Name
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"

              id="lastName"
              type="text"
              placeholder=""
              name="lastName"
              value={formData.lastName}
              onChange={(event) => handleChange('lastName', event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-black  mt-4 text-2xl mb-2">
            Email
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
          <div className="mb-6">
            <label htmlFor="email" className="block text-black  mt-4 text-2xl mb-2">
              Password
            </label>
            <input
             className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"

              id="email"
              type="email"
              placeholder=""
              name="email"
              value={formData.email}
              onChange={(event) => handleChange('email', event.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green hover:bg-green text-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
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