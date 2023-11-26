import React, { useState } from "react";
import { PopUp3 } from "../components/PopUp3";
import ProgressBar from "../components/ProgressBar";

function About() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
    console.log(setShow);
  }
  function handleClose() {
    setShow(false);
  }
  return (
    <>
      <div>
        <h1>Make an Order</h1>
      </div>

      <button
        type='primary'
        onClick={handleShow}>
        New Order
      </button>
      <div
        style={{
          marginLeft: "60rem",
          marginBottom: "80px",
        }}>
        <b>
          <h2
            style={{
              textTransform: "uppercase",
              fontFamily: "sans-serif",
              fontSize: "medium",
            }}>
            Your Order List
          </h2>
        </b>
        <ProgressBar />
      </div>

      <div>
        <PopUp3
          onClose={handleClose}
          show={show}
        />
      </div>
    </>
  );
}
export default About;
