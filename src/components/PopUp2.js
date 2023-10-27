import React from "react";
import { Modal } from "react-bootstrap";
import { useEditAsset } from "../hooks/useEditAsset";
import { Form, Input, InputNumber, Button } from "antd";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function PopUp2({ show, onClose, id }) {
  const { handleSubmit } = useForm();
  const { editingAsset, isEditingAsset, error } = useEditAsset();
  function handleEdit() {
    editingAsset(id);
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
          <Form.Item
            name='name'
            label='Asset Name'
            rules={[
              { required: true, message: "Please enter the asset name" },
            ]}>
            <Input placeholder='Asset Name' />
          </Form.Item>
          <Form.Item
            name='value'
            label='Asset Value'
            rules={[
              { required: true, message: "Please enter the asset value" },
            ]}>
            <InputNumber
              style={{ width: "100%" }}
              placeholder='Asset Value'
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
