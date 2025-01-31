import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Income",
      data: [1200, 1900, 3000, 5000, 2300, 3400, 4200],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
    },
    {
      label: "Expenses",
      data: [1000, 1500, 2500, 3500, 2000, 3000, 3800],
      borderColor: "rgba(255,99,132,1)",
      backgroundColor: "rgba(255,99,132,0.2)",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};

const ChartCard = ({ title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-4" style={{ height: "250px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartCard;
