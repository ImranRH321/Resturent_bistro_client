import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
  console.log("CheckoutForm--> price --> ", price);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  //
  const [clientSecret, setClientSecret] = useState("");
  const { apis } = useAxiosSecure();
  const { user } = useAuth();

  // save the current state
  useEffect(() => {
    if (price > 0) {
      apis.post("/create-payment-intent", { price }).then((res) => {
        console.log("res payment", res.data);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price , user]);
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    //
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    //
    console.log("Card -->", card);

    //
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("PaymentMethod-->", paymentMethod);
      alert("found payment method");
    }

    console.log(card,'-->casrd');
    
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "no anonymous email",
            name: user?.displayName || "anonymous",
          },
        },
      });
    //
    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }
    //
    console.log(paymentIntent, "----> paymentIntent");
    console.log(confirmError, "----> confirmError");
  };
  //
  return (
    <>
      <form className="border p-4" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-xs mt-6 ms-3 w-[100px] m-auto"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
