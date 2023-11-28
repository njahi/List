import { useQuery } from "@tanstack/react-query";
import { getAsset } from "../services/apiAssets";

export function useGetAsset(id) {
  const {
    data: asset,
    isLoading: loadingAssets,
    error,
  } = useQuery({
    queryFn: getAsset(id),
    queryKey: ["assets"],
  });

  return { asset, loadingAssets, error };
}
