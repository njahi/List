import React from "react";
import Dashboard from "../components/Dashboard";

function home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "100px",
        }}>
        <Dashboard />
        <div>
          <div
            style={{
              fontSize: "large",
              fontFamily: "sans-serif",
              backgroundColor: "grey",
              paddingBottom: "5px",
              borderRadius: "0.9rem",
              width: "75.8rem",
            }}>
            <h1>Welcome to your World</h1>
          </div>
          <img
            src='Furniture.jpg'
            alt='home'
            style={{ height: "35.3rem", width: "75.8rem" }}
          />
        </div>
      </div>
    </>
  );
}
export default home;
