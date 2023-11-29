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
    editingAsset(
      { id, data },
      {
        onSettled: () => {
          reset();
          show = false;
        },
      }
    );
    toast.success("asset updated", {
      position: "top-center",
      toastId: id,
    });
  }

  if (isEditingAsset) {
    return <p>Editing...</p>;
  }

  return (
    <Modal
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Assets</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          name='entry_form'
          className='entry'
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit(handleEdit)}>
          <Form.Item>
            <label>Name:</label>
            <input
              style={{ borderRadius: "4px" }}
              {...register("name", { required: true })}
              placeholder='Asset Name'
            />
          </Form.Item>
          <Form.Item>
            <label>Value:</label>
            <input
              style={{ borderRadius: "4px" }}
              {...register("value", { required: true })}
              placeholder='Asset Value'
            />
          </Form.Item>
          <Form.Item>
            <label>Profit:</label>
            <input
              style={{ borderRadius: "4px" }}
              {...register("profit", { required: true })}
              placeholder='Asset Profit'
            />
          </Form.Item>
          <Form.Item>
            <label>Loss:</label>
            <input
              style={{ borderRadius: "4px" }}
              {...register("loss", { required: true })}
              placeholder='Asset Loss'
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
          variant='secondary'
          onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
