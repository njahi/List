import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../services/apiAssetsv1";

export function useAddUser() {
  const queryClient = useQueryClient();
  const {
    mutate: addingUser,
    isLoading: isAddingUser,
    error,
  } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { addingUser, isAddingUser, error };
}
