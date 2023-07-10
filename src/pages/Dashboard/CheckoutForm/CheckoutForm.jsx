import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    // 
    const handleSubmit = async (event) => {
     event.preventDefault();
     if(!stripe || !elements){
        return 
     }  
    //  
    const card = elements.getElement(CardElement);
    if (card == null) {
        return;
      }
    //
    console.log('Card -->', card);
    // 
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
      } else {
          setCardError("")
        console.log('PaymentMethod-->', paymentMethod);
        alert("found payment method")
      }
        // 
    }
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
      <button className="btn btn-primary btn-xs mt-6 ms-3 w-[100px] m-auto" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-600">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
