// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createOrder } from "../services/apiAssetsv1";

// export function useCreateOrder() {
//   const queryClient = useQueryClient();
//   const {
//     mutate: creatingOrder,
//     isLoading: isCreatingOrder,
//     error,
//   } = useMutation({
//     mutationFn: createOrder,
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["order"],
//       });
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//   });
//   return { creatingOrder, isCreatingOrder, error };
// }
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createOrder } from "../services/apiOrder";

export function useCreateOrder() {
  const queryClient = useQueryClient();

  const {
    mutate: cretingOrder,
    isLoading: isCreatingOrder,
    error,
  } = useMutation({
    mutationFn: (data) => createOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      toast.success(`Order created`);
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return { cretingOrder, isCreatingOrder, error };
}
