import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAsset } from "../services/apiAssets";

export function useDeleteAsset() {
  const queryClient = useQueryClient();
  const {
    mutate: deletingAsset,
    isLoading: isDeletingAsset,
    error,
  } = useMutation({
    mutationFn: deleteAsset,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assets"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { deletingAsset, isDeletingAsset, error };
}
