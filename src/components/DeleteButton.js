import { memo } from "react";
import { useDeleteAsset } from "../hooks/useDeleteAsset";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const DeleteButton = memo(function DeleteButton({ id }) {
  const { deletingAsset, isDeletingAsset, error } = useDeleteAsset();
  function handleDelete() {
    deletingAsset(id);
    toast.success("asset deleted", {
      position: "top-center",
      toastId: id,
    });
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
      style={{ marginLeft: "100px" }}>
      <FaTrashAlt />
    </button>
  );
});
export default DeleteButton;
