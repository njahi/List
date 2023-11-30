import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAsset } from "../services/apiAssets";
import toast from "react-hot-toast";
export function useCreateAsset() {
  const queryClient = useQueryClient();
  const {
    mutate: creatingAsset,
    isLoading: isCreatingAsset,
    error,
  } = useMutation({
    mutationFn: createAsset,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assets"],
      });
      toast.success("Asset Added");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { creatingAsset, isCreatingAsset, error };
}
