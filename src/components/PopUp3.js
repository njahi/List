import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function PopUp3({ show, onClose, id }) {
  const { handleSubmit, register, reset } = useForm();
  return (
    <Modal
      size={25}
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Assets</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <label>Asset Name</label>
              <input
                style={{ width: "70%" }}
                {...register("name", { required: true })}
                placeholder='Asset Name'
              />
            </div>
            <div>
              <label>Category</label>
              <input
                style={{ width: "80%" }}
                {...register("category", { required: true })}
                placeholder='Asset Category'
              />
            </div>
            <div>
              <label>Quantity</label>
              <input
                style={{ width: "80%" }}
                {...register("quantity", { required: true })}
                placeholder='Asset Quantity'
              />
            </div>
            <div>
              <label>Amount</label>
              <input
                style={{ width: "80%" }}
                {...register("amount", { required: true })}
                placeholder='Amount'
              />
            </div>
          </div>
        </form>
      </Modal.Body>
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
