import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/apiOrder";

export function useOrders() {
  const {
    data: orders,
    isLoading: loadingOrders,
    error,
  } = useQuery({
    queryFn: getOrders,
    queryKey: ["orders"],
  });

  return { orders, loadingOrders, error };
}
