import { useAssets } from "../hooks/useAssets";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import "./LinearChart.css";
ChartJS.register(...registerables);

function LineChart() {
  // const [assets, setAssets] = useState([]);
  // const fetchAssets = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/asset");
  //     const data = await response.json();
  //     setAssets(data);
  //   } catch (error) {
  //     console.error("Error fetching assets:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAssets();
  // }, []);
  const { assets } = useAssets();

  const Assets = {
    labels: assets.map((data) => data.year),
    datasets: [
      {
        label: "Asset profit",
        data: assets.map((data) => data.profit),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Asset Loss",
        data: assets.map((data) => data.loss),
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
    <div className='Line-container'>
      <Line
        className='Line'
        data={Assets}
        options={chartOptions}
      />
    </div>
  );
}

export default LineChart;
