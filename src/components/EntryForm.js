import { useForm } from "react-hook-form";
import "./EntryForm.css";
import { Form, Button } from "antd";
import { useCreateAsset } from "../hooks/useCreateAsset";
function EntryForm({ onSubmit, currUser }) {
  const { register, handleSubmit, reset } = useForm();
  const { creatingAsset, isCreatingAsset } = useCreateAsset();

  function onFinish(data) {
    creatingAsset(
      { ...data, isSold: false, image: data.image[0] },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <Form
      name='entry_form'
      className='entry'
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit(onFinish)}>
      <h1
        style={{
          textUnderlinePosition: "under",
          textDecoration: "underline",
        }}>
        Entry Form
      </h1>

      <Form.Item>
        <label>Name:</label>
        <input
          {...register("name", { required: true })}
          placeholder='Asset Name'
        />
      </Form.Item>
      <Form.Item>
        <label>Value:</label>
        <input
          {...register("value", { required: true })}
          placeholder='Value'
        />
      </Form.Item>

      <Form.Item>
        <label>Year:</label>
        <input
          {...register("year", { required: true })}
          placeholder='Year'
        />
      </Form.Item>

      <Form.Item>
        <input
          {...register("image", { required: true })}
          type='file'
          accept='image/*'
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
