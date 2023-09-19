"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

ChartJS.register(CategoryScale, /* ... */)
const WeeklyData = () => {
  return (
    <div className="w-3/4 mx-auto p-4" >
        <h2 className="text-[#156700] font-['Ubuntu'] text-[2.1875rem] font-bold leading-[normal] font-bold text-4xl mb-4 mx-auto text-center">SYSTEM PERFORMANCE</h2>
        <p className="mx-auto text-center">View all information and check live status of the Urban Verde System</p>
        <br></br>
        <h2 className="font-bold">System  ID 2234</h2>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="flex-shrink-0 w-[10.9375rem] h-[3.625rem] text-black font-['Ubuntu'] font-medium leading-[normal]">Temperature</h2>


     
        <Line
        data={{
          labels: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
          ],
          datasets: [
            {
              data: [0, 3, 11, 27, 10, 13, 18, 19, 14, 29, 28, 32],
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Temperature in degrees",
              },
            },
            x: {
              title: {
                display: true,
                text: "Time in hours",
              },
            },
          },
        }}
      />

<h2 className="font-bold">Water Flow Rate</h2>
      <br></br>
      <Line
        data={{
          labels: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
          ],
          datasets: [
            {
              data: [0, 3, 11, 27, 10, 13, 18, 19, 14, 29, 28, 32],
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Temperature in degrees",
              },
            },
            x: {
              title: {
                display: true,
                text: "Time in hours",
              },
            },
          },
        }}
      />

    </div>



  );
};
export default WeeklyData;
