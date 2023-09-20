'use client'
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend,} from 'chart.js';



ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data: [80, 40, 60, 70, 80, 50, 100, 120, 100, 39, 47, 70],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: '#156700',
        },
      ],
    });
  }, []);

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[50vh] w-[45%] m-auto p-4 border rounded-lg bg-white mt-[450px] ml-[-1400px]'>
      <p className='fixed'>System Usage</p>
 <Bar data={chartData} options={{ scales: { y: { title: { display: true, text: 'No. of  systems' } } }, x: { title: { display: true, text: 'Months in a Year' } } }} />
      </div>
    </>
  );
};

export default BarChart;