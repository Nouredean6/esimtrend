import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import getCountryISO2 from 'country-iso-3-to-2';

import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useFetchAnyCountry, useFetchTest } from "../ReactQueryCustomHooks";
import { useBundle } from "../BundleContext";
import { useNavigate } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import compatibility from '../assets/compatibility.svg';




const SingleCountry = ({ isAllCountriesShow,id, country,code, img, activeId, toggleCountry,allCountryActiveId,toggleAllCountry,country_name,iso2_code,iso3_code }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [countryCode, setCountryCode] = useState('CAN');
  const [selectedBundle, setSelectedBundle] = useState(null);  
  const [showAvailableCountries, setShowAvailableCountries] = useState(false);
  const divRef = useRef(null);
  const [isDivClicked, setIsDivClicked] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsDivClicked(false); // Clicked outside the div, so update state
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // const { isLoading:countIsLoading, isError:countIsError, data:countData, error:countError } = useFetchTest(countryCode);
  const { anyCountIsLoading, anyCountIsError, anyCountData, anyCountError } = useFetchAnyCountry(countryCode);
// if(anyCountData.bundles){
  console.log(anyCountData, 'here is country all data fuck')
// }
  const { handleToBuyBundle, bundleToBuy, setBundleToBuy } = useBundle();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);



