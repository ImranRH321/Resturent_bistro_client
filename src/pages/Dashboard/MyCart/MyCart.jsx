import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/userCart";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  // Dashboard myCart in now
  const { carts , refetch } = useCart();
  const totalPrice = carts.reduce((sum, item) => item.price + sum, 0);

  // DELETED CART ITEMS
  const handleDeletedItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mycart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.deletedCount > 0) {
              // TODO: client side Deleted cart
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro boos | My Cart</title>
      </Helmet>

      <div className="flex gap-10 uppercase items-center">
        <h1>Total Items: {carts?.length}</h1>
        <h1>Total Price: ${totalPrice}</h1>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Food</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  {" "}
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        //   src={item.image}
                        // TODO: image poya jay na problem 2
                        alt="img no found"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="">Price: ${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDeletedItem(item._id)}
                    className="btn btn-ghost btn-sm bg-red-600"
                  >
                    <FaRegTrashAlt></FaRegTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
