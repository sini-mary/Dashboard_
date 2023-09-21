'use client'
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement);

const Graph= () => {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        
          data: [80, 40, 60, 70, 80, 50, 100, 120, 100, 39, 47, 70],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: '#156700',
        
      },
    ],
  });

  return (
    <>
      <div className='w-full lg:h-[50vh] w-[100%] mt-10 p-4 border rounded-lg bg-white '>
        <p className='pb-10'>System Usage</p>
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                title: { display: true, text: 'No. of systems' },
              },
              x: {
                title: { display: true, text: 'Months in a Year' },
              },
            },
          }}
        />
        <style>
          {`
                  @media (max-width: 768px) {
            .w-full {
              width: 190%;
              margin-left:-90px;
              margin-top:690px;
            }
            .lg\:h-[50vh] {
              display: none;
            }
          }
          @media (max-width: 300px) {
            .w-full {
              width: 190%;
              margin-left:-90px;
              margin-top:640px;
            }
          }


          `
          }
        </style>
      </div>
    </>
  );
};

export default Graph;