// console.log('ALLCOUNTRUIES', isLoading, data);
  
  const isActive = id === activeId;

  return (
    <>
    {!isAllCountriesShow && (
      <>
      <div
      key={id}
      onClick={() => {
        setCountryCode(code);
        toggleCountry(id)
      }}
      className={`${isActive ? "h-20 cursor-pointer  flex items-center justify-around rounded-3xl	 text-black	bg-gray-100  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]	 p-14 " : "h-20 flex cursor-pointer items-center justify-around rounded-3xl	 text-black	bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]	 p-14  "}`}
    >
      <div className="h-16 w-16 ">
        <img src={img} className=" w-14 h-14	border-2 rounded-full" />
      </div>
      <span className="font-bold text-base text-text-clr-grey	">
        {country}
      </span>
      <button
        className="bg-transparent border-transparent w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-white cursor-pointer"
        // onClick={() => {
        //   setCountryCode(code);
        //   toggleCountry(id)
        // }}
      >
        {isActive ? (
          <RiArrowDownSLine
            size={28}
            className="text-text-clr-grey transform rotate-180"
          />
        ) : (
          <RiArrowDownSLine
            size={28}
            className="text-text-clr-grey transition-all duration-300"
          />
        )}
      </button>
    </div>
    <div className={`${isActive ? " min-h-min lg:col-span-3	sm:col-span-2			" : " hidden	 "}`}>
      {isActive && (
        <div className=" max-h-fit	 w-full	grid lg:grid-cols-3 sm:grid-cols-2	gap-10 p-8 lg:p-28 grid-flow-row-dense ">
          {anyCountIsLoading && (
    <div className="border-gray-300 justify-self-center col-span-3	  h-40 w-40 animate-spin rounded-full border-8 border-t-custom-blue" />

          )}
          {anyCountIsError && <p>Error fetching bundles: {anyCountError.message}</p>}
          {anyCountData && anyCountData.bundles
  .filter(item => item.bundle_category === "country")
  .map((item) => {
    const {bundle_marketing_name, bundle_name, data_unit, gprs_limit, reseller_retail_price, validity} = item;
    return (
      <div className="min-h-min bg-white relative rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 ">
        <div className="flex gap-6 w-full h-24 relative ">
          <img className='rounded-full w-14 h-14 self-center' src={img}/>
          <span className="self-center text-lg font-semibold text-black">{bundle_marketing_name}</span>
          <span className="absolute text-2xl font-bold text-black top-1 right-7">{gprs_limit + data_unit}</span>
        </div>
        <div className="flex justify-between pb-8">
          <p>{'Validity' + ' ' + validity + ' ' + 'days'}</p>
          <div className="flex gap-3">
            <span>Available in</span>
            <img className="rounded-full w-5 h-5 " src={img}/>
          </div>
        </div>
        <div className="flex justify-between border-8 border-solid rounded-xl bg-gray-200 p-4 mb-6">
          <p className="font-semibold">Supported country</p>
          <img className="rounded-full w-6 h-6 " src={img}/>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-custom-blue text-white p-3 font-bold rounded-2xl w-[80%]"
            onClick={() => {
              handleToBuyBundle(item)
              onOpenModal()
            }}>Buy Now - {reseller_retail_price} USD</button>
          <div>
            <Modal open={open} onClose={onCloseModal} blockScroll={false} center
              classNames={{overlay: 'overlay-cust', modal: ' min-h-min rounded-[25px] shadow-none lg:w-[550px] w-full mx-[15px]'}}
            >
              <div className="flex flex-col items-center justify-center px[25px] py-[25px]">
                <img className="transform scale-[1.2]" src={compatibility}/>
                <p className='text-black text-xl font-bold mt-[25px] mb-[20px]'>Compatible Device Check</p>
                <p className='text-lg text-text-clr-grey  mt-[25px] text-center font-normal px-[45px] '>You’re now going to purchase the
                  {bundle_marketing_name} eSIM plan. Are you sure your device is compatible with eSIM?</p>
                <button onClick={() => navigate('/checkout')} className="submit-button font-bold text-xl hover:bg-custom-blue my-[15px]">Yes, continue</button>
                <p className="red-link text-lg" onClick={onCloseModal}>No, my device is not compatible</p>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    )
  })}

          
        </div>
      )}
    </div>
    </>
    )}
    {isAllCountriesShow && (
      <>
      <div
      key={id}
      onClick={() => {
        setCountryCode(iso3_code);
        toggleCountry(id)
      }}
      className={`${isActive ? "h-20 cursor-pointer  flex items-center justify-around rounded-3xl	 text-black	bg-gray-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]	 p-14 " : "h-20 flex items-center justify-around rounded-3xl cursor-pointer	 text-black	bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]	 p-14  "}`}
    >
      <div className="h-16 w-16 ">
        <img src={`https://flagcdn.com/w2560/${iso2_code.toLowerCase()}.png`} className=" w-14 h-14	border-2 rounded-full" />
      </div>
      <span className="font-bold text-base text-text-clr-grey	">
        {country_name}
      </span>
      <button
        className="bg-transparent border-transparent w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-white cursor-pointer"
        // onClick={() => {
        //   setCountryCode(iso3_code);
        //   toggleCountry(id)
        // }}
      >
        {isActive ? (
          <RiArrowDownSLine
            size={28}
            className="text-text-clr-grey transform rotate-180"
          />
        ) : (
          <RiArrowDownSLine
            size={28}
            className="text-text-clr-grey transition-all duration-300"
          />
        )}
      </button>
    </div>
    <div className={`${isActive ? " min-h-min lg:col-span-3 sm:col-span-2				" : " hidden	 "}`}>
      {isActive && (
        <div className=" max-h-fit	 w-full	grid lg:grid-cols-3	gap-10 p-8 lg:p-28 grid-flow-row-dense ">
          {anyCountIsLoading && (
    <div className="border-gray-300 justify-self-center col-span-3	  h-40 w-40 animate-spin rounded-full border-8 border-t-custom-blue" />

          )}
          {anyCountIsError && <p>Error fetching bundles: {anyCountError.message}</p>}
          {anyCountData && anyCountData.bundles.map((item,index)=>{
                const {bundle_marketing_name,country_code,bundle_name,data_unit,gprs_limit,reseller_retail_price,validity, country_name } = item;
                return(
                  <div className="min-h-min bg-white relative rounded-xl   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 ">
            <div className="flex gap-6 w-full h-24   relative ">
              
              <img className='rounded-full w-14 h-14 self-center' src={`https://flagcdn.com/w2560/${iso2_code.toLowerCase()}.png`}/>
              <span className="self-center text-lg font-semibold text-black">{bundle_marketing_name}</span>
              <span className="absolute text-2xl font-bold text-black top-1 right-7">{gprs_limit + data_unit}</span>
              {/* <MdKeyboardArrowRight onClick={()=>{setIsShowing(!isShowing)}} className="absolute top-1 right-0 cursor-pointer " size={32}/> */}
            </div>
            {/* <hr className="w-[80%] pr-6 pl-6"/> */}
            <div className="flex justify-between pb-8">
            <p>{'Validity'+' '+validity + ' '+'days'}</p>
              <div className="flex  gap-3">
              <span>Available in</span>
              
              <img className="rounded-full w-5 h-5 " src={`https://flagcdn.com/w2560/${iso2_code.toLowerCase()}.png`}/>
              </div>
            </div>
            <div className="flex justify-between border-8 border-solid rounded-xl bg-gray-200 p-4 mb-6">
              <p className="font-semibold">Supported country</p>
              <div className="flex relative">
              {country_code.slice(0, 5).map((c, index)=>{
          return(
                                <img className="rounded-full h-7 w-7 ml-[-5px]  " src={`https://flagcdn.com/w2560/${getCountryISO2(c).toLowerCase()}.png`}/>

            
          )
        })}
        <button onClick={() => {setSelectedBundle(index) 
          setShowAvailableCountries(!showAvailableCountries)
          setIsDivClicked(true)
        }} className=" border-solid   border-2 h-7 w-7 rounded-full">
          +{country_code.length}
        </button>
              </div>
              
        
        {selectedBundle  === index  && isDivClicked && (
        <div ref={divRef} className="bg-white  gap-[5px] custom-scrollbar rounded-[25px] p-[20px] max-h-[300px] z-50 shadow[0 0 32px rgb(42 106 152 / 10%)] overflow-x-hidden overflow-y-scroll w-[638px] absolute top-5 right-0 grid grid-cols-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {country_code.map((c, index)=>{
            return(
              <div className="flex gap-[7px] ">
               <img className="rounded-full h-5 w-5" src={`https://flagcdn.com/w2560/${getCountryISO2(c).toLowerCase()}.png`}/>
                <p>{country_name[index]}</p>
              </div>
            )
          })}
        </div>
         )}
            </div>
            <div className="flex w-full justify-center">
              <button className="bg-custom-blue text-white p-3 font-bold  rounded-2xl w-[80%] "
              onClick={()=>{handleToBuyBundle(item)
                navigate('/checkout')
}}>Buy Now - {reseller_retail_price} USD</button>
            </div>
            {/*THIS IS THE TOGGLE THAT SHOWS INFORMATION */}
            {isShowing && (
              <div className="absolute top-0 right-0 w-3/4 h-3/4  bg-gray-100">
              <div className=" w-full h-full relative">
                <IoClose onClick={()=>{setIsShowing(!isShowing)}} className="absolute top-0 right-0 cursor-pointer" size={32}/>
                <p className="text-custom-text-color text-xl font-semibold">More Info</p>
                </div>
            </div>
            )}
          </div>
                  
                  
                )
              })}
          
        </div>
      )}
    </div>
    </>
    )}
      
    </>
  );
};

export default SingleCountry;
