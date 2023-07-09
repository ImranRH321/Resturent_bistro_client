 import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useAuth();
  const { apis } = useAxiosSecure();
 console.log(user.email,'user');

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],

    // TODO: Sec. server Problem get('/users/admin/:email)
    // TODO: Sec. client Problem apis.get('/user/admin${user?.email}')
    // = true=user/admin/:email

    queryFn: async () => {
      const res = await apis.get(`/user/admin/${user?.email}`);
        // console.log('the admin res ',res.data);
      return res.data.admin;
    },
  });

  console.log(isAdmin, isAdminLoading, "useAdmin ==> route");
  return { isAdmin, isAdminLoading };
};

export default useAdmin; 
