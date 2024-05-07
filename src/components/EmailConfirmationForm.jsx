import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useBundle } from '../BundleContext';
import { useMutation } from "react-query";
import axios from "axios";


function EmailConfirmationForm({setIsEmailCollected}) {
    const navigate = useNavigate();
    const { collectedEmail, setCollectedEmail } = useBundle();


  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // Regular expression for email validation
  const emailRegex = /\S+@\S+\.\S+/;

  // Validates the email against the regex
  const validateEmail = (email) => {
    return emailRegex.test(email);
  };
  const registerUser = async () => {
    const response = await axios.post('/api/api/users/register', { email });
    // console.log(response);
    return response;
  };
  // Mutation for registering the user
  const { mutate: registerMutate } = useMutation(registerUser, {
    onSuccess: (data) => {
      // console.log('register data',data.data.user._id)
      localStorage.setItem('NotLoggedInUserId', data.data.user._id);

      // setIsCodeSent(true);
      // No need to call setIsLoggedIn here as user is not logged in yet, they are just registered.
    }
  });
  // Update the state when the email is changed
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setCollectedEmail(event.target.value)
    localStorage.setItem('collectedEmail', event.target.value);
  };

  // Update the state when the checkbox is changed
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic to process the form submission here
    console.log('Form submitted with email:', email);
    setIsEmailCollected(true);
    registerMutate();
  };

  // Determine whether the button should be disabled
  const isButtonDisabled = !validateEmail(email) || !isChecked;

  return (
    <div className=' flex  items-center lg:w-1/2 px-8'>
    <form className=' flex flex-col' onSubmit={handleSubmit}>
    <div onClick={()=>navigate('/plans')} className='flex gap-2 self-start hover:cursor-pointer mb-7 items-center'><MdOutlineKeyboardArrowLeft size={24}/><span className='font-medium text-custom-text-color-1 '>Go back</span></div>
      <label className=' flex flex-col mb-8'>
        <span className='text-custom-text-color-1 text-xl font-medium mb-3'>Email</span>
        <input className='border-none shadow-custom px-4 py-4 rounded-3xl outline-none text-lg' type="email" placeholder='Email' value={email} onChange={handleEmailChange} />
      </label>
      <label className=' mb-5'>
        <input type="checkbox" className='' checked={isChecked} onChange={handleCheckboxChange} />
        <span className='text-black text-sm ml-2 font-medium'>I confirm that the above email is valid and does not contain any typos.</span>
        <p className='text-black text-sm mt-2 font-medium'>And I accept the Terms & Conditions and I understand that the product only work with eSIM<br/>compatible and carrier-unlocked devices.
Confirm</p>
      </label>
      <button className=' text-white font-semibold px-4 py-3  bg-custom-pink  w-1/3 self-center rounded-2xl disabled:opacity-50' type="submit" disabled={isButtonDisabled}>Confirm</button>
    </form>
    </div>
  );
}

export default EmailConfirmationForm;
