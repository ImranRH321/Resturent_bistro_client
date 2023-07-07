import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
// import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);

  // const [axiosSecure] = useAxiosSecure(); // off
  const { apis } = useAxiosSecure();

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    /* 
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return res.json();
    }, */
    //
    queryFn: async () => {
      const res = await apis(`carts?email=${user?.email}`);
      console.log("res form axios", res.data);
      return res.data;
    },

    /*    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log('res form axios', res.data);
      return res.data
    }, */
  });
  return { carts, refetch };
};

export default useCart;
