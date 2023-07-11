import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/userCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Publishable_key);
console.log(stripePromise);

const Payment = () => {
  const { carts } = useCart();
  const total = carts.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  console.log("payment total--price->", price);
  return (
    <div>
      <SectionTitle
        smallHeading={"Please process"}
        largeHeading={"Payment Now"}
      ></SectionTitle>
      <h1 className="text-4xl">Teka teka tui oira Oira aso </h1>
      {/*  */}
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} carts={carts}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
