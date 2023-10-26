import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { PopUp2 } from "./PopUp2";

export default function EditButton({ id }) {
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
      <Button
        variant='primary'
        onClick={handleShow}>
        Edit
      </Button>
      <PopUp2
        onClose={handleClose}
        show={show}
        id={id}
      />
    </>
  );
}
