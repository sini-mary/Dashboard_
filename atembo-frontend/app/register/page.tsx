'use client'
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import useCreateUsers from '../hooks/usePostRegistration';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { user, handleRegister } = useCreateUsers({
    username,
    email,
    password,
    first_name:firstName,
    last_name : lastName
  });

  const handleCreateUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    await handleRegister();
    if (user) {
      console.log('User created:', user);
    } else {
      console.error('Error creating user');
    }
  };
console.log(user);

  const handleTogglePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };


  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-[0 2px 4px rgba(0, 0, 0, 0.4)]">
        <h1 className="text-green text-4xl mb-4 font-bold">REGISTER TO DASHBOARD</h1>
        <form onSubmit={handleCreateUser}>
          <div className="mb-4">
            <label className="block text-black text-2xl mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder=""
              name="first_name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black text-2xl mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder=""
              name="last_name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black text-2xl mb-2" htmlFor="userName">
              Username
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              placeholder=""
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black text-2xl mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder=""
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-black text-2xl mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder=""
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              className="bg-green hover:bg-green-dark text-white text-2xl py-2 px-4 rounded"
              type="submit"
            >
              Register
            </button>
            <Link href="/login">
              <p className="inline-block align-baseline font-bold text-sm text-green hover:text-green-darker">
                Already have an account? Log in.
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;