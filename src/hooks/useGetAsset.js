import { useQuery } from "@tanstack/react-query";
import { getAsset } from "../services/apiAssets";

export function useGetAsset(id) {
  const {
    data: asset,
    isLoading: loadingAsset,
    error,
  } = useQuery({
    queryFn: getAsset(id),
    queryKey: ["assets", id],
  });

  return { asset, loadingAsset, error };
}
