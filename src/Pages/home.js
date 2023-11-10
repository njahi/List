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
                  height: "280px",
                }}>
                <p
                  style={{
                    font: "inherit",
                    fontFamily: "sans-serif",
                    fontStyle: "oblique",
                  }}>
                  Weka is an all in one sytem that intergrates many
                  functionalities to secure our assets and also track sales of
                  the assets{" "}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                marginLeft: "70px",
              }}>
              <div
                style={{
                  justifyContent: "space-between",
                  marginLeft: "100px",
                  marginBottom: "300px",
                }}>
                <img
                  src='lay.avif'
                  alt='home'
                  style={{
                    height: "250px",
                    width: "380px",
                  }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "lightcoral",
                  marginBottom: "10px",
                  width: "140px",
                  height: "280px",
                }}>
                <p
                  style={{
                    font: "inherit",
                    fontFamily: "sans-serif",
                    fontStyle: "oblique",
                  }}>
                  Explore your various assets and be aware of its standing
                  value.Our pride is a safe Asset
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default home;
