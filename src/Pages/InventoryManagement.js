import React from "react";
import AssetCard from "../components/AssetCard";
import { useUser } from "../hooks/useUser";

function Inventorymanagement() {
  const currentUser = useUser();
  console.log(currentUser);
  return <AssetCard currUser={currentUser} />;
}
export default Inventorymanagement;
