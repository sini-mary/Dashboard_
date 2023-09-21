import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import '../weeklyData/css/styles.css';      

import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

enum TimeRange {
  Days = "days",
  Weeks = "weeks",
  Months = "months",
}

const MyLineChart = () => {
  const [timeRange, setTimeRange] = useState("days"); 

  const dataOptions = {
    days: {
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      datasets: [
        {
          data: [0, 3, 11, 27, 10, 13, 18, 19, 14, 29, 28, 32],
          label: "Temperature",
          backgroundColor: "red",
        },
        {
          data: [0, 5, 13, 2, 15, 10, 12, 19, 14, 30, 28, 32],
          label: "Water Flow Rate",
          backgroundColor: "blue",
        },

      ],
    },
    weeks: {
      labels: [      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",],
    
      datasets: [
        {
          data: [15, 10, 22,15, 14,  17,32],
          label:"Temperature",
          backgroundColor: "purple",
        },

        {
          data: [13, 22, 15, 10, 22, 24, 28],
          label: "Water Flow Rate",
          backgroundColor: "blue",
        },
      ],
        },
    months: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: [0, 10, 16, 5, 10, 20, 28, 19, 7, 22, 18, 34],
          label:"Temperature",
          backgroundColor: "purple",
        },

        {
          data: [0, 6, 20, 2, 15, 19, 17, 19, 10, 13, 28, 30],
          label: "Water Flow Rate",
          backgroundColor: "blue",
        },
      ],
    },
  };

  const handleTimeRangeChange = (selectedRange:string) => {
    setTimeRange(selectedRange);
  };

  const chartData = dataOptions[timeRange as TimeRange];
  

  return (
    <div className="w-3/4 mx-auto p-4">
      
      <h2 className="text-green-900 font-bold text-4xl mb-4 mx-auto text-center">SYSTEM PERFORMANCE</h2>
      <p className="mx-auto text-center">View all information and check live status of the Urban Verde System</p>
      <br></br>
      <h2 className="font-bold">System ID 2233</h2>
      <br></br>
      <div>
        <label className="flex justify-end">
          Select Time Range:
          <select value={timeRange} onChange={(e) => handleTimeRangeChange(e.target.value)}>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </label>
      </div>
      <br></br>

      <h2 className="font-bold">Temperature</h2>
      <br></br>
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Temperature in degrees and Water Flow Rate",
              },
            },
            x: {
              title: {
                display: true,
                text: "Time",
              },
            },
          },
        }}
      />

      <h2 className="font-bold">Water Flow Rate</h2>
      <br></br>
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Water flowrate",
              },
            },
            x: {
              title: {
                display: true,
                text: "Days ,",
              },
            },
          },
        }}
      />







    </div>
  );
};

export default MyLineChart;
