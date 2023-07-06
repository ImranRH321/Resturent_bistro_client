import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  // Queries
  const { data: users } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  console.log(users);
  return (
    <div>
      <h1>all user : {users?.length} </h1>
    </div>
  );
};

export default AllUsers;
