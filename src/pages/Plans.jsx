import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import {useState} from 'react'
import MobileOSInfo from "../components/MobileOSInfo";
import BtnContainer from "../components/BtnContainer";
import { os, planTabTitles } from "../data";

const Plans = () => {
  const [operatingSystem, setOperatingSystem] = useState(os);
  const [plan, setPlan] = useState(planTabTitles);

  const [currentItem, setCurrentItem] = useState(0);
  const [toggleOperatingSystem, setToggleOperatingSystem] = useState(false);
  const [isSelectedSearch, setIsSelectedSearch] = useState(false)
  const [countryCodeSearch, setCountryCodeSearch] = useState('')
  const isPlans = true;
  // console.log(typeof(currentItem));
  return (
    <>

      <Navbar />
      <div className="min-h-min w-full flex flex-col items-center justify-center mb-12 mt-20 md:mb-[50px] md:mt-[170px] ">

          <h1 className='text-3xl md:text-5xl text-custom-text-color-1 text-center font-bold leading-normal mb-4'>Choose your plan</h1>
          <p className='text-lg md:text-2xl text-custom-text-color text-center font-normal leading-relaxed mt-8 md:mt-[30px]'>Please<span className='font-semibold text-custom-text-color-1 pr-2 pl-2 '>dial *#06#</span>to check device compatibility, if EID exist then your device is compatible</p>
      </div>
      <section className="  flex flex-col items-center justify-center min-h-min mt-[170px] mb-[95px]">
        {/* btn container */}
        <BtnContainer
          isPlans={isPlans}
          plan={plan}
          operatingSystem={operatingSystem}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          toggleOperatingSystem={toggleOperatingSystem}
          setToggleOperatingSystem={setToggleOperatingSystem}
          isSelectedSearch={isSelectedSearch}
          setIsSelectedSearch={setIsSelectedSearch}
          setCountryCodeSearch={setCountryCodeSearch}
        />
        {/* Operating System info */}
        <MobileOSInfo
          isPlans={isPlans}
          plan={plan}
          operatingSystem={operatingSystem}
          currentItem={currentItem}
          toggleOperatingSystem={toggleOperatingSystem}
          setToggleOperatingSystem={setToggleOperatingSystem}
          isSelectedSearch={isSelectedSearch}
          countryCodeSearch={countryCodeSearch}
        />
      </section>
      <Footer />
    </>
  );
};

export default Plans;
