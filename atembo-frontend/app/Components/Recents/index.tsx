import "tailwindcss/tailwind.css";
import React from 'react';



const Recents: React.FC = () => {
    const systems = [
        { id: 'hdef533', status: 'Working' },
        { id: 's2w42se', status: 'Failing' },
        { id: 'hf4u333', status: 'Working' },
        { id: 'hf4u333', status: 'Working' },
        { id: 'hf4u333', status: 'Working' },
    
    
      ];
      return(
<div>
     <div className="bg-green-100 ml-[50px] w-[450px] h-[42vh] mt-[130px] rounded-xl flex-column">
<div className="p-3">
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
      className="bg-gray-100 hover:bg-gray-200 ">
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
<div className="flex gap-5 mt-10 bottom ">
<div className="bg-[#B4FCA2] w-[50%] h-[20vh]  rounded-xl  s1 ">
        <p className="b text-[#156700] font-bold ml-[35px] pt-10 text-xl ">Total Developer</p>
        <p className="num text-[#156700] ml-[100px] mt-5 text-2xl">5</p>
      </div>
      <div className="bg-[#D9D9D9] w-[45%] h-[20vh] rounded-xl s2 ">
        <p className="text-[#156700] font-bold ml-[45px] pt-10 text-xl b">Last Visit</p>
        <p className="num2 text-[#156700] ml-[50px] mt-5">2/11/2023</p>

      </div>
      </div>
</div>


        </div>
      )


}


export default Recents;