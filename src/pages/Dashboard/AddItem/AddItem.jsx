import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

// const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const imgStoreKey = "428322d13b73eac9cb47c3c4911691c0";
  const { apis } = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
    //
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imgData) => {
        const imgUrl = imgData.data.display_url;
        if (imgData.status === 200) {
          const { name, category, price, recipe } = data;
          const newItem = {
            name,
            category,
            price: parseFloat(price),
            recipe,
            image: imgUrl,
          };
          apis.post("/menu", newItem).then((data) => {
            console.log(data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "The item has been added menu",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
          //
        } else {
          alert("img hosing url problem not img upload imgbb");
        }
      });
    //
  };
  return (
    <div className="w-full px-12">
      <SectionTitle
        smallHeading={"---What's new?---"}
        largeHeading={"ADD AN ITEM"}
      ></SectionTitle>
      {/*  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label htmlFor="name">Recipe Name:</label> <br />
          <input
            type="text"
            placeholder="recipe name"
            id="name"
            {...register("name", { required: true, maxLength: 20 })}
            className="input input-bordered w-full"
          />
        </div>
        {/* C */}
        <div className="flex items-center justify-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue={"Pic One"}
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>salad</option>
              <option>pizza</option>
              <option>soup</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label htmlFor="name">Price*</label>
            <input
              type="number"
              placeholder="price"
              id="name"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Tx  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text fw-bolder">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="recipe details"
          ></textarea>
        </div>
        {/* FL */}
        <div className="form-control my-4">
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>

        <input
          type="submit"
          value="Add item"
          className="btn btn-sm btn-primary mt-4"
        />
      </form>
      {/*  */}
    </div>
  );
};

export default AddItem;
