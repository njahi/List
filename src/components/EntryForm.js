import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import "./EntryForm.css";
import { Form, Button, Input } from "antd";
import { useCreateAsset } from "../hooks/useCreateAsset";
import toast from "react-hot-toast";
function EntryForm({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();
  const { creatingAsset, isCreatingAsset, error } = useCreateAsset();
  const [dateCreated, setDateCreated] = useState(new Date());
  const [dateUpdated, setDateUpdated] = useState(new Date());
  const [imageUrl, setImageUrl] = useState("");

  function onSubmitForm(data) {
    const formattedDateCreated = format(dateCreated, "yyyy-MM-dd'T'HH:mm:ss");
    const formattedDateUpdated = format(dateUpdated, "yyyy-MM-dd'T'HH:mm:ss");

    const newData = {
      ...data,
      dateCreated: formattedDateCreated,
      dateUpdated: formattedDateUpdated,
      imageUrl: imageUrl,
    };

    creatingAsset(newData, {
      onSettled: () => {
        reset();
      },
    });
    if (error) {
      toast.error("something went wrong");
    } else {
      toast.success("Asset added ");
    }
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <Form
      name='entry_form'
      className='entry'
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit(onSubmitForm)}>
      <h1
        style={{
          textUnderlinePosition: "under",
          textDecoration: "underline",
        }}>
        Entry Form
      </h1>

      <Form.Item>
        <label>Name:</label>
        <Input
          {...register("name", { required: true })}
          placeholder='Asset Name'
        />
      </Form.Item>
      <Form.Item>
        <label>Value:</label>
        <Input
          {...register("value", { required: true })}
          placeholder='Value'
        />
      </Form.Item>
      <Form.Item>
        <label>Profit:</label>
        <Input
          {...register("profit", { required: true })}
          placeholder='Profit'
        />
      </Form.Item>
      <Form.Item>
        <label>Loss:</label>
        <Input
          {...register("loss", { required: true })}
          placeholder='Loss'
        />
      </Form.Item>
      <Form.Item>
        <label>Year:</label>
        <Input
          {...register("year", { required: true })}
          placeholder='Year'
        />
      </Form.Item>
      <Form.Item>
        <label>DateCreated:</label>
        <Input
          {...register("dateCreated", { required: true })}
          type='datetime-local'
          value={format(new Date(), "yyyy-MM-dd HH:mm:ss")}
          onChange={(e) => setDateCreated(new Date(e.target.value))}
          placeholder='dateCreated'
          readOnly
        />
      </Form.Item>
      <Form.Item>
        <label>DateUpdated:</label>
        <Input
          {...register("dateUpdated", { required: true })}
          type='datetime-local'
          value={format(new Date(), "yyyy-MM-dd HH:mm:ss")}
          onChange={(e) => setDateUpdated(new Date(e.target.value))}
          placeholder='dateUpdated'
          readOnly
        />
      </Form.Item>
      <Form.Item>
        <Input
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
          placeholder='image'
        />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          disabled={isCreatingAsset}>
          {isCreatingAsset ? "Loading" : "Add Asset"}
        </Button>
      </Form.Item>
    </Form>
  );
}
export default EntryForm;
