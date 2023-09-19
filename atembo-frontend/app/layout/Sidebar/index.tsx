import "tailwindcss/tailwind.css";
import React from 'react';
import { FaChartBar, FaList, FaTachometerAlt} from 'react-icons/fa';


const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen">
    <div className="navbar w-1/6 bg-green-100 text-white flex flex-col justify-between">        <div className="p-4 flex items-center">
          <img src="/images/Logo.png" alt="Logo" className=" logo h-40 ml-10" />
        </div>
        <ul className="p-2 py-10">
          <li className="flex py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer">
            <FaTachometerAlt className="text-green-500 mr-2" />
            <span className=" dashboard ml-1 capitalize text-xl">DASHBOARD</span>
          </li>
          <li className="flex py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer">
            <FaList className="text-green-500 mr-2" />
            <span className=" list ml-1 capitalize text-xl">SYSTEM LIST</span>
          </li>
          <li className="flex py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer">
            <FaChartBar  className="text-green-500 mr-2" />
            <span className="analysis ml-1 capitalize text-xl">ANALYSIS</span>
          </li>
        </ul>
        <div className="flex-grow"></div>
        <div className="p-4">
        </div>
      </div>
      <div className="flex-grow bg-white">
        <div className="flex justify-end p-4">
        </div>
        <p className="perform text-green-800 font-bold text-4xl ml-[450px]">PERFORMANCE OVERVIEW</p>
        <div className="flex justify-center ml-[-500px] mt-7 pr-[100px]">
        <div className="square1 w-[22%] h-64 bg-[#2CB908]  ml-[590px]">
            <p className="words text-2xl  text-center mt-10">Number Of New Clients</p>
            <p className="numbers text-7xl text-center mt-10">210</p>
          </div>
          <div className="square2  w-[22%] h-64 bg-[#2CB908]  m-4 mt-[-0px] ml-[60px]">
            <p className="words text-2xl text-center mt-10">Total Machines</p>
            <p className="numbers text-7xl text-center mt-10">110</p>
          </div>
          <div className="square3  w-[22%] h-64 bg-[#2CB908]  m-4 mt-[-0px] ml-[50px]">
            <p className=" words text-2xl  text-center mt-10">Number of Active Users</p>
            <p className=" numbers text-7xl text-center mt-10">110</p>
          </div>
</div>
      </div>
      <style>
        {`
          .text-green-500:hover {
            color: white !important;
          }
          .hover\:px-2:hover {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          .hover\:bg-[#2CB908] :hover {
            background-color: #2CB908;
          }
          @media screen and (max-width: 768px) {
            .navbar {
              flex-direction: column;
              width: 40%;
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
              margin-left: 0.5rem; /* Adjust the margin as needed */
            }
            .logo{
              width:150px;
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
          }
          /* Media query for even smaller screens (e.g., mobile devices) */
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
export default DashboardPage;