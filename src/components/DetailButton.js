import { useState } from "react";
import { Button } from "react-bootstrap";
import { PopUp } from "./PopUp";

export default function DetailButton({ id }) {
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
        Details
      </Button>
      <PopUp
        onClose={handleClose}
        show={show}
        id={id}
      />
    </>
  );
}
