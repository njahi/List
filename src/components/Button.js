import { useState } from "react";
import { Modal } from "react-bootstrap";
import StarRating from "./StarRating";

export default function Button() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
    function handleClose() {
      setShow(false);
    }
  }
  return (
    <Button
      variant='primary'
      onclick={handleShow}>
      Details
    </Button>
  );
}
