import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { AssetData } from "../Data";
import "./BarChart.css";
ChartJS.register(...registerables);
function BarChart({ style }) {
  const assetData = {
    labels: AssetData.map((data) => data.year),
    datasets: [
      {
        label: "Asset profit",
        data: AssetData.map((data) => data.assetProfit),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Asset Loss",
        data: AssetData.map((data) => data.assetLoss),
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "category", // Use "category" instead of specifying x-axis scale
        position: "bottom",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="Bar-container">
      <Bar
        className="Bar"
        data={assetData}
        options={chartOptions}
        style={style}
      />
    </div>
  );
}

export default BarChart;
