import React from "react";
import Dashboard from "../components/Dashboard";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";

export default function home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "lightskyblue",
        }}>
        {/* <Dashboard /> */}

        <div>
          <div
            style={{
              backgroundColor: "grey",
              paddingBottom: "5px",
              width: "84.5rem",
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
          <div
            style={{
              display: "grid",
              justifyContent: "space-evenly",
              gridTemplateColumns: "1fr 1fr",
            }}>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src='life.jpg'
                  alt='home'
                  style={{ height: "350px", width: "450px" }}
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
                marginTop: "150px",
                marginRight: "60px",
              }}>
              <div
                style={{
                  marginLeft: "100px",
                  marginBottom: "300px",
                }}>
                <img
                  src='lay.avif'
                  alt='home'
                  style={{
                    height: "350px",
                    width: "450px",
                  }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "lightcoral",
                  marginBottom: "10px",
                  width: "210px",
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
            <div
              style={{
                marginBottom: "12rem",
                justifyContent: "space-evenly",
                display: "flex",
                flexDirection: "row",
              }}>
              <Card
                style={{
                  width: "20.5rem",
                  height: "100%",
                  backgroundColor: "lightcoral",
                  border: "2px",
                  borderRadius: "25px",
                }}>
                <Card.Img
                  src='track.jpg'
                  alt='track'
                  style={{
                    width: "20.5rem",
                    aspectRatio: "1",
                    alignSelf: "start",
                    borderRadius: "25px",
                    height: "14.1rem",
                  }}
                />
                <Card.Body>
                  <Card.Title>Sales</Card.Title>
                  <Card.Text>
                    Track the sales of your assets by looking at the profits
                    made from the assets owned
                    <div>
                      <Link to='/reports'>See More</Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <Footer
            style={{
              backgroundColor: "grey",
              display: "flex",
              flexDirection: "row",
              margin: "3px",
              marginBottom: "0px",
              height: "15rem",
              borderRadius: "10px",
            }}>
            <div>
              <div></div>
            </div>
          </Footer>
        </div>
      </div>
    </>
  );
}
