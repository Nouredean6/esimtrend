import ma from "../assets/ma.png";
import userguide from "../assets/user-guide.jpg";
import sectionimg from "../assets/section-img.png";
import landmarks from "../assets/landmarks.png";
import car from '../assets/car.gif';
import carShadow from '../assets/carShadow.svg';


import { nanoid } from "nanoid";
import Navbar from "../components/Navbar";
import { countries, benifits } from "../data";
import Footer from "../components/Footer";
import { ReactTyped } from "react-typed";
import {
  AttentionSeeker,
  Bounce,
  Fade,
  Flip,
  JackInTheBox,
  Roll,
  Slide,
} from "react-awesome-reveal";
import Countries from "../components/Countries";
import { useState } from "react";
import { countries as data } from "../data";
import { useBundle } from "../BundleContext";
import {useNavigate} from 'react-router-dom'
import ContactForm from "../components/ContactForm";

const Home = () => {
  const isHomepage = true;
  const [countries, setCountries] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const { handleToBuyBundle, bundleToBuy, setBundleToBuy } = useBundle();
  const navigate = useNavigate();


  const toggleCountry = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  // console.log('CONTEXT IN HOMEPAGE',bundleToBuy)
  return (
    <>
      {/* NAVBAR */}
      {/*HERO WITH BACKGROUND IMG*/}
      <div
        className="flex overflow-hidden  w-full mb-[80px] items-start justify-center    min-h-screen     relative"
      >
        <div className="absolute z-[1] h-full w-full custom-gradient"></div>
        <div className="w-full  h-full flex items-center justify-center  absolute lg:top-[250%] sm:top-[250%] top-[240%] border-solid border-8 border-red-500 animate-[rotation_60s_linear_infinite]  ">
        <img className=" transform lg:scale-[2.5] sm:scale-[8] scale-[12] " src={landmarks}/>
        </div>
        <div className="w-full flex flex-col items-center z-[2]  justify-end  h-full absolute ">
          <img src={car} className=" lg:w-1/3  lg:mb-0 mb-5"/>
          <img src={carShadow} className="w-1/3"/>
        </div>

        <Navbar isHomepage={isHomepage} />
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="z-[3] flex 	  mt-[50px] lg:mt-0 lg:items-center   justify-center max-w-screen-lg gap-4 p-4 text-center text-neutral-content">
          <div className="max-w-full lg:mt-[150px]  ">
            <h1 className="  text-4xl text-white  leading-normal lg:mb-5 mb-[25px] lg:text-[4.5rem] font-bold lg:leading-relaxed">
              
                  Make the switch, and stay <br/>connected at all times
                
            </h1>
            {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            <button onClick={()=>navigate('/plans')}className=" rounded-[42px] h-[59px] w-[296px] text-[18px] border-none bg-custom-pink hover:bg-custom-blue">View all plans</button>
          </div>
        </div>
      </div>
      {/*POPULAR DESTINATIONS*/}
      
        <Countries
          isHomepage={isHomepage}
          countries={countries}
          activeId={activeId}
          toggleCountry={toggleCountry}
        />
      

      {/* BACKGROUND TEST */}
      {/* <div className="h-screen 
bg-hero-image bg-auto		bg-center	 
bg-no-repeat"> */}

      {/* </div> */}
      {/*SECTION*/}
      
        <div className="min-h-min	bg-white	 w-full flex flex-col lg:flex-row justify-center items-center gap-16">
          <div className="min-h-min  ">
            <img src={sectionimg} />
          </div>
          <div className="min-h-min w-full lg:w-1/2 ">
            <div className="h-1/2 w-full mb-[25px]">
              <p className="text-lg text-center lg:text-left lg:text-2xl text-custom-text-color  font-semibold">
                Easy and fast
              </p>
              <h1 className="text-4xl lg:text-5xl text-center lg:text-left	 text-custom-text-color-1  font-bold leading-normal">
                Unlock endless
                <br />
                Benifits
              </h1>
            </div>
            <div className="min-h-min w-full  ">
              {benifits.map((b) => {
                const { title, description, icon } = b;
                const id = nanoid();
                return (
                  <div className="flex gap-4 lg:gap-8 p-4 lg:p-0">
                    <div key={id} className="h-1/2  ">
                      <img src={icon} />
                    </div>
                    <div className="h-1/2 w-full lg:w-2/3 ">
                      <p className="text-lg  text-custom-text-color text-justify font-semibold">
                        {title}
                      </p>
                      <p className="text-base lg:text-lg text-custom-text-color justify- font-normal">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      {/*HOW IT WORKS*/}
        <div className="lg:min-h-screen min-h-min 	bg-white	 w-full   flex justify-center items-start lg:mt-[80px]	">
          <div className="h-full w-full p-8 lg:p-0	lg:w-3/4	 border-solid rounded-3xl flex flex-col items-center">
            <p className="text-lg lg:text-2xl text-custom-text-color text-center font-semibold leading-normal lg:leading-relaxed mb-[15px] lg:mb-0">
              Monty eSIM
            </p>
            <h1 className="text-4xl lg:text- mb-[15px] lg:mb-0	 text-custom-text-color-1 text-center font-bold  lg:leading-relaxed">
              How to set up your eSIM?
            </h1>
            <p className="text-xl text-custom-text-color text-center font-normal mb-[25px]  ">
              Whether you’re an iPhone or an Android user, here’s how it works
            </p>
            <button className="text-white text-xl   rounded-[42px] h-[59px] w-[296px] text-[18px] border-none bg-custom-pink hover:bg-custom-blue font-bold mb-[25px]">
              Learn more
            </button>
            <img className="mt-[20px] lg:mt-0" src={userguide}  />
          </div>
        </div>
      {/*FORM SECTION*/}
      
        {/* <div className="min-h-screen bg-white		 w-full   flex justify-center items-start mb-[70px] lg:mb-0	">
          <div className="h-full	w-3/4	 border-solid rounded-3xl flex flex-col items-center bg-light-blue-custom ">
            <p className="text-2xl text-custom-text-color text-center font-semibold">
              Contact us
            </p>
            <h1 className="text-5xl	 text-custom-text-color-1 text-center font-bold leading-normal">
              Need some help?
            </h1>
            <p className="text-xl text-custom-text-color text-center font-normal">
              For all inquiries, please email us using the form below. Our team
              is there for you 24/7!
            </p>
            <form className="flex flex-col justify-evenly gap-6  items-center  w-3/4 min-h-min">
              <label>Subject</label>
              <input
                className="w-full pr-8 shadow-2xl  shadow-custom-shadow-clr	 pl-8 pt-5 pb-5 rounded-2xl outline-none"
                type="text"
                name="subject"
                required
              />
              <label>Message</label>
              <textarea
                className="w-full shadow-2xl  shadow-custom-shadow-clr	  rounded-2xl resize-none pr-8 pl-8 pt-5 pb-5 border-none outline-none"
                required
              ></textarea>
              <button className="text-white text-xl rounded-[42px] h-[59px] w-[296px] text-[18px] border-none bg-custom-pink hover:bg-custom-blue font-bold">
                Send Message
              </button>
            </form>
          </div>
        </div> */}
        {/* FORM FORM */}
        <ContactForm/>
        
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
