'use client'
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useGetlogin from "../hooks/useGetlogin";
import Link from "next/link";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };
  const { user, handleLogin } = useGetlogin({
    username,
    password,
   
  });

const handleloginUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
 

    await handleLogin();
    if (user) {
      console.log('Log in successful:', user);
    } else {
      console.error('Log in failed');
    }
 
  }
  console.log(user);

 
  
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleloginUser} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-green text-4xl mb-4 font-bold">LOGIN TO DASHBOARD</h1>
        <div className="mb-4">
          <label className="block text-black text-2xl mb-4" htmlFor="username">
            User Name
          </label>
          <input
            className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder=""
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required />
        </div>
        <div className="mb-6 relative">
          <label className="block text-black text-2xl mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={passwordVisible ? "text" : "password"}
            placeholder=""
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required          />
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
        {onerror && (
          <div className="text-red-500 mb-4">
            Invalid username or password. Please try again.
          </div>
        )}
        <div className="flex items-center justify-between">
          <Link href="/homePage">
          <button
            className="bg-green hover:bg-green text-white text-2xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          </Link>
        </div>
        <div className="text-left font-semibold text-2xl mt-4">
          Don't have an account?
          <Link href="/register">
            <span className="text-green p-1 m-1"> Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;