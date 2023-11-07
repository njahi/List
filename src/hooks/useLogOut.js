import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const logOut = () => {
  sessionStorage.clear();
};

export function useLogOut() {
  const navigate = useNavigate();
  const {
    mutate: logOutAPI,
    isLoading,
    error,
  } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      toast.success("Logged out successfully");
      navigate("/login");
    },
    onError: () => {
      toast.error("Error ocured");
    },
  });

  return { logOutAPI, isLoading, error };
}
