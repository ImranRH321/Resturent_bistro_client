import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const { user } = useAuth();
  const { apis } = useAxiosSecure();

  const {} = useQuery({
    queryKey: ["/admin/stats"],
    queryFn: async () => {
      const res = await apis("/admin/stats");
      console.log(res.data,' admin home');
      return res.data;
    },
  });

  return (
    <div className="w-full">
      <h1 className="text-4xl">WelCome Admin: {user.displayName} </h1>
    </div>
  );
};

export default AdminHome;
