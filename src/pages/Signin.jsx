import { useMutation } from "react-query";
import Countries from "../components/Countries";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
// import StripeCheckout from "../components/StripeCheckout";
import { countries as data } from "../data";
import {useState, useRef, useEffect} from 'react'
import FacebookAuth from 'react-facebook-auth';
import axios from "axios";
import { useAuth } from "../UserContext";
import { useNavigate } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import successCheck from '../assets/successCheck.svg';
import { toast } from "react-toastify";
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
const MyFacebookButton = ({ onClick }) => (
  <button className='social-btn-google   w-full self-center rounded-2xl  font-semibold px-4 py-3' onClick={onClick}>
    Sign in with facebook
  </button>
);
const Signin = () => {
  // const navigate = useNavigate();
    // const { collectedEmail, setCollectedEmail } = useBundle();

    const isSigninPage = true;
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(Array(6).fill(''));
    const [isChecked, setIsChecked] = useState(false);
    const [isCodeSent, setIsCodeSent] = useState(false);
    const codeInputsRef = useRef([]);
    const { isLoggedIn,setIsLoggedIn, user, setUser } = useAuth();
    const navigate = useNavigate()
    const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

    useEffect(() => {
      // Initialize isLoggedIn from local storage
      const storedLoginStatus = localStorage.getItem('isLoggedIn');
      if (storedLoginStatus) {
        setIsLoggedIn(storedLoginStatus === 'true');
      }
    }, [setIsLoggedIn]);
  
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleCheckboxChange = (event) => setIsChecked(event.target.checked);
  
    const registerUser = async () => {
      const response = await axios.post('/api/api/users/register', { email });
      // console.log(response);
      return response;
    };
    // console.log(isLoggedIn);
    // console.log(user)

  
    const loginWithCode = async () => {
      const response = await axios.post(`/api/api/users/loginWithCode/${email}`, { loginCode: code.join('') });
      // console.log(response.data);
      return response;
    };
    const loginWithGoogle = async (userInfo) => {
      const response = await axios.post(`/api/api/users/google/callback`, { userInfo });
      console.log(response.data);
      console.log(response)
      return response;
    };
    const { mutate: GoogleMutate } = useMutation(loginWithGoogle, {
      onSuccess: (data) => {
        if (data.statusText === 'OK') {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.removeItem('NotLoggedInUserId');
          setIsLoggedIn(true);
          localStorage.setItem('user', JSON.stringify(data.data));
          setUser(data.data);
        }
        console.log(data);
      
      },
    });
    const authenticate = (response) => {
      console.log(response);
      // Api call to server so we can validate the token
    };
    
const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    console.log(tokenResponse);
    const userInfo = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
    );
    GoogleMutate(userInfo)
    
    console.log(userInfo);
  },
  onError: errorResponse => console.log(errorResponse),
});
    const resendEmail = async () => {
      const response = await axios.post(`/api/api/users/resend/${email}`);
      // console.log(response.data);
      return response;
    };
  
    const handleChangeCode = (index, value) => {
      let newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value.length === 1 && index < codeInputsRef.current.length - 1) {
        codeInputsRef.current[index + 1].focus();
      }
    };
  
    // Mutation for registering the user
    const { mutate: registerMutate } = useMutation(registerUser, {
      onSuccess: (data) => {
        // console.log('register data',data)
        setIsCodeSent(true);
        // No need to call setIsLoggedIn here as user is not logged in yet, they are just registered.
      }
    });
  
    // Mutation for logging in the user
    const { mutate: loginMutate } = useMutation(loginWithCode, {
      onSuccess: (data) => {
        if (data.statusText === 'OK') {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.removeItem('NotLoggedInUserId');
          setIsLoggedIn(true);
          localStorage.setItem('user', JSON.stringify(data.data));
          setUser(data.data);
        }
        console.log(data);
      
      },
      onError:(data)=>{
        console.log(data);
        toast.error(data.response.data.message)
      }
    });
    const { mutate: resendMutate } = useMutation(resendEmail, {
      onSuccess: (data) => {
        // if (data.statusText === 'OK') {
        //   localStorage.setItem('isLoggedIn', 'true');
        //   setIsLoggedIn(true);
        //   localStorage.setItem('user', JSON.stringify(data.data));
        //   setUser(data.data);
        // }
        toast.success(data.data.message);
        console.log(data);
      },
      onError: (data)=>{
        console.log(data);
        toast.error(data.response.data)
      }
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (isButtonDisabled) return;
      registerMutate();
    };
  
    const handleSubmitCode = (event) => {
      event.preventDefault();
      loginMutate();
    };
    const handleResendEmail = (event) => {
      event.preventDefault();
      resendMutate();
    };
    
    useEffect(() => {
      if (isLoggedIn) {
        navigate("/e-sim");
      }
  
      
    }, [ isLoggedIn]);
    
  
    const isButtonDisabled = !validateEmail(email) || !isChecked;
  return (
    <>
    <Navbar isSigninPage={isSigninPage}/>
    <div className="  h-screen w-full   flex flex-col justify-center items-center">
      {isCodeSent ? (
        <>
        <div>
      <Modal open={open} onClose={onCloseModal} blockScroll={false} center
      classNames={{overlay:'overlay-cust2', modal:' min-h-min rounded-[25px] shadow-none w-[550px] '}}
      
      >
        <div className=" flex flex-col items-center justify-center px[25px] py-[25px]">
        <img className="transform scale-[1.2]" src={successCheck}/>
        <p className='text-black text-xl font-bold mt-[25px] mb-[20px]'>Sign-in Email Sent

</p>
      <p className='text-lg text-text-clr-grey  mt-[25px] text-center font-normal px-[45px] '>A sign-in email with additional instructions was sent to <strong>{email}</strong>. Check your email to complete sign-in.
</p>
{/* <button onClick={()=>navigate('/checkout')} className="submit-button font-bold text-xl hover:bg-custom-blue my-[15px]">Yes, continue</button> */}
      {/* <p className="red-link text-lg" onClick={onCloseModal}>No, my device is not compatible</p> */}
        </div>

      </Modal>
    </div>
        <div className="mb-8  ">
        <h1 className="text-4xl lg:text-5xl 	 text-custom-text-color-1 text-center font-bold mb-5 lg:leading-relaxed">
        Please verify your email!</h1>
          <p className="text-xl text-custom-text-color text-center font-normal mb-[25px] ">
          You're almost there! A Link and a Verification code was sent to your email
          </p>
          <span className="text-black text-base font-semibold">{email}</span>
    </div>
    <form className=' flex flex-col   w-1/3' onSubmit={handleSubmitCode}>
  {/* <div  onClick={  ()=>navigate('/plans')} 
    className='flex gap-2 self-start hover:cursor-pointer mb-7 items-center'><MdOutlineKeyboardArrowLeft size={24}/><span className='font-medium text-custom-text-color-1 '>Go back</span></div> */}
      
      <div className="flex justify-center items-center ">
      {code.map((digit, index) => (

          <input
          className='border-solid border-2 mr-4 h-20 w-14 shadow-custom text-center mb-10  rounded-3xl outline-none text-lg'
            key={index}
            ref={(el) => codeInputsRef.current[index] = el}
            type="text"
            value={digit}
            onChange={(e) => handleChangeCode(index, e.target.value)}
            maxLength={1}
            
          />
        ))}
      </div>
    <button className=' text-white font-semibold px-4 py-3  bg-custom-pink  w-full self-center rounded-2xl disabled:opacity-50' type="submit" disabled={isButtonDisabled}>Verify</button>
    <p className="text-custom-text-color text-center text-lg mt-[25px]">Didn't receive a code? <b onClick={handleResendEmail} className="text-lg underline">Resend now</b></p>
    </form>
    </>): (
      <>
      <div className="mb-8 ">
          <h1 className="text-4xl lg:text-5xl	 text-custom-text-color-1 text-center font-bold mb-5 lg:leading-relaxed">
            Sign In / Sign Up</h1>
            <p className="text-xl text-custom-text-color text-center font-normal mb-[25px] ">
            Welcome back! Please enter your email.
            </p>
      </div>
      <form className=' flex flex-col w-full sm:w-3/4 lg:px-0 sm:px-0 px-5  lg:w-1/3' onSubmit={handleSubmit}>
    {/* <div  onClick={  ()=>navigate('/plans')} 
      className='flex gap-2 self-start hover:cursor-pointer mb-7 items-center'><MdOutlineKeyboardArrowLeft size={24}/><span className='font-medium text-custom-text-color-1 '>Go back</span></div> */}
      <label className=' flex flex-col mb-8'>
        <span className='text-custom-text-color-1 text-xl font-medium mb-3'>Email</span>
        <input className='border-none shadow-custom px-4 py-4 rounded-3xl outline-none text-lg' type="email" placeholder='Email' value={email} onChange={handleEmailChange} />
      </label>
      <label className=' mb-5'>
        <input type="checkbox" className='' checked={isChecked} onChange={handleCheckboxChange} />
        <span className='text-black text-sm ml-2 font-medium'>I accept the Terms & Conditions
</span>
      </label>
      <button className=' text-white font-semibold px-4 py-3  bg-custom-pink  w-full self-center rounded-2xl disabled:opacity-50' type="submit" disabled={isButtonDisabled}>Sign in</button>
      <div className=" my-[50px] relative">
        <hr className="border-b-2 border-solid border-custom-text-color-1 "/>
        <p className="or-text">OR</p>
      </div>
      <button className='social-btn-google   w-full self-center rounded-2xl  font-semibold px-4 py-3' onClick={() => googleLogin()}>Sign in with Google 🚀</button>;
      <FacebookAuth
      appId="1213842130000650"
      callback={authenticate}
      component={MyFacebookButton}
    />
      </form>
      {/* <GoogleLogin
      render={renderProps => (
        <button onClick={renderProps.onClick} className="bg-black">This is my custom Google button</button>
      )}
      buttonText="Login"
              onSuccess={GoogleMutate}
              // onSuccess={credentialResponse => {
              //   console.log(credentialResponse);
              // }}
              onError={() => {
                console.log('Login Failed');
              }}
            /> */}
            


      </>
    )}
    </div>
    {/* <StripeCheckout/> */}
    <Footer/>
    </>
  )
}

export default Signin
