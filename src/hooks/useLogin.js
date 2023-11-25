import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiAuth";

export function useLogIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: loginFn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      toast.success("Log in Successfull");
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("Provided email and password are incorect");
    },
  });

  return { loginFn, isLoading };
}
