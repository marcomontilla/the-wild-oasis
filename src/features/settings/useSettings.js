import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"], // They whay we identify it in the cache
    queryFn: getSettings, // A function that returns a promise
  });

  return { isLoading, error, settings };
}
