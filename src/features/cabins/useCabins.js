// Custom Hook for the Cabin Compoenents

import { getCabins } from "../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";

function useCabins() {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isPending, error, cabins };
}

export default useCabins;
