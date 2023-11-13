import React from "react";
import Rechart from "../components/Recharts";

function service() {
  return (
    <>
      <div style={{ backgroundColor: "grey" }}>
        <div>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "2.5rem",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
            We offer various services
          </h1>
        </div>
      </div>
      <div>
        <p>Contact Supplier</p>
        <Rechart />
      </div>
    </>
  );
}
export default service;
