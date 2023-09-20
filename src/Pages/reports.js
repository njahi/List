import React from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LinearChart";

function reports() {
  return (
    <>
      <div className="header">
        <h1
          className="h1"
          style={{ backgroundColor: "grey", textTransform: "uppercase" }}>
          Analytics and Reports
        </h1>
      </div>
      <div className="chart" style={{ display: "flex" }}>
        <BarChart style={{}} />
        <LineChart />
      </div>
    </>
  );
}
export default reports;
