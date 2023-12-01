import React from "react";
import DataDisplay from "../components/DataDisplay";
import EntryForm from "../components/EntryForm";
import { useUser } from "../hooks/useUser";
function Asset() {
  const handleFormSubmit = (newAsset) => {
    console.log("New Asset:", newAsset);
  };
  const currentUser = useUser();
  console.log(currentUser);
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
      <EntryForm
        onSubmit={handleFormSubmit}
        currUser={currentUser}
      />
      <DataDisplay currUser={currentUser} />
    </div>
  );
}
export default Asset;
