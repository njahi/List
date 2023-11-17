import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCreateOrder } from "../hooks/useCreateOrder";

export function PopUp3({ show, onClose, id }) {
  const { handleSubmit, register, reset } = useForm();
  const { creatingOrder, isCreatingOrder, error } = useCreateOrder();
  function onSubmit(data) {
    creatingOrder(data, {
      onSettled: () => {
        reset();
      },
    });
  }
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
                style={{ width: "70%", borderRadius: "4px" }}
                {...register("name", { required: true })}
                placeholder='Asset Name'
              />
            </div>
            <div>
              <label>Category</label>
              <input
                style={{ width: "80%", borderRadius: "4px" }}
                {...register("category", { required: true })}
                placeholder='Asset Category'
              />
            </div>
            <div>
              <label>Quantity</label>
              <input
                style={{ width: "80%", borderRadius: "4px" }}
                {...register("quantity", { required: true })}
                placeholder='Asset Quantity'
              />
            </div>
            <div>
              <label>Amount</label>
              <input
                style={{ width: "80%", borderRadius: "4px" }}
                {...register("amount", { required: true })}
                placeholder='Amount'
              />
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "70px" }}>
            <label style={{ marginTop: "6px" }}>Description</label>
            <input
              style={{ width: "80%", borderRadius: "4px" }}
              {...register("description", { required: true })}
              placeholder='description'
            />
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
