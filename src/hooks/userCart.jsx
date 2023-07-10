import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user , loading} = useAuth();

  // BASE_URL 
  const { apis } = useAxiosSecure();

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    //
    queryFn: async () => { 
      const res = await apis(`carts?email=${user?.email}`);
      console.log("res form axios", res.data);
      return res.data;
    },
  });
  return { carts, refetch };
};

export default useCart;
