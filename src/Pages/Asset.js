import React from "react";
import DataDisplay from "../components/DataDisplay";
import EntryForm from "../components/EntryForm";
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
        <h1>WELCOME</h1>
      </div>
      <EntryForm onSubmit={handleFormSubmit} />
      <DataDisplay />
    </div>
  );
}
export default Asset;
