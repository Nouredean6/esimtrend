import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Checkoutpage from "./pages/Checkoutpage";
import { useEffect, useState } from "react";
import Esim from "./pages/Esim";
import axios from "axios";
import { useMutation } from "react-query";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';





 import { useAuth } from "./UserContext";
import Success from "./pages/Success";
import Consuption from "./pages/Consuption";
import Test from "./pages/Test";




function App() {
  const { isLoggedIn, user,setUser, setIsLoggedIn } = useAuth();
  const orderId= uuidv4();
  // console.log(orderId, 'LOG1');
  // console.log(orderId, 'LOG2');
  const [accessToken, setAccessToken] = useState(null);
  const [refreshTokenn, setRefreshTokenn] = useState(null);

    // Function to delete tokens from localStorage
    const clearTokensFromLocalStorage = () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    };
    // Add event listener for beforeunload event
  useEffect(() => {
    const handleBeforeUnload = () => {
      clearTokensFromLocalStorage();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  useEffect(() => {
    const login = async () => {
      try {
        const response = await axios.post('https://resellerapi.montyesim.com/api/v0/Agent/login', {
          "username": "imoha.admin",
          "password": "J9kP$wX!5zR2"
        });
        const { access_token, refresh_token } = response.data;

        // Store access token and refresh token in localStorage
        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('refreshToken', refresh_token);

        // console.log('Login Successful');
        setAccessToken(access_token);
        setRefreshTokenn(refresh_token)
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    // Check if access token is available in localStorage
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    } else {
      // Perform login if access token is not available
      login();
    }
  }, []);

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('https://resellerapi.montyesim.com/api/v0/Token/Refresh', {
          refresh_token: refreshToken
        });
        const newAccessToken = response.data.access_token;
        const newRefreshToken = response.data.refresh_token;

  
        // Update access token in localStorage
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

  
        // console.log('Token refreshed successfully');
        setAccessToken(newAccessToken);
        setRefreshTokenn(newRefreshToken);

      } catch (error) {
        console.error('Token refresh failed:', error);
      }
    };
  
    // Function to refresh token and console log after 1 minute
    const refreshAndLog = async () => {
      await refreshToken(); // Refresh token
      // console.log('Token refreshed after 1 minute');
    };
  
    // Refresh token every 1 minute
    const refreshTokenInterval = setInterval(refreshAndLog, 60 * 1000);
  
    // Clean up interval when component unmounts or access token changes
    return () => clearInterval(refreshTokenInterval);
  }, [accessToken]);
  // console.log(accessToken, refreshTokenn)

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    const storedUser = localStorage.getItem('user');
    if (storedLoginStatus) {
      setIsLoggedIn(storedLoginStatus === 'true');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [setIsLoggedIn, setUser]);
  const getLoginStatus = async () => {
    const response = await axios.get('/api/api/users/loginstats');
    // console.log('Login status:', response);
    return response;
  };
  console.log('CHECK TYPEOF ENVVAR',import.meta.env.VITE_USERNAME)
  const getUser = async () => {
    const response = await axios.get('/api/api/users/getuser');
    // console.log('User data:', response);
    return response;
  };

  const { mutate: loginStatusMutation } = useMutation(getLoginStatus, {
    onSuccess: (data) => {
      // console.log('User login status:', data);
      // Perform actions based on login status, like updating state
    }
  });

  const { mutate: getUserMutation } = useMutation(getUser, {
    onSuccess: (data) => {
      // console.log('Gotten the user:', data);
      // Update user state or perform other actions
    }
  });
  // console.log(orderId, 'LOG3');


  useEffect(() => {
    loginStatusMutation();
    if (isLoggedIn && user === null) {
      getUserMutation();
    }
  }, [isLoggedIn, user, loginStatusMutation, getUserMutation]);
  return (
    <BrowserRouter>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<GoogleOAuthProvider clientId='311179414321-cjqucen9cpu2p5ci97mgkk16n0933oie.apps.googleusercontent.com'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cons" element={<Consuption />} />
        <Route path="/test" element={<Test />} />

        <Route path="plans" element={<Plans />} />
        <Route path="user-guide" element={<HowItWorks />} />
        <Route path="plans" element={<Plans />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="checkout" element={<Checkoutpage/>}/>
        <Route path="e-sim" element={<Esim/>}/>
        <Route path="success" element={<Success/>}/>

        {/* <Route path="admin/users" element={<UserManagementLayout />} />
        <Route path="admin/products" element={<ProductManagementLayout />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      </GoogleOAuthProvider>

    </BrowserRouter>
  )
}

export default App
