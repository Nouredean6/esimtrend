import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import logowhite from "../assets/shit.png";
import { Link, useParams } from "react-router-dom";
import ScrollToTopOnNavigate from "./ScrollToTopOnNavigate";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useMutation } from "react-query";
import { ShowOnLogin, ShowOnLogout } from "./HiddenLink";
import { useAuth } from "../UserContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios'



const Navbar = ({ isHomepage, isSigninPage }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isShowingSidebar, setIsShowingSidebar] = useState(false)
  const [isToggleDropdown, setIsToggleDropdown] = useState(false)
  const { isLoggedIn,setIsLoggedIn, user, setUser } = useAuth();
  const divRef = useRef(null);
  const divRefNav=useRef(null);
  const [isDivClicked, setIsDivClicked] = useState(false);
  const [isDivNavClicked, setIsDivNavClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsDivClicked(false); // Clicked outside the div, so update state
        setIsToggleDropdown(false)

      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRefNav.current && !divRefNav.current.contains(event.target)) {
        setIsDivNavClicked(false); // Clicked outside the div, so update state
        // setIsToggleDropdown(false)
        setIsShowingSidebar(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const toggleNav = () => setIsNavVisible(!isNavVisible);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const logout = async () => {
    const response = await axios.post(`/api/api/users/logout`);
    console.log(response.data);
    return response;
  };
   // Mutation for logging out the user
   const { mutate: logoutMutate } = useMutation(logout, {
    onSuccess: (data) => {
      console.log(data);
      if (data.statusText === 'OK') {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        navigate('/');
      }
    },
  });
  const handleLogout = (event) => {
    event.preventDefault();
    logoutMutate();
  };

  return (  
    <>
    <div
      className={`navbar z-50 bg-transparent fixed top-0 lg:px-32 ${isScrolled ? "bg-white shadow shadow-" : ""}`}
    >
      <div className="navbar-start">
        <Link to="/">
          <img
            src={isHomepage ? (isScrolled ? logo : logowhite) : logo}
            alt="Logo"
            className="lg:h-24 h-12	 w-auto"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <ScrollToTopOnNavigate />
          <li>
            <Link
              to="/plans"
              className={`${isHomepage ? (isScrolled ? "text-lg text-black font-medium" : "text-lg text-white font-medium") : "text-lg text-black font-medium"}`}
            >
              Plans
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/user-guide"
              className={`${isHomepage ? (isScrolled ? "text-lg text-black font-medium" : "text-lg text-white font-medium") : "text-lg text-black font-medium"}`}
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`${isHomepage ? (isScrolled ? "text-lg text-black font-medium" : "text-lg text-white font-medium") : "text-lg text-black font-medium"}`}
            >
              {" "}
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`${isHomepage ? (isScrolled ? "text-lg text-black font-medium" : "text-lg text-white font-medium") : "text-lg text-black font-medium"}`}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <ShowOnLogout>
      {!isSigninPage && <Link
          to="/sign-in"
          className=" text-lg text-white  rounded-[25px] px-[30px] pb-[7px] pt-[7px] font-medium bg-custom-pink hidden lg:flex	"
        >
          {" "}
          Sign in
        </Link> }
        </ShowOnLogout>
        {/*THIS IS USER DROPDOWN ICON */}
        <ShowOnLogin>
        <div onClick={()=>{
          setIsToggleDropdown(!isToggleDropdown)
          setIsDivClicked(true)
          }} className="h-10 w-10 relative rounded-full bg-light-blue-custom flex justify-center items-center hover:cursor-pointer  ">
        <FaRegUser size={16}/>
        {isToggleDropdown &&<div ref={divRef} className="hover:cursor-default absolute px-2 py-2 top-0 mt-16 -right-14  h-56 w-96 shadow-custom rounded-3xl   ">
          <div className="h-full w-full bg-light-blue-custom rounded-3xl">
            <p className="text-custom-text-color-1 font-semibold text-base mb-4">{user.email}</p>
            <div className="flex flex-col">
            <button className="border-2 border-solid px-2 py-4 bg-slate-300 text-white" onClick={()=>navigate('/e-sim')}>My eSIM</button>
            <button className="border-2 border-solid px-2 py-4 bg-slate-300 text-white" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
}
        </div>
        </ShowOnLogin>
        
        <button className="lg:hidden" onClick={()=>{setIsShowingSidebar(!isShowingSidebar)}}>
        <TiThMenu size={28} color={`${isHomepage ?(isScrolled ? 'black': 'white'):'black'} `}/>
        </button>
      </div>
    </div>
    <div>
    <aside ref={divRefNav} class={`${isShowingSidebar ? ' transform translate-x-0 z-50 bg-gray-100  fixed top-0 right-0 w-2/3 sm:w-1/2 h-full transition-all duration-200 ease-linear  px-1' : ' transform translate-x-[100%]  fixed top-0 right-0 w-2/3 h-full transition-all duration-200 ease-linear  px-1'} `} >
      <div className="flex flex-col justify-start h-full items-center px-2 pt-[100px] relative">
        <button className="absolute top-6 right-2"><IoMdClose onClick={()=>{setIsShowingSidebar(!isShowingSidebar)}} color='black'size={28}/></button>
      
        <ul className="flex flex-col gap-10 w-full px-6 ">
          <ScrollToTopOnNavigate />
          <li className="flex justify-between">
            <Link
              to="/plans"
              className={`${isHomepage ? ( "text-lg text-black font-medium" ) : "text-lg text-black font-medium"}`}
            >
              Plans
            </Link>{" "}
            <span><MdOutlineKeyboardArrowRight size={28}/></span>
          </li>
          <li className="flex justify-between">
            <Link
              to="/user-guide"
              className={`${isHomepage ? ( "text-lg text-black font-medium" ) : "text-lg text-black font-medium"}`}
            >
              How it works
            </Link>
            <span><MdOutlineKeyboardArrowRight size={28}/></span>

          </li>
          <li className="flex justify-between">
            <Link
              to="/about-us"
              className={`${isHomepage ? ( "text-lg text-black font-medium" ) : "text-lg text-black font-medium"}`}
            >
              {" "}
              About us
            </Link>
            <span><MdOutlineKeyboardArrowRight size={28}/></span>

          </li>
          <li className="flex justify-between">
            <Link
              to="/contact-us"
              className={`${isHomepage ? ( "text-lg text-black font-medium" ) : "text-lg text-black font-medium"}`}
            >
              Contact us
            </Link>
            <span><MdOutlineKeyboardArrowRight size={28}/></span>

          </li>
          <li className="self-center">
          <Link
          to="/sign-in"
          className="text-lg text-white  rounded-[25px] px-[30px] pb-[7px] pt-[7px] font-medium bg-custom-pink  lg:flex		"
        >
          {" "}
          Sign in
        </Link>
          </li>
        </ul>
      </div>
    </aside>
    <div className={`${isShowingSidebar? ' w-1/3 sm:w-1/2  h-full fixed top-0 left-0 z-50 backdrop-brightness-50 transition-all duration-300 ease-linear' : 'hidden'}`}></div>
    </div>
    </>
  );
};

export default Navbar;
