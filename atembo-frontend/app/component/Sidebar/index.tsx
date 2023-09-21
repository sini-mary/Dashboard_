"use client";
import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from 'react';
import {  FaList, FaTachometerAlt, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed); 
  };

  const closeSidebar = () => {
    if (isMobile && !isSidebarCollapsed) {
      setIsSidebarCollapsed(true);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`flex h-screen ${isMobile ? 'md:h-auto' : ''}`}>
      {isMobile && (
        <button
          className="md:hidden absolute top-4 left-0 bg-custom-color text-white rounded-full p-2"
          onClick={toggleSidebar}
        >
          {isSidebarCollapsed ? (
          <FaBars className="h-6 w-6 text-green transition-all duration-300" />
        ) : (
          <FaTimes className="h-6 w-6 text-green transition-all duration-300" />
        )}
        
        </button>
      )}
      <div
        className={`navbar w-1/9 bg-green-100 text- flex flex-col ${
          isMobile && isSidebarCollapsed ? 'collapsed' : ''
        }`}
      >
    
        <div className="p-4 mt-4 flex items-center">
          <div className="relative">
            <img src='./images/image-removebg-preview.png' alt="Logo" className={`logo object-contain h-40 ml-10 ${isSidebarCollapsed ? 'collapsed' : ''}`} />
          </div>
        </div>
        <ul className={`p-2 ${isSidebarCollapsed ? 'hidden' : ''}`}>
  <li className="flex py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer items-center">
    <FaTachometerAlt className={`text-green-500 mr-2 ${isSidebarCollapsed ? 'collapsed-icon' : ''}`} />
    <span className="dashboard capitalize text-xl">DASHBOARD</span>
  </li>
  <li className="flex py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer items-center">
    <FaList className={`text-green-500 mr-2 ${isSidebarCollapsed ? 'collapsed-icon' : ''}`} />
    <span className="list capitalize text-xl">SYSTEM LIST</span>
  </li>
</ul>
        <div className="flex-grow"></div>
        <div className="p-4"></div>
      </div>
      <div className={`flex-grow bg-white ${isMobile && isSidebarCollapsed ? 'collapsed' : ''}`} onClick={closeSidebar}></div>
      <style>
        {`
        

          @media screen and (max-width: 768px) {
            .collapsed {
              width: 60px;
            }
            .collapsed-icon {
              display: none;
            }
            .collapsed .menu-button {
              display: block;
            }
          .text-green-500:hover {
            color: white !important;
          }
          .hover\:px-:hover {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          .hover\:bg-[#2CB908] :hover {
            background-color: #2CB908;
          }
          @media screen and (max-width: 768px) {
            .navbar {
              flex-direction: column;
              width: 20%;
            }
            .dashboard{
              font-size:14px;
              margin-left:5px;
            }
            .list{
              font-size:14px;
              margin-left:5px;
            }
            .analysis{
              font-size:14px;
              margin-left:5px;
            }
            .navbar ul li {
              display:flex;
            }
            .navbar .ml-10 {
              margin-left: 0.5rem;
            }
            .logo{
              width:10px;
              height:15vh;
            }
            .text-green-500:hover {
              color: white !important;
            }
            .hover\:px-2:hover {
              padding-left: 0.55rem !important;
              padding-right: 0.5rem !important;
            }
            .hover\:bg-[#2CB908] :hover {
              background-color: #2CB908;
            }
            .square1{
              width:200px;
              height:100px;
              margin-left:530px
            }
            .numbers{
              font-size:20px;
              margin-top:-10px;
            }
            .square2{
              margin-top:140px;
              width:200px;
              height:100px;
              margin-left:-215px
            }
            .square3{
              margin-top:265px;
              width:200px;
              height:100px;
              margin-left:-215px
            }
            .words{
              font-size:15px;
              margin-top:10px;
            }
            .perform {
              font-size:20px;
              width:20px;
              margin-left:30px;
              margin-top:-30px;
            }
            .logo:not(.collapsed){
            width:120%;
            object-fit:contain;
            }
            .navbar:not(.collapsed) {
              width: 60%;
            }
            .navbar:not(.collapsed) ul {
            }
            .navbar:not(.collapsed) .menu-button {
            }
          }
          }
          @media screen and (max-width: 480px) {
            .navbar li {
              width: 100%;
            }
          }
          .menu-button {
            cursor: pointer;
            background: none;
            border: none;
            outline: none;
            margin-left: 1rem;
          }
          .collapsed {
            width: 60px; 
          }
          .collapsed .menu-button {
            display: block;
          }
          .collapsed ul {
            display: none;
          }
          @media screen and (max-width: 768px) {
            .navbar {
              flex-direction: column;
              width: 20%;
            }
            .dashboard {
              font-size: 14px;
              margin-left: 5px;
            }
            .list {
              font-size: 14px;
              margin-left: 5px;
            }
            .analysis {
              font-size: 14px;
              margin-left: 5px;
            }
          }
          @media screen and (max-width: 480px) {
            .navbar li {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};
export default Sidebar;