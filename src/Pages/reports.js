import React from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LinearChart";
import Statistics from "../components/Statistics";
import Rechart from "../components/Recharts";

function reports() {
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
          <LineChart />
        </div>
        <div>
          <Statistics />
        </div>
      </div>
      <div>
        <Rechart />
      </div>
    </>
  );
}
export default reports;
