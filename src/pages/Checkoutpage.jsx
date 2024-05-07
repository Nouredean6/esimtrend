import React, { useEffect, useState } from 'react'
import StripeCheckout from '../components/StripeCheckout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useBundle } from '../BundleContext'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import EmailConfirmationForm from '../components/EmailConfirmationForm'
import { useAuth } from '../UserContext'



const Checkoutpage = () => {
  const [isEmailCollected, setIsEmailCollected] = useState(false)
  const { handleToBuyBundle, bundleToBuy, setBundleToBuy,  } = useBundle();
  const { isLoggedIn,setIsLoggedIn, user, setUser } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if the cart is empty (assuming cartItems is an array)
  //   if (bundleToBuy.reseller_retail_price === undefined) {
  //     // Redirect to another page, e.g., home page
  //     navigate('/plans');
  //   }
  // }, [bundleToBuy, navigate]);

  return (
    <>
    <Navbar/>
    <div className='lg:flex lg:flex-row    mt-[170px] flex flex-col-reverse  w-full justify-center mb-[170px]'>
      {isLoggedIn ? (
        <div className='lg:w-1/2 sm:w-full px-8 '>
        <div className='mb-5 '>
          <div onClick={()=>navigate('/plans')} className='flex gap-2 hover:cursor-pointer items-center'><MdOutlineKeyboardArrowLeft size={24}/><span className='font-medium text-custom-text-color-1 '>Go back</span></div>
          <p className='text-custom-text-color-1 text-2xl font-bold mt-4'>Payment Method</p>
        </div>
        <div className='border-2  rounded-xl border-custom-text-color-1 px-8 py-5 flex justify-center w-[400px] mb-12 shadow-lg'>
          <p className='text-custom-text-color-1 text-lg font-semibold'>Credit or Debit Card  </p>
        </div>
       <StripeCheckout/>
      </div>
      ) : isEmailCollected ? (
        <div className='lg:w-1/2 sm:w-full px-8  '>
        <div className='mb-5'>
          <div onClick={()=>navigate('/plans')} className='flex gap-2 hover:cursor-pointer items-center'><MdOutlineKeyboardArrowLeft size={24}/><span className='font-medium text-custom-text-color-1 '>Go back</span></div>
          <p className='text-custom-text-color-1 sm:text-2xl text-xl font-bold mt-4'>Payment Method</p>
        </div>
        <div className='border-2 rounded-xl border-custom-text-color-1 sm:px-8 sm:py-5 px-6 py-3 flex justify-center sm:w-[400px] mb-12 shadow-lg'>
          <p className='text-custom-text-color-1 text-lg font-semibold'>Credit or Debit Card  </p>
        </div>
       <StripeCheckout/>
      </div>
      ) : <EmailConfirmationForm setIsEmailCollected={setIsEmailCollected}/>} 
      
      
      <div className='rounded-2xl bg-light-blue-custom  lg:w-1/2 h-72 px-5 py-10 mt-20  mb-10 lg:mb-0  '>
        <p className='text-custom-text-color-1 text-xl  font-bold mb-8'>Summary</p>
        <div className='flex justify-between mb-4'>
          <p className='text-custom-text-color-1 text-lg'>Subtotal</p>
          <p className='text-custom-text-color-1 text-lg font-semibold '>{'USD'+' '+bundleToBuy.reseller_retail_price}
          </p>
        </div>
        <div className='flex justify-between mb-4'>
          <p className='text-custom-text-color-1 text-lg '>Estimated tax</p>
          <p className='text-custom-text-color-1 text-lg font-semibold '>---</p>
        </div>
        <hr className='mb-4' />
        <div className='flex justify-between'>
          <p className='text-custom-text-color-1 text-lg '>Total</p>
          <p className='text-custom-text-color-1 text-2xl font-bold '>{'USD'+' '+bundleToBuy.reseller_retail_price}</p>
        </div>
      </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Checkoutpage