import React from "react";
import Form from "../components/Form";
import DataDisplay from "../components/DataDisplay";
function Asset() {
  const handleFormSubmit = (newAsset) => {
    console.log("New Asset:", newAsset);
  };
  return (
    <div>
      <div
        style={{
          textTransform: "uppercase",
          backgroundColor: "grey",
          textAlign: "center",
        }}>
        <h1>Entry</h1>
      </div>
      <Form onSubmit={handleFormSubmit} />
      <DataDisplay />
    </div>
  );
}
export default Asset;
