import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAsset } from "../services/apiAssetsv1";

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
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { creatingAsset, isCreatingAsset, error };
}
