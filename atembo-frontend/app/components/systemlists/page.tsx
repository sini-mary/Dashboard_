import React from 'react';

const DashboardPage = () => {
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
    <div className="p-4 ml-4">
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: 'green' }}>
        SYSTEM LISTS
      </h1>
      <br />
      <table className="min-w-full rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-200 text-left leading-4 text-green-900 tracking-wider">
              System ID
            </th>
            <th className="px-6 py-3 bg-gray-200 text-left leading-4 text-green-900 tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 bg-gray-200 text-left leading-4 text-green-900 tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {systemList.map((system) => (
            <tr
              key={system.id}
              className="bg-gray-100 hover:bg-gray-200 transition duration-300"
              style={{ borderRadius: '8px', marginBottom: '8px' }} // Add margin-bottom for white space
            >
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                {system.id}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                {system.location}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b border-gray-300 ${
                  system.status === 'Working' ? 'text-green-500' : 'text-red-500'
                }`}
                style={{ borderRadius: '8px', padding: '8px' }} // Add padding here
              >
                {system.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
