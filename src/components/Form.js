import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import "./Form.css";
import { useCreateAsset } from "../hooks/useCreateAsset";
import toast from "react-hot-toast";
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
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <h1
        style={{
          textUnderlinePosition: "under",
          textDecoration: "underline",
        }}>
        Entry Form
      </h1>
      <div>
        <label>Name:</label>
        <input
          {...register("name", { required: true })}
          placeholder='Asset Name'
        />
      </div>
      <div>
        <label>Value:</label>
        <input
          {...register("value", { required: true })}
          placeholder='Value'
        />
      </div>
      <div>
        <label>Profit:</label>
        <input
          {...register("profit", { required: true })}
          placeholder='Profit'
        />
      </div>
      <div>
        <label>Loss:</label>
        <input
          {...register("loss", { required: true })}
          placeholder='Loss'
        />
      </div>
      <div>
        <label>Year:</label>
        <input
          {...register("year", { required: true })}
          placeholder='Year'
        />
      </div>
      <div>
        <label>DateCreated:</label>
        <input
          {...register("dateCreated", { required: true })}
          type='datetime-local'
          value={format(new Date(), "yyyy-MM-dd HH:mm:ss")}
          onChange={(e) => setDateCreated(new Date(e.target.value))}
          placeholder='dateCreated'
          readOnly
        />
      </div>
      <div>
        <label>DateUpdated:</label>
        <input
          {...register("dateUpdated", { required: true })}
          type='datetime-local'
          value={format(new Date(), "yyyy-MM-dd HH:mm:ss")}
          onChange={(e) => setDateUpdated(new Date(e.target.value))}
          placeholder='dateUpdated'
          readOnly
        />
      </div>
      <div>
        <input
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
          placeholder='image'
        />
      </div>
      <div>
        <button
          type='submit'
          disabled={isCreatingAsset}>
          {isCreatingAsset ? "Loading" : "Add Asset"}
        </button>
      </div>
    </form>
  );
}
export default Form;
