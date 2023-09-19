import "tailwindcss/tailwind.css";
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-white-500">
        <p className="perform text-green-800 font-bold text-4xl ml-[500px] w-[100%]">PERFORMANCE OVERVIEW</p>   
        <div className="flex justify-center ml-[-2330px] mt-[100px] pr-[100px]">
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
  );
};

export default HomePage;