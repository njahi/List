import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAsset } from "../services/apiAssets";

export function useEditAsset() {
  const queryClient = useQueryClient();
  const {
    mutate: editingAsset,
    isLoading: isEditingAsset,
    error,
  } = useMutation({
    mutationFn: editAsset,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assets"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { editingAsset, isEditingAsset, error };
}
