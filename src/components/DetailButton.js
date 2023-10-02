import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function DetailButton() {
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

      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
