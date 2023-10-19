import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import "./Form.css";
import { useCreateAsset } from "../hooks/useCreateAsset";
function Form({ onSubmit }) {
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
      console.log("something went wrong");
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
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <label>Name:</label>
        <input
          {...register("name", { required: true })}
          placeholder='Asset Name'
        />
      </div>
      <input
        {...register("value", { required: true })}
        placeholder='Value'
      />
      <input
        {...register("profit", { required: true })}
        placeholder='Profit'
      />
      <input
        {...register("loss", { required: true })}
        placeholder='Loss'
      />
      <input
        {...register("year", { required: true })}
        placeholder='Year'
      />
      <input
        {...register("dateCreated", { required: true })}
        type='datetime-local'
        value={format(new Date(), "yyyy-MM-dd HH:mm:ss")}
        onChange={(e) => setDateCreated(new Date(e.target.value))}
        placeholder='dateCreated'
        readOnly
      />
      <input
        {...register("dateUpdated", { required: true })}
        type='datetime-local'
        value={format(new Date(), "yyyy-MM-dd HH:mm:ss")}
        onChange={(e) => setDateUpdated(new Date(e.target.value))}
        placeholder='dateUpdated'
        readOnly
      />
      <input
        type='file'
        accept='image/*'
        onChange={handleImageUpload}
        placeholder='image'
      />
      <button
        type='submit'
        disabled={isCreatingAsset}>
        {isCreatingAsset ? "Loading" : "Add Asset"}
      </button>
    </form>
  );
}
export default Form;
