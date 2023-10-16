import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../services/apiAssets";

export function useAssets() {
  const {
    data: assets,
    isLoading: loadingAssets,
    error,
  } = useQuery({
    queryFn: getAssets,
    queryKey: ["assets"],
  });

  return { assets, loadingAssets, error };
}
