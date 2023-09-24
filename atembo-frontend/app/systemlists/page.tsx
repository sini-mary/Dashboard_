import React from 'react';
import Sidebar from '../Sidebar';

const SystemlistsPage = () => {
  const systemList = [
    { id: '001', location: 'Kisumu', status: 'Working' },
    { id: '002', location: 'Kariok', status: 'Not working' },
    { id: '003', location: 'Nakuru', status: 'Working' },
    { id: '004', location: 'Karen', status: 'Working' },
    { id: '005', location: 'Kikuyu', status: 'Not working' },
    { id: '006', location: 'BabaDo', status: 'Working' },
    { id: '007', location: 'Kawang', status: 'Working' },
    { id: '008', location: 'AkiraC', status: 'Not working' },
    { id: '009', location: 'Kakame', status: 'Working' },
    { id: '010', location: 'Mombas', status: 'Working' },
  ];

  return (
    <div className="p-4 text-center pt-6 mt-20"> 
      <h1 className="text-4xl text-green font-bold mb-4">
        SYSTEM LISTS
      </h1>
      <div className="w-full flex justify-center">
        <table className="w- table-auto rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gray">
              <th className="px-6 py-3 pl-50 text-left text-lg text-green tracking-wider">
                System ID
              </th>
              <th className="px-6 py-3 pl-60 text-left text-lg text-green tracking-wider">
                Location
              </th>
              <th className="px-6 pl-80 py-3 text-left text-lg text-green tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {systemList.map((system) => (
              <tr
                key={system.id}
                className="bg-gray-100 hover:bg-gray transition duration-300"
              >
                <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-50">
                  {system.id}
                </td>
                <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-60">
                  {system.location}
                </td>
                <td
                  className={`px-6 py-4 border-b border-gray text-left pr-6 pl-80 ${
                    system.status === 'Working' ? 'text-green' : 'text-red'
                  }`}
                >
                  {system.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemlistsPage;
