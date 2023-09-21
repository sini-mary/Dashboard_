'use client'
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from 'react';
import Graph from '../Graph';
import { FaUserPlus, FaDesktop, FaUser } from 'react-icons/fa';
import Recents from '../Recents/index';
import { getDevices, getUsers } from '../../Utilities/utils';



interface UserApiResponse {
  newClients: number;
  activeUsers: number;
}

interface MachineApiResponse {
  totalMachines: number;
}

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [newClients, setNewClients] = useState<UserApiResponse>();
  const [totalMachines, setTotalMachines] = useState<MachineApiResponse>();
  const [activeUsers, setActiveUsers] = useState<UserApiResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUsers();
        setNewClients(userData.newClients);
        setActiveUsers(userData.activeUsers);

        const machineData = await getDevices();
        setTotalMachines(machineData.totalMachines);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen bg-white">
      {/* <Nav /> */}

      <div className="flex-column ml-[100px] w-[50%]">
        <p className="xs:ml- text-[#156700] font-bold text-4xl mt-[50px] mb-[-50px] perform ">Overview</p>
        {loading ? (
          <div className="flex justify-center items-center h-[200px]">
            <p className="text-[#156700] font-bold">Loading...</p>
          </div>
        ) : (
          <div className="xs:flex-col  xs:ml-[-20px] flex mt-24  squares">
            <div className="w-[100%] square1 h-[200px] bg-white rounded-xl smooth-border flex flex-col justify-center items-center shadow-xl border border-gray-300">
              <FaUserPlus className="text-[#156700] text-3xl mb-2" />
              <p className="words text-center text-[#156700] font-bold">Number Of New Clients</p>
              <p className="numbers text-4xl text-center text-[#156700] font-bold">3</p>
            </div>
            <div className="sm-ml-20px  xs:ml-[-20px] w-[100%] square2 h-[200px] bg-white m-4 mt-[-0px] ml-[60px] rounded-xl smooth-border flex flex-col justify-center items-center shadow-xl border border-gray-300">
              <FaDesktop className="text-[#156700] text-3xl mb-2" />
              <p className="words text-center text-[#156700] font-bold">Total Machines</p>
              <p className="numbers text-4xl text-center text-[#156700] font-bold">16</p>
            </div>
            <div className="w-[100%] square3 h-[200px] bg-white m-4 mt-[-0px] ml-[50px] rounded-xl smooth-border flex flex-col justify-center items-center shadow-xl border border-gray-300">
              <FaUser className="text-[#156700] text-3xl mb-2" />
              <p className="words text-center text-[#156700] font-bold">Number of Active Users</p>
              <p className="numbers text-4xl text-center text-[#156700] font-bold">16</p>
            </div>
          </div>
        )}

        <div>
          <Graph />
        </div>
      </div>
      <Recents />
      
    </div>
  );
};

export default HomePage;