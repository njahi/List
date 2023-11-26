import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCreateOrder } from "../hooks/useCreateOrder";
import toast from "react-hot-toast";

export function PopUp3({ show, onClose, id }) {
  const { handleSubmit, register, reset } = useForm();
  const { creatingOrder, isCreatingOrder, error } = useCreateOrder();
  function onSubmit(data) {
    creatingOrder(data, {
      onSettled: () => {
        reset();
      },
    });
    if (error) {
      toast.error("something went wrong");
    } else {
      toast.success("Order added ");
    }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <div>
              <label>Asset Name</label>
              <input
                style={{ width: "70%", borderRadius: "4px" }}
                {...register("orderName", { required: true })}
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
            <div>
              <label>Supplier name</label>
              <input
                style={{ width: "80%", borderRadius: "4px" }}
                {...register("supplier", { required: true })}
                placeholder='Supplier'
              />
            </div>
            <div>
              <label>Supplier Email</label>
              <input
                style={{ width: "80%", borderRadius: "4px" }}
                {...register("email", { required: true })}
                placeholder='Amount'
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                style={{ width: "80%", borderRadius: "4px" }}
                {...register("number", { required: true })}
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
          <div>
            <button
              type='primary'
              htmlType='submit'
              disabled={isCreatingOrder}>
              {isCreatingOrder ? "Loading" : "Add Order"}
            </button>
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
