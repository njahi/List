import React from "react";
import AssetCard from "../components/AssetCard";
import { useUser } from "../hooks/useUser";
import Navbar from "../components/Navbar";

function Inventorymanagement() {
  const currentUser = useUser();
  console.log(currentUser);
  return (
    <>
      <Navbar />
      <AssetCard currUser={currentUser} />
    </>
  );
}
export default Inventorymanagement;
