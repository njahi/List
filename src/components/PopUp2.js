import React from "react";
import { Modal, Button } from "react-bootstrap";

export function PopUp2({ show, onClose, id }) {
  return (
    <Modal
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>hey</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='secondary'
          onClick={onClose}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
