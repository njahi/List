import React from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LinearChart";
import Rechart from "../components/Recharts";
function Reports() {
  return (
    <>
      <div className='header'>
        <h1
          className='h1'
          style={{ backgroundColor: "grey", textTransform: "uppercase" }}>
          Analytics and Reports
        </h1>
      </div>
      <div
        style={{
          display: "grid",
          justifyContent: "space-around",
          gridTemplateColumns: "1fr 1fr",
        }}>
        <div>
          <BarChart />
        </div>
        <div>
          <Rechart />
        </div>
      </div>
      <div>
        <LineChart />
      </div>
    </>
  );
}
export default Reports;
