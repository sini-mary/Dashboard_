// 'use client'
// import "tailwindcss/tailwind.css";
// import React, { useEffect, useState } from 'react';
// import Graph from "../Components/Graph";
// import { FaUserPlus, FaDesktop, FaUser } from 'react-icons/fa';
// import Recents from '../Components/Recents/index';
// // import { getDevices, getUsers } from '../../Utilities/utils';
// import { getDevices, getUsers } from "../Utilities/utils";


// interface UserApiResponse {
//   newClients: number;
//   activeUsers: number;
// }
// interface MachineApiResponse {
//   totalMachines: number;
// }
// const HomePage: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [newClients, setNewClients] = useState<UserApiResponse>();
//   const [totalMachines, setTotalMachines] = useState<MachineApiResponse>();
//   const [activeUsers, setActiveUsers] = useState<UserApiResponse>();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userData = await getUsers();
//         setNewClients(userData.newClients);
//         setActiveUsers(userData.activeUsers);
//         const machineData = await getDevices();
//         setTotalMachines(machineData.totalMachines);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className="flex h-screen bg-white">
//       {/* <Nav /> */}
//       <div className="flex-column ml-[100px] w-[50%]">
//         <p className="xs:ml- text-[#156700] font-bold text-4xl mt-[50px] mb-[-50px] perform ">Overview</p>
//         {loading ? (
//           <div className="flex justify-center items-center h-[200px]">
//             <p className="text-[#156700] font-bold">Loading...</p>
//           </div>
//         ) : (
//           <div className=" flex mt-24  squares">
//             <div className="w-[100%] square1 h-[200px] bg-white rounded-xl smooth-border flex flex-col justify-center items-center shadow-xl border border-gray-300">
//               <FaUserPlus className="text-[#156700] text-3xl mb-2" />
//               <p className="words text-center text-[#156700] font-bold">Number Of New Clients</p>
//               <p className="numbers text-4xl text-center text-[#156700] font-bold">3</p>
//             </div>
//             <div className="w-[100%] square2 h-[200px] bg-white m-4 mt-[-0px] ml-[60px] rounded-xl smooth-border flex flex-col justify-center items-center shadow-xl border border-gray-300">
//               <FaDesktop className="text-[#156700] text-3xl mb-2" />
//               <p className="words text-center text-[#156700] font-bold">Total Machines</p>
//               <p className="numbers text-4xl text-center text-[#156700] font-bold">16</p>
//             </div>
//             <div className="w-[100%] square3 h-[200px] bg-white m-4 mt-[-0px] ml-[50px] rounded-xl smooth-border flex flex-col justify-center items-center shadow-xl border border-gray-300">
//               <FaUser className="text-[#156700] text-3xl mb-2" />
//               <p className="words text-center text-[#156700] font-bold">Number of Active Users</p>
//               <p className="numbers text-4xl text-center text-[#156700] font-bold">16</p>
//             </div>
//           </div>
//         )}
    
//         <div>
//           <Graph />
          
//         </div>
//       </div>
//       <Recents />
      
//       <style>
//         {`
//           .text-green-500:hover {
//             color: white !important;
//           }
//           .hover\:px-2:hover {
//             padding-left: 0.75rem !important;
//             padding-right: 0.75rem !important;
//           }
//           .hover\:bg-[#2CB908] :hover {
//             background-color: #2CB908;
//           }
//           @media (max-width: 768px) {
//             .flex.mt-24 {
//               flex-direction: column;
//               gap:20px;
//               align-items:center;
//             }
//           }
//           @media (max-width: 480px) {
//             .flex.mt-24 {
//               flex-direction: column;
//               gap: 20px;
//               margin-left:0px;
//               align-items: center;
//               font-size:15px;
//             }
//             .perform{
//               margin-left:0px
//             }
//             .square2{
//               margin-left:12px
//             }
//             .square3{
//               margin-left:12px
//             }
//           }
//           @media only screen and (max-width: 280px) and (max-height: 653px) {
//             .flex.mt-24 {
//               margin-left:-40px;
//             }
//             .perform{
//               margin-left:-40px;
//             }
//           }
//           @media only screen and (min-width: 769px) and (max-width: 1000px) {
//             .squares{
//               font-size:7px;
//               width:550px;
//             }
//             .square1{
//               width:70%;
//               height:200px
//             }
//             .square2{
//               width:70%;
//               height:200px
//             }
//             .square3{
//               width:70%;
//               height:200px
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };
// export default HomePage;