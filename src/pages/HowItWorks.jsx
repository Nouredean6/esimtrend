import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileOSInfo from "../components/MobileOSInfo";
import BtnContainer from "../components/BtnContainer";
import { os } from "../data";
import ContactForm from "../components/ContactForm";

const HowItWorks = () => {
  const [operatingSystem, setOperatingSystem] = useState(os);
  const [currentItem, setCurrentItem] = useState(0);
  const [toggleOperatingSystem, setToggleOperatingSystem] = useState(false);
  // console.log(toggleOperatingSystem);
  return (
    <>
      <Navbar />
      <section className="  flex flex-col items-center min-w-min justify-center lg:mx-10 mx-0 lg:h-screen h-[1080px] mt-[170px] mb-[95px]">
        {/* btn container */}
        <BtnContainer
          operatingSystem={operatingSystem}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          toggleOperatingSystem={toggleOperatingSystem}
          setToggleOperatingSystem={setToggleOperatingSystem}
        />
        {/* Operating System info */}
        <MobileOSInfo
          operatingSystem={operatingSystem}
          currentItem={currentItem}
          toggleOperatingSystem={toggleOperatingSystem}
          setToggleOperatingSystem={setToggleOperatingSystem}
        />
      </section>
      {/*FORM SECTION*/}
      {/* <div className="min-h-screen		 w-full bg-white border-solid flex justify-center items-start	">
        <div className="h-full	w-3/4	 border-solid rounded-3xl flex flex-col items-center bg-light-blue-custom ">
          <p className="text-2xl text-custom-text-color text-center font-semibold">
            Contact us
          </p>
          <h1 className="text-5xl	 text-custom-text-color-1 text-center font-bold leading-normal">
            Need some help?
          </h1>
          <p className="text-xl text-custom-text-color text-center font-normal">
            For all inquiries, please email us using the form below. Our team is
            there for you 24/7!
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
            <button className="text-white text-xl bg-pink-500 rounded-3xl p-6 font-bold">
              Send Message
            </button>
          </form>
        </div>
      </div> */}
      <ContactForm/>
      <Footer />
    </>
  );
};

export default HowItWorks;
