import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import {  useFetchAnyCountry } from "../ReactQueryCustomHooks"; 
import globalImg from '../assets/Global.svg'
import getCountryISO2 from 'country-iso-3-to-2';
import { useBundle } from "../BundleContext";

import { useNavigate } from "react-router-dom";


const SearchResults = ({countryCodeSearch}) => {
  const navigate = useNavigate()
  const [isShowing, setIsShowing] = useState(false);
  const [showAvailableCountries, setShowAvailableCountries] = useState(false);

  const [selectedBundle, setSelectedBundle] = useState(null);  
  const { anyCountIsLoading: isLoading, anyCountIsError:isError, anyCountData:data, anyCountError:error } = useFetchAnyCountry(countryCodeSearch);

  const { handleToBuyBundle, bundleToBuy, setBundleToBuy } = useBundle();
  console.log(countryCodeSearch, 'COUNTRYCODE SEARCH');
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
  return (
    <div className=" max-h-fit	 w-full	grid lg:grid-cols-3 sm:grid-cols-2	gap-10 p-8 lg:p-28 grid-flow-row-dense ">
    {isLoading && (
  <div className="border-gray-300 justify-self-center col-span-3	  h-40 w-40 animate-spin rounded-full border-8 border-t-custom-blue" />

      )}
    {isError && <p>Error fetching bundles: {error.message}</p>}
    {data && data.bundles.map((item,index)=>{
          const {bundle_marketing_name,bundle_name,data_unit,gprs_limit,reseller_retail_price,validity, country_name, country_code } = item;
          
          return(
            <div className="min-h-min bg-white shadow-2xl relative rounded-xl  shadow-custom-shadow-clr p-4 ">
      <div className="flex gap-6 w-full h-24  relative ">
        
        <img className='rounded-full w-14 h-14 self-center' src={item.bundle_category === "global" ? globalImg: `https://flagcdn.com/w2560/${getCountryISO2(countryCodeSearch).toLowerCase()}.png`} />
        <span className="self-center text-lg font-semibold text-black">{bundle_marketing_name}</span>
        <span className="absolute text-2xl font-bold text-black top-1 right-7">{gprs_limit + data_unit}</span>
        {/* <MdKeyboardArrowRight onClick={()=>{setIsShowing(!isShowing)}} className="absolute top-1 right-0 cursor-pointer" size={32}/> */}
      </div>
      {/* <hr className="w-[80%] pr-6 pl-6"/> */}
      <div className="flex justify-between pb-8 ">
      <p>{'Validity'+' '+validity + ' '+'days'}</p>
        <div className="flex  gap-3 relative ">
          {item.bundle_category === "global"? '':(
            <>
          <span >Available in</span>
                    <img className="rounded-full w-5 h-5 " src={`https://flagcdn.com/w2560/${getCountryISO2(countryCodeSearch).toLowerCase()}.png`}/>
                    </>
          )}
        
        
        {selectedBundle  === index  && isDivClicked && (
        <div ref={divRef} className="bg-white  gap-[5px] custom-scrollbar rounded-[25px] p-[20px] max-h-[300px] z-50 shadow[0 0 32px rgb(42 106 152 / 10%)] overflow-x-hidden overflow-y-scroll w-[638px] absolute top-5 right-0 grid grid-cols-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {country_code.map((c, index)=>{
            return(
              <div className="flex ">
               <img className="rounded-full h-5 w-5" src={`https://flagcdn.com/w2560/${getCountryISO2(c).toLowerCase()}.png`}/>
                <p>{country_name[index]}</p>
              </div>
            )
          })}
        </div>
         )}
        </div>
      </div>
      <div className="flex justify-between border-8 border-solid rounded-xl bg-gray-200 p-4 mb-6">
        <p className="font-semibold">Supported country</p>
        <div className='flex relative min-w-[45px] '>
        {country_code.slice(0, 5).map((c)=>{
          return(
            
              <img className="rounded-full h-7 w-7 ml-[-5px]  " src={`https://flagcdn.com/w2560/${getCountryISO2(c).toLowerCase()}.png`}/>
            
          )
        })}
        {country_code.length !== 1 &&(
          <button onClick={() => {setSelectedBundle(index) 
            setShowAvailableCountries(!showAvailableCountries)
            setIsDivClicked(true)
          }} className=" border-solid   border-2 h-7 w-7 rounded-full">
            {country_code.length == 1 ? '' : '+'+country_code.length}
          </button>
        )}
        

</div>
      </div>
      <div className="flex w-full justify-center">
        <button onClick={()=>{handleToBuyBundle(item)
                              navigate('/checkout')
        }} className="bg-custom-blue text-white p-3 font-bold  rounded-2xl w-[80%] ">Buy Now - {reseller_retail_price} USD</button>
      </div>
      {/*THIS IS THE TOGGLE THAT SHOWS INFORMATION */}
      {/* {isShowing && (
        <div className="absolute top-0 right-0 w-3/4 h-3/4  bg-gray-100">
        <div className=" w-full h-full relative">
          <IoClose onClick={()=>{setIsShowing(!isShowing)}} className="absolute top-0 right-0 cursor-pointer" size={32}/>
          <p className="text-custom-text-color text-xl font-semibold">More Info</p>
          </div>
      </div>
      )} */}
    </div>
            
            
          )
        })}
    
  </div> 
  )
}

export default SearchResults