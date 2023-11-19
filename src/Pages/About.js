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
          backgroundColor: "green",
          marginBottom: "80px",
        }}>
        <b>
          <p
            style={{
              textTransform: "uppercase",
              fontFamily: "sans-serif",
              fontSize: "medium",
            }}>
            Your Order List
          </p>
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
