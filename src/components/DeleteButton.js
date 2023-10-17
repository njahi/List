import React from "react";
import { useDeleteAsset } from "../hooks/useDeleteAsset";
import { FaTrashAlt } from "react-icons/fa";

export default function DeleteButton({ id }) {
  const { deletingAsset, isDeletingAsset, error } = useDeleteAsset();
  function handleDelete() {
    deletingAsset(id);
  }

  if (isDeletingAsset) {
    return <p>Deleting...</p>;
  }
  if (error) {
    console.log(error);
  }

  return (
    <button
      onClick={handleDelete}
      style={{ marginLeft: "150px" }}>
      <FaTrashAlt />
    </button>
  );
}
