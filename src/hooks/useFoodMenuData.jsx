import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useFoodMenuData = () => {
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFoodMenu(data);
  //       setLoadingMenuData(false);
  //     });
  // }, [user]);

  const { data: foodMenu = [], isLoading: loading , refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      return res.json();
    },
  });

  return [foodMenu, loading, refetch];
};

export default useFoodMenuData;
