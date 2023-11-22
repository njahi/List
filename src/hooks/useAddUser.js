import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function useAddUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: addingUser,
    isLoading: isAddingUser,
    error,
  } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      navigate("/home");
      toast.success("User Registered succesfuly");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { addingUser, isAddingUser, error };
}
