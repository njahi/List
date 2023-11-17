import React from "react";
import { Modal } from "react-bootstrap";

export function PopUp3({ show, onClose, id }) {
  return (
    <Modal
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Assets</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <button
          variant='secondary'
          onClick={onClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
