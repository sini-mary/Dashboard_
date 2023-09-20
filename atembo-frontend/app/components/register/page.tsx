'use client'


import React, { useState } from 'react';

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
      <div className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-green-700 text-4xl mb-4 font-bold">REGISTER TO DASHBOARD</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700  text-2xl mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder=""
              name="firstName"
              value={formData.firstName}
              onChange={(event) => handleChange('firstName', event.target.value)}
              style={{ width: '501px', height: '56px', backgroundColor: '#ECE2E2', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700  text-2xl  mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder=""
              name="lastName"
              value={formData.lastName}
              onChange={(event) => handleChange('lastName', event.target.value)}
              style={{ width: '501px', height: '56px', backgroundColor: '#ECE2E2', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700  text-2xl  mb-2" htmlFor="userName">
              User Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              placeholder=""
              name="userName"
              value={formData.userName}
              onChange={(event) => handleChange('userName', event.target.value)}
              style={{ width: '501px', height: '56px', backgroundColor: '#ECE2E2', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700  text-2xl  mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder=""
              name="email"
              value={formData.email}
              onChange={(event) => handleChange('email', event.target.value)}
              style={{ width: '501px', height: '56px', backgroundColor: '#ECE2E2', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-700 hover:bg-green-500  text-2xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="text-center font-semi bold text-2xl  mt-4">
            Already have an account? <a href="#">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
