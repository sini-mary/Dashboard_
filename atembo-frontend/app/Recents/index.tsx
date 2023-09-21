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
     <div className=" body bg-green-100 p-4 ml-[50px] w-[450px] h-[42vh] mt-[130px] rounded-xl flex-column">

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
<div className=" bottom flex gap-5 mt-10">
<div className=" s1 bg-[#B4FCA2] w-[57%] h-[20vh]  rounded-xl">
        <p className="b text-[#156700] font-bold ml-[35px] pt-10 text-xl ">Total Developer</p>
        <p className="num text-[#156700] ml-[110px] mt-5 text-2xl">5</p>
      </div>
      <div className="s2 bg-[#D9D9D9] w-[45%] h-[20vh] rounded-xl">
        <p className="b text-[#156700] font-bold ml-[35px] pt-10 text-xl ">Last Visit</p>
        <p className="num2 text-[#156700] ml-[50px] mt-5">2/11/2023</p>
        {/* <i className="ml-[100px] mt-[20px]">By Rose</i> */}

      </div>
      </div>
</div>
<style>{`
@media only screen and (max-width: 768px){
  .body{
    margin-left:-280px;
    margin-top:860px;
    font-size: 14px;
    width: 350px;
    height: 50vh;
   
  }

  .text-xl {
    font-size: 16px;
    margin-left:100px;
  }

  .text-2xl {
    font-size: 18px;
  }

  table {
    font-size: 12px;
  }

  .px-6 {
    padding-left: 4px;
    padding-right: 4px;
  }

  .py-3 {
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .s1{
    margin-top:100px;
  }
  .s2{
    margin-top:100px;

  }
  .b{
    margin-left:20px
  }
  .num{
    margin-left:70px

  }
  .num2{
    margin-left:30px

  }
}
@media screen and (min-width: 280px) and (max-height: 653px) {
  .body {
    margin-left:-225px;
    margin-top:860px;
    font-size: 14px;
    width: 250px;
    height: 55vh;
   
  }

  .text-xl {
    font-size: 16px;
    margin-left:80px;
  }

  .text-2xl {
    font-size: 18px;
  }

  table {
    font-size: 12px;
    width: 100px;
  }

  .px-6 {
    padding-left: 4px;
    padding-right: 4px;
  }

  .py-3 {
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .s1{
    margin-top:10px;
  }
  .s2{
    margin-top:10px;


  }
  .b{
    margin-top:-20px;
    margin-left:15px;
    font-size:15px;

    
  }
  .num{
    margin-left:40px;
    margin-top:0px;

  }
  .num2{
    margin-left:15px;
    margin-top:15px;

  }
}

@media only screen and (min-width: 769px) and (max-width: 1280px) {
  .body {
    font-size: 14px;
    width: 350px;
    height: 52vh;
    margin-left: 30px;
    margin-top: 80px;
  }

  .text-xl {
    font-size: 18px;
  }

  .text-2xl {
    font-size: 20px;
  }
  .num{
    margin-left:40px;
    margin-top:0px;

  }
  .num2{
    margin-left:35px;
    margin-top:15px;

  }
}

@media only screen and (max-width: 1024px) and (max-height: 600px) {
.bottom{
  font-size:10px
}

}
`}
</style>


        </div>
      )


}


export default Recents;