import React from "react";
import { Modal } from "react-bootstrap";
import { Form, Input, InputNumber, Button } from "antd";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function PopUp2({ show, onClose, id }) {
  const { handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`/api/asset/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response) {
        toast.error("could not update");
      } else {
        toast.success("Updated succesfully");
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <Modal
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Assets</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onFinish={handleSubmit(onSubmit)}>
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
