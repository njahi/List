import React from "react";
import { Modal } from "react-bootstrap";
import { useEditAsset } from "../hooks/useEditAsset";
import { Form, Button } from "antd";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function PopUp2({ show, onClose, id }) {
  const { handleSubmit, register, reset } = useForm();
  const { editingAsset, isEditingAsset, error } = useEditAsset();
  function handleEdit(data) {
    editingAsset(id, data.name, {
      onSettled: () => {
        reset();
      },
    });
    toast.success("asset updated", {
      position: "top-center",
      toastId: id,
    });
  }

  if (isEditingAsset) {
    return <p>Editing...</p>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <Modal
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Assets</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onFinish={handleSubmit(handleEdit)}>
          <Form.Item>
            <label>Name:</label>
            <input
              {...register("name", { required: true })}
              placeholder='Asset Name'
            />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'>
              save changes
            </Button>
          </Form.Item>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={isEditingAsset}
          variant='secondary'
          onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
