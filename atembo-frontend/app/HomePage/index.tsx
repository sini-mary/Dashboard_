import "tailwindcss/tailwind.css";
import React from 'react';
import Graph from '../Graph';
import { FaChartBar, FaList, FaTachometerAlt ,FaUserPlus, FaDesktop, FaUser } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const systems = [
    { id: 'hdef533', status: 'Working' },
    { id: 's2w42se', status: 'Failing' },
    { id: 'hf4u333', status: 'Working' },
    { id: 'hf4u333', status: 'Working' },
    { id: 'hf4u333', status: 'Working' },
    { id: 'hf4u333', status: 'Working' },
    { id: 'hf4u333', status: 'Working' },
    { id: 'hf4u333', status: 'Working' },
    { id: 'hf4u333', status: 'Working' },
    { id: 'hf4u333', status: 'Working' },

  ];
  

  return (
    <div className="flex h-screen bg-white">
      <div className="navbar w-1/6 bg-green-100 text-white flex flex-col justify-between">
        <div className="p-4 flex items-center">
          <img src="/images/Logo.png" alt="Logo" className="logo h-40 ml-10" />
        </div>
        <ul className="p-2 py-10">
          <li className="flex py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer">
            <FaTachometerAlt className="text-green-500 mr-2 mt-1" />
            <span className="dashboard ml-1 capitalize text-xl">DASHBOARD</span>
          </li>
          <li className="flex py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer">
            <FaList className="text-green-500 mr-2 mt-1" />
            <span className="list ml-1 capitalize text-xl">SYSTEM LIST</span>
          </li>
        </ul>
        <div className="flex-grow"></div>
        <div className="p-4"></div>
      </div>
      
      <div className="ml-[100px]">
        <p className="perform text-[#156700] font-bold text-4xl mt-[50px] mb-[-50px]">Overview</p>
        <div className="flex justify-center mt-24 pr-[100px]">
          <div className="square1 w-[20%] h-[200px] bg-[#2CB908] ml-[-400px] rounded-lg flex flex-col justify-center items-center">
            <FaUserPlus className="text-white text-3xl mb-2" />
            <p className="words text-center text-white font-bold">Number Of New Clients</p>
            <p className="numbers text-4xl text-center text-white font-bold">210</p>
          </div>
          <div className="square2 w-[20%] h-[200px] bg-[#2CB908] m-4 mt-[-0px] ml-[60px] rounded-lg flex flex-col justify-center items-center">
            <FaDesktop className="text-white text-3xl mb-2" />
            <p className="words text-center text-white font-bold">Total Machines</p>
            <p className="numbers text-4xl text-center text-white font-bold">110</p>
          </div>
          <div className="square3 w-[20%] h-[200px] bg-[#2CB908] m-4 mt-[-0px] ml-[50px] rounded-lg flex flex-col justify-center items-center">
            <FaUser className="text-white text-3xl mb-2" />
            <p className="words text-center text-white font-bold">Number of Active Users</p>
            <p className="numbers text-4xl text-center text-white font-bold">110</p>
          </div>
        </div>

         <div/>

              <div className="bg-green-100 p-4 ml-[950px] w-[450px] h-[70vh] mt-[-220px]">

            <table className="min-w-full">
            <thead>
              <legend className="ml-[140px] text-xl font-bold">Recent devices</legend>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-green-900 tracking-wider">
                  System ID
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-green-900 tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {systems.map((system) => (
                <tr
                  key={system.id}
                  className="bg-gray-100 hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    {system.id}
                  </td>
                  <td className={`px-6 py-4 whitespace-no-wrap border-b border-gray-300 ${system.status === 'Working' ? 'text-green-500' : 'text-red-500'}`}>
                    {system.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

      </div>


</div>
<Graph />

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
          
          @media screen and (min-width: 769px) {
            .navbar w-1/6{
              display: none;

            }
            }

          
          
       
          

          
        `}
      </style>
    </div>
  );
};

export default HomePage;