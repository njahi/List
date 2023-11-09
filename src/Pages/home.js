import React from "react";
import Dashboard from "../components/Dashboard";

function home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

          backgroundColor: "lightskyblue",
        }}>
        <Dashboard />
        <div>
          <div
            style={{
              backgroundColor: "grey",
              paddingBottom: "5px",
              width: "75.8rem",
            }}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontFamily: "sans-serif",
                textAlign: "center",
                textTransform: "uppercase",
              }}>
              👨🏿‍💻 Welcome to your World 🦦
            </h1>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <img
                src='life.jpg'
                alt='home'
                style={{ height: "250px", width: "380px" }}
              />
            </div>
            <div
              style={{
                backgroundColor: "lightcoral",
                marginBottom: "250px",
                width: "140px",
              }}>
              <p
                style={{
                  font: "inherit",
                  fontFamily: "sans-serif",
                  fontStyle: "oblique",
                }}>
                Weka is an all in one sytem that intergrates many
                functionalities to secure our assets and also track sales of the
                assets{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default home;
