import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../services/apiAssetsv1";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const {
    mutate: creatingOrder,
    isLoading: isCreatingOrder,
    error,
  } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["order"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { creatingOrder, isCreatingOrder, error };
}
