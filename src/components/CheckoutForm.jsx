import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useBundle } from "../BundleContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "../UserContext";
import { useMutation } from "react-query";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)


const CheckoutForm = ()=>{
    const orderId=uuidv4();
    const { isLoggedIn,setIsLoggedIn, user, setUser } = useAuth();
  
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
  
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    console.log(message, 'HELLO FROM MESSAGE');
    // const createOrder = async () => {
    //   try {
    //     // Send a POST request to your backend API to create the order
    //     const response = await axios.post(`/api/api/orders/create-order/${orderId}`, {
    //       userId: user._id,
    //     });
    //     console.log(response, 'HAAAAAAAAAOOOOOOOOO');
    
        
    //   } catch (error) {
    //     console.error('Error creating order:', error);
    //     setMessage('Failed to create order. Please try again.');
    //   }
    // };
    const createOrder = async () => {
      const response = await axios.post(`/api/api/orders/create-order/${orderId}`, { userId: user._id });
      // console.log(response.data);
      return response;
    };
       // Mutation for logging in the user
       const { mutate: orderMutate } = useMutation(createOrder, {
        onSuccess: (data) => {
          console.log(data);
          // if (data.statusText === 'OK') {
          //   localStorage.setItem('isLoggedIn', 'true');
          //   setIsLoggedIn(true);
          //   localStorage.setItem('user', JSON.stringify(data.data));
          //   setUser(data.data);
          // }
        },
      });
    useEffect(() => {
      if (!stripe) {
        return;
      }
  
      const clientSecret = new URLSearchParams(window.location.search).get(
        import.meta.env.VITE_STRIPE_SECRET_KEY
      );
  
      if (!clientSecret) {
        return;
      }
  
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            orderMutate();
            // setMessage("Payment succeeded!");
            // console.log(message);
            // createOrder(); // Call createOrder function when payment is successful
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
    }, [stripe]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
  
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
      setIsLoading(true);
  
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:5173/success",
          // redirect: 'if_required'
          // redirect: 'manual', // Prevent automatic redirection

        },
      });
  
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
  
      setIsLoading(false);
    };
  
    const paymentElementOptions = {
      layout: "tabs"
    }
      return(
        
        <form className="border-2 border-solid border-black rounded-lg px-4 py-5  " id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        
        <button className="mt-8 mr-8 bg-custom-pink text-white sm:py-4 py-3 font-semibold sm:px-20 px-5 rounded-3xl cursor-pointer hover:bg-custom-text-color-1 disabled:opacity-50 disabled:cursor-default" disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text" className="">
            {isLoading ? 'Processing...' : "Pay now"}
          </span>
        </button>
        <button className="mt-8  bg-custom-text-color-1 text-white sm:py-4 py-3 px-5 font-semibold sm:px-20 rounded-3xl" onClick={()=>navigate('/plans')}>
          <span id="button-text" className="">
            cancel
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div className="text-red-700 mt-8 font-medium" >{message}</div>}
        
      </form>
      )
  }

export default CheckoutForm