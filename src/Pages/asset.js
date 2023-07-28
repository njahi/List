import React from "react";
import Form from "../components/Form";
import DataDisplay from "../components/DataDisplay";
function Asset() {
  const handleFormSubmit = (newAsset) => {
    console.log("New Asset:", newAsset);
  };
  return (
    <div>
      <h1>Welcome</h1>
      <Form onSubmit={handleFormSubmit} />
      <DataDisplay />
    </div>
  );
}
export default Asset;
