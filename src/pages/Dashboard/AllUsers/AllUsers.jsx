import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  // Queries
  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

 
  //   console.log(users);
  const handleMakeAdminUserRole = (user) => {
    fetch(`http://localhost:5000/users/admin/${user.id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: ` new role admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeletedUser = (id) => {};

  return (
    <div className="w-full px-12">
      <h1>all user : {users?.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="bg-base-200" key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  {user.userRole === "admin" ? (
                    "Admin Role"
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdminUserRole(user)}
                        className="btn btn-ghost btn-sm bg-success"
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDeletedUser(user._id)}
                    className="btn btn-ghost btn-sm bg-red-600"
                  >
                    <FaRegTrashAlt></FaRegTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
