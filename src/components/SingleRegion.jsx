import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useFetchRegionBundle, useFetchTest } from "../ReactQueryCustomHooks";
import { regionImages } from "../data";
import getCountryISO2 from 'country-iso-3-to-2';
import {useNavigate} from 'react-router-dom'
import { useBundle } from "../BundleContext";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import compatibility from '../assets/compatibility.svg';



const SingleRegion = ({ region_code,region_name, activeId,id, toggleRegion }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [regionCode, setRegionCode] = useState('na');
  const { handleToBuyBundle, bundleToBuy, setBundleToBuy } = useBundle();
  const [showAvailableCountries, setShowAvailableCountries] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState(null);  
  const {  isLoading,isError, data, error } = useFetchRegionBundle(regionCode);
  const navigate = useNavigate();
  const divRef = useRef(null);
  const [isDivClicked, setIsDivClicked] = useState(false);
  const [open1, setOpen1] = useState(false);

  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);
  
  const isActive = id === activeId;
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
    <>
      <div
        key={region_code}
        onClick={() => {
          setRegionCode(region_code);
          toggleRegion(id)
          // console.log(regionCode);
        }}
        className={`${isActive ? "h-20 cursor-pointer  flex items-center justify-around rounded-3xl	 text-black	bg-gray-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]	 p-14 " : "h-20 flex items-center justify-around rounded-3xl	 text-black	bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]	 p-14 cursor-pointer  "}`}
      >
        <div className="h-16 w-16 ">
          <img src={regionImages[id]} className=" w-14 h-14	border-2 rounded-full" />
        </div>
        <span className="font-bold text-base text-text-clr-grey	">
          {region_name}
        </span>
        <button
          className="bg-transparent  border-transparent w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-white cursor-pointer"
          
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
          <div className=" max-h-fit	 w-full	grid lg:grid-cols-3 sm:grid-cols-2	gap-10 p-8 lg:p-28 grid-flow-row-dense ">
            {isLoading && (
                    <div className="border-gray-300 justify-self-center col-span-3	  h-40 w-40 animate-spin rounded-full border-8 border-t-custom-blue" />
            )}
            {isError && <p>Error fetching bundles: {error.message}</p>}
            {data && data.bundles.map((item, index)=>{
                  const {bundle_marketing_name,bundle_name,data_unit,gprs_limit,reseller_retail_price,validity,country_name, country_code } = item;
                  return(
                    <div className="min-h-min bg-white  relative rounded-xl  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 ">
              <div className="flex gap-6 w-full h-24  relative ">
                
                <img className='rounded-full w-14 h-14 self-center' src={regionImages[id]} />
                <span className="self-center text-lg font-semibold text-black">{bundle_marketing_name}</span>
                <span className="absolute text-2xl font-bold text-black top-1 right-7">{gprs_limit + data_unit}</span>
                {/* <MdKeyboardArrowRight onClick={()=>{setIsShowing(!isShowing)}} className="absolute top-1 right-0 cursor-pointer" size={32}/> */}
              </div>
              {/* <hr className="w-[80%] pr-6 pl-6"/> */}
              <div className="flex justify-between pb-8">
              <p>{'Validity'+' '+validity + ' '+'days'}</p>
                <div className="flex  gap-3">
                
                </div>
              </div>
              <div className="flex justify-between border-8 border-solid rounded-xl bg-gray-200 p-4 mb-6">
                <p className="font-semibold">Supported country</p>
                <div className='flex relative'>
                {country_code.slice(0, 5).map((c)=>{
          return(
            
              <img className="rounded-full h-7 w-7 ml-[-5px]  "  src={`https://flagcdn.com/w2560/${getCountryISO2(c).toLowerCase()}.png`}/>
            
          )
        })}
        <button onClick={() => {setSelectedBundle(index) 
          setShowAvailableCountries(!showAvailableCountries)
          setIsDivClicked(true)
          }} className=" border-solid   border-2 h-7 w-7 rounded-full">
          +{country_code.length}
        </button>
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
              </div>
              <div className="flex w-full justify-center">
                <button className="bg-custom-blue text-white font-bold p-3  rounded-2xl w-[80%] "
                onClick={()=>{handleToBuyBundle(item)
                  onOpenModal1()

}}
                >Buy Now - {reseller_retail_price} USD</button>
                <div>
      <Modal open={open1} onClose={onCloseModal1} blockScroll={false} center
      classNames={{overlay:'overlay-cust', modal:' min-h-min rounded-[25px] shadow-none w-[550px] '}}
      
      >
        <div className="flex flex-col items-center justify-center px[25px] py-[25px]">
        <img className="transform scale-[1.2]" src={compatibility}/>
        <p className='text-black text-xl font-bold mt-[25px] mb-[20px]'>Compatible Device Check</p>
      <p className='text-lg text-text-clr-grey  mt-[25px] text-center font-normal px-[45px] '>You’re now going to purchase the
      {bundle_marketing_name} eSIM plan. Are you sure your device is compatible with eSIM?</p>
<button onClick={()=>navigate('/checkout')} className="submit-button font-bold text-xl hover:bg-custom-blue my-[15px]">Yes, continue</button>
      <p className="red-link text-lg" onClick={onCloseModal1}>No, my device is not compatible</p>
        </div>

      </Modal>
    </div>
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
  );
};

export default SingleRegion;
