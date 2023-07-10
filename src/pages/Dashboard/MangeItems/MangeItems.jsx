import React from "react";
import useFoodMenuData from "../../../hooks/useFoodMenuData";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
 
const MangeItems = () => {
  //
  const [menu, , refetch] = useFoodMenuData();
  const { apis } = useAxiosSecure();

  // DELETED Mange ITEMS
  const handleMangeItemDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Mange item deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        apis.delete(`/menu/${_id}`).then((res) => {
          console.log("res delete", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  /* 
  //  
            //   refetch();
*/

  return (
    <div className="w-full">
      <SectionTitle
        smallHeading={"---Hurry Up!---"}
        largeHeading={"MANAGE ALL ITEMS"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>Category</th>
              <th>PRICE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          //   src={item.image }
                          src="https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td className="text-right">Price: {item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <button
                    onClick={() => handleMangeItemDelete(item._id)}
                    className="btn btn-ghost btn-sm bg-red-600"
                  >
                    <FaRegTrashAlt></FaRegTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeItems;
