import React from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LinearChart";
import Statistics from "../components/Statistics";

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
        className='chart'
        style={{ display: "flex", justifyContent: "space-around" }}>
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
    </>
  );
}
export default reports;
