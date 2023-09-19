import "tailwindcss/tailwind.css";
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-white-500">
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
<div><h1 className="ml-[300px] text-2xl text-black-500">System usage</h1>
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

            }
            .numbers{
              font-size:20px;
              margin-top:-10px;

            }
            .square2{
              margin-top:140px;
              width:200px;
              height:100px;
            }
            .square3{
              margin-top:265px;
              width:200px;
              height:100px;
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

export default HomePage;