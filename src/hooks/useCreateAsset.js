import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAset } from "../services/apiAssets";

export function useCreateAsset() {
  const queryClient = useQueryClient();
  const {
    mutate: creatingAsset,
    isLoading: isCreatingAsset,
    error,
  } = useMutation({
    mutationFn: createAset,
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
