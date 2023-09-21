import React from 'react';

const SystemlistsPage = () => {
  const systemList = [
    { id: '001', location: 'Kisumu', status: 'Working' },
    { id: '002', location: 'Kariokor', status: 'Not working' },
    { id: '003', location: 'Nakuru', status: 'Working' },
    { id: '004', location: 'Karen', status: 'Working' },
    { id: '005', location: 'Kikuyu', status: 'Not working' },
    { id: '006', location: 'BabaDogo', status: 'Working' },
    { id: '007', location: 'Kawangware', status: 'Working' },
    { id: '008', location: 'AkiraChix', status: 'Not working' },
    { id: '009', location: 'Kakamega', status: 'Working' },
    { id: '010', location: 'Mombasa', status: 'Working' },
  ];

  return (
    <div className="p-4 ml-4 text-center">
      <h1 className="text-4xl text-custom-green font-bold mb-4">
        SYSTEM LISTS
      </h1>
      <table className="w-full table-auto rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-center leading-4 text-green-900 tracking-wider flex">
              <div className="w-1/3">System ID</div>
              <div className="w-1/3">Location</div>
              <div className="w-1/3">Status</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {systemList.map((system) => (
            <tr
              key={system.id}
              className="bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <td className="px-6 py-4 border-b border-gray-300 flex">
                <div className="w-1/3">{system.id}</div>
                <div className="w-1/3">{system.location}</div>
                <div className={`w-1/3 ${
                  system.status === 'Working' ? 'text-green-500' : 'text-custom-red'
                }`}>{system.status}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SystemlistsPage;
