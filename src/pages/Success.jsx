import { useEffect, useState } from "react";
import { useAuth } from "../UserContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useMutation } from "react-query";
import fetchAPI from "../utils";
import iconok from '../assets/icon-ok.svg';
import ConfettiExplosion from 'react-confetti-explosion';
import { useNavigate } from "react-router-dom";
import { useFetchRegionBundle } from "../ReactQueryCustomHooks";


const Success = () => {
  const [isExploding, setIsExploding] = useState(true);
  const [isMutated, setIsMutated] = useState(false);

  const navigate = useNavigate()
  const accessTok = localStorage.getItem('accessToken');
  const collEmail = localStorage.getItem('collectedEmail')
  // const orderId = '1458745698';
  // const orderId = '14587456987';
    // const orderId = '14587476856607';
    const uuid =uuidv4()
    const orderId = uuid.substring(0,8);



  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth();
  const bundleCode = localStorage.getItem('bundleCode');
  const bundleName = localStorage.getItem('bundleName');
  const bundleMarkName = localStorage.getItem('bundleMarkName');
  const notLoggedInUser = localStorage.getItem('NotLoggedInUserId');


  console.log(bundleCode, 'bundleCode');  
  console.log(bundleName, 'bundleName');
  console.log(bundleMarkName, 'Bundle Mark')
  console.log(notLoggedInUser, 'NotLoggedInUSer')

  console.log(orderId)    // Define the data payload for assigning the bundle
  console.log(isLoggedIn, 'local')    // Define the data payload for assigning the bundle

    // Define the headers for assigning the bundle
    // const headers = {
    //   'Access-Token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqbWltZVVoUEIzdDlPMEpSaWdITzNCbDlXNjhCN29uVTAzMGwwVWs2U1pzIn0.eyJleHAiOjE3MTA4ODUxMDksImlhdCI6MTcxMDg4NDIwOSwianRpIjoiNzAwMzYwOWQtODE1ZS00YmI2LWJhOWQtOWRlNGI0Yzc5YzhhIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5tb250eWVzaW0uY29tL3JlYWxtcy9Nb250eU1vYmlsZVJlc2VsbGVyIiwic3ViIjoiOTI3NWRlZjAtZjg3Mi00NTU3LTkyZjgtYjU5YWU3OWZlZmE2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYWRtaW4tY2xpIiwic2Vzc2lvbl9zdGF0ZSI6IjYwZjMwMmQ4LTViNTMtNGFiNC05NjViLTBlNTI1NDZlZmQ5ZSIsImFjciI6IjEiLCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI2MGYzMDJkOC01YjUzLTRhYjQtOTY1Yi0wZTUyNTQ2ZWZkOWUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiI2NWM0ZDQ3ZDgwYjUwYjllMTEzZjRmYWUiLCJyb2xlX2lkIjoiNjQwNzBlN2M0YTJlNWNmYmM3MWFkYTdkIiwibmFtZSI6Imltb2hhdG91cnMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJpbW9oYS5hZG1pbiIsImdpdmVuX25hbWUiOiJpbW9oYXRvdXJzIiwiZmFtaWx5X25hbWUiOiIiLCJlbWFpbCI6ImFpbWFkcHJvQGdtYWlsLmNvbSIsInJlc2VsbGVyX2lkIjoiNjVjNGQ0N2Q4MGI1MGI5ZTExM2Y0ZmE4In0.ewRRNsidNiDXEP7HCsP34CAY8bqJIuSIPbTRMooYGPXFCmqnDXll3XlnKip-4-J0hJuBAJflcShqUPiCeOy5McYd-B-zEvYr91vdNbFkh3G1plCFHbpfGyrYOJMGicvhX-h2JlFIOzsplVQwwbpmyRU8SDiRdDQw7mEc-fpEYVzOj_YG54tVKDPfbCmGph34P8TUrA5NWUe7fZYaSThvHvK4cXe0o1NtnQhQwNp6kSOpwqGiIIstXIK1JegZmgxomsvAvGDqrpfci8ZGMY6wEp8Je4GfdwDDgj9myycLwuAo6WEHb1tjqh0kvBi4_xA8w88nRhENj4o4O4vVjnGpkA',
    //   'Content-Type': 'application/json'
    // }; 
    const assignBundle = async () => {
      const response = await fetchAPI.post('/Bundles', 
      {
        bundle_code: bundleCode,
        email: 'soulaimanebougraou@gmail.com',
        order_reference: orderId
      }
       );
      return response;
    };
    const { mutate: assignMutate } = useMutation(assignBundle, {
      onSuccess: (data) => {
        console.log(data, 'ASSIGN ASSIGN');
        // Handle success as per your requirement
      },
    });

  const createOrder = async () => {
    const response = await axios.post(`/api/api/orders/create-order/${orderId}`, {
      userId: user._id,
      bundleName,
      bundleMark:bundleMarkName
    });
    return response;
  };
  const createOrderNotLoggedIn = async () => {
    const response = await axios.post(`/api/api/orders/create-order/${orderId}`, {
      userId: notLoggedInUser,
      bundleName,
      bundleMark:bundleMarkName
    });
    return response;
  };
  const forwardEmail = async () => {
    const response = await axios.post(`/api/api/u/forward-last-message/${user.email}/${orderId}/${bundleName}`);
    return response;
  };
  const forwardEmailNotLogged = async () => {
    const response = await axios.post(`/api/api/u/forward-last-message/${collEmail}/${orderId}/${bundleName}`);
    return response;
  };

  // Mutation for creating the order
  const { mutate: orderMutate } = useMutation(createOrder, {
    onSuccess: (data) => {
      console.log(data, 'ORDER ORDER');
      // Handle success as per your requirement
    },
  });
   // Mutation for creating the order
   const { mutate: orderNotLoggedMutate } = useMutation(createOrderNotLoggedIn, {
    onSuccess: (data) => {
      console.log(data, 'ORDER NOT LOGGED IN');
      // Handle success as per your requirement
    },
  });
  const { mutate: forwardMutate } = useMutation(forwardEmail, {
    onSuccess: (data) => {
      console.log(data, 'email forwarded SUCCESSFULLY');
      // Handle success as per your requirement
    },
  });
  const { mutate: forwardMutateNotLogged } = useMutation(forwardEmailNotLogged, {
    onSuccess: (data) => {
      console.log(data, 'email forwarded SUCCESSFULLY NOT LOGGED IN');
      // Handle success as per your requirement
    },
  });

  // useEffect(() => {
  //   if(user){
  //     // orderMutate();
  //     assignMutate();
  //   }
  // }, [
  //   // orderMutate,
  //   assignMutate,
  //    user]); // Add orderMutate to dependency array

    //  useEffect(() => {
    //   if (user && accessTok ) {
    //     orderMutate()
    //     // assignMutate();
    //     forwardMutate()
    //   }
    // }, [ user, accessTok]);
    useEffect(() => {
      if (user && accessTok && !isMutated) {
        orderMutate();
        forwardMutate();
        assignMutate();
        setIsMutated(true);
        localStorage.removeItem('bundleName');
        localStorage.removeItem('bundleCode');
        localStorage.removeItem('bundleMarkName');
      }
      
    }, [user, accessTok, isMutated, orderMutate, 
      forwardMutate,
      assignMutate,
    ]);
    useEffect(()=>{
      if (notLoggedInUser &&!isMutated ){
        orderNotLoggedMutate();
        forwardMutateNotLogged();
        assignMutate();
        localStorage.removeItem('NotLoggedInUserId');
        localStorage.removeItem('collectedEmail');
        localStorage.removeItem('bundleName');
        localStorage.removeItem('bundleCode');
        localStorage.removeItem('bundleMarkName');



        setIsMutated(true);
      }
    }, [orderNotLoggedMutate, forwardMutateNotLogged, assignBundle,isMutated])

  return (
    <>
      <Navbar />
      <div className=" h-screen  w-full  bg-light-blue-custom flex items-center  justify-center">

        <div className=" min-h-min lg:w-1/2 sm:w-3/4 w-full py-8 px-6 rounded-[25px]   flex flex-col  shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]  items-center">
        
        <img className='h-24 w-24' src={iconok}/>
        {isExploding &&<ConfettiExplosion particleCount='250' force={0.8} width={1600} duration={3000} onComplete={()=>setIsExploding(false)}  />
 }
        <h1 className="text-black mt-[15px] font-extrabold lg:text-3xl sm:text-2xl text-xl">PAYMENT SUCCESSFUL</h1>
        <p className='text-clr-grey text-lg mt-[15px] font-semibold'>Thank You! Your payment has been successfully received.</p>
        <p className='text-grey-500 sm:text-xl text-sm leading-relaxed mt-[15px] font-semibold'>Please check your email inbox for a message from us containing a QR code to activate your eSIM. If you don't see the email in your inbox, please be sure to check your spam or junk folder.

Once you've received the email, follow the instructions provided to complete the activation process. If you encounter any issues or have questions, don't hesitate to reach out to our customer support team at etrend@support.com .</p>
        <button onClick={()=>navigate('/')} className="sm:text-2xl text-lg mt-[20px] text-white  px-[40px] pb-[15px] pt-[15px] font-medium bg-custom-pink hover:bg-custom-blue">Go Back</button>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Success;
