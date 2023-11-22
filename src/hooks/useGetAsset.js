import { useQuery } from "@tanstack/react-query";
import { getAsset } from "../services/apiAssets";

export function useGetAsset(id) {
  const {
    data: assets,
    isLoading: loadingAssets,
    error,
  } = useQuery({
    queryFn: getAsset,
    queryKey: ["assets"],
  });

  return { assets, loadingAssets, error };
}
