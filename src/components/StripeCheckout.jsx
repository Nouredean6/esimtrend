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
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)



const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { handleToBuyBundle, bundleToBuy, setBundleToBuy,collectedEmail, setCollectedEmail } = useBundle();
  const { isLoggedIn,setIsLoggedIn, user, setUser } = useAuth();


  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        items: [{ 
          price: bundleToBuy.reseller_retail_price,
          bundleCode:bundleToBuy.bundle_code,
          bundleMarketingName:bundleToBuy.bundle_marketing_name          ,
          bundleName:bundleToBuy.bundle_name,
          email:collectedEmail ? collectedEmail:user.email,
          name:'noureddine' }],
        // customer: {
        //   email: 'noureddinebougraou@gmail.com',  // Replace with user's email
        //   name: 'Noureddine',  // Replace with user's name
        // },
      }),
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
    localStorage.setItem('bundleCode', bundleToBuy.bundle_code);
    localStorage.setItem('bundleMarkName', bundleToBuy.bundle_marketing_name);
    localStorage.setItem('bundleName', bundleToBuy.bundle_name);


  }, []);
  
  

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <>
    <div>
    {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      </div>
    </>
  )
}

export default StripeCheckout