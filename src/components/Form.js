import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import "./Form.css";
function Form({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();
  const [dateCreated, setDateCreated] = useState(new Date());
  const [dateUpdated, setDateUpdated] = useState(new Date());

  const handleFormSubmit = async (data) => {
    try {
      const formattedDateCreated = format(dateCreated, "yyyy-MM-dd'T'HH:mm:ss");
      const formattedDateUpdated = format(dateUpdated, "yyyy-MM-dd'T'HH:mm:ss");

      const newData = {
        ...data,
        dateCreated: formattedDateCreated,
        dateUpdated: formattedDateUpdated,
      };
      console.log(newData);
      const response = await fetch("http://localhost:5000/api/asset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        const newAsset = await response.json();
        onSubmit(newAsset);
        reset();
      } else {
        throw new Error("Error adding asset");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Name:</label>
        <input
          {...register("name", { required: true })}
          placeholder="Asset Name"
        />
      </div>
      <input {...register("value", { required: true })} placeholder="Value" />
      <input {...register("profit", { required: true })} placeholder="Profit" />
      <input {...register("loss", { required: true })} placeholder="Loss" />
      <input {...register("year", { required: true })} placeholder="Year" />
      <input
        {...register("dateCreated", { required: true })}
        type="datetime-local"
        value={format(new Date(), "yyyy-MM-dd HH:mm:ss")}
        onChange={(e) => setDateCreated(new Date(e.target.value))}
        placeholder="dateCreated"
        readOnly
      />
      <input
        {...register("dateUpdated", { required: true })}
        type="datetime-local"
        value={format(new Date(), "yyyy-MM-dd HH:mm:ss")}
        onChange={(e) => setDateUpdated(new Date(e.target.value))}
        placeholder="dateUpdated"
        readOnly
      />
      <button type="submit">Add Asset</button>
    </form>
  );
}
export default Form;
