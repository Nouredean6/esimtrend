import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useFetchGlobal } from "../ReactQueryCustomHooks"; 
import globalImg from '../assets/Global.svg'
import getCountryISO2 from 'country-iso-3-to-2';
import { useBundle } from "../BundleContext";
import { useNavigate } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import compatibility from '../assets/compatibility.svg';

const Global = () => {
  const navigate = useNavigate()
  const [isShowing, setIsShowing] = useState(false);
  const [showAvailableCountries, setShowAvailableCountries] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState(null);  
  const { isLoading, isError, data, error } = useFetchGlobal();
  const { handleToBuyBundle, bundleToBuy, setBundleToBuy } = useBundle();
// console.log('context',bundleToBuy )
// console.log('TESTDATA', isLoading, data);
const [open2, setOpen2] = useState(false);

const onOpenModal2 = () => setOpen2(true);
const onCloseModal2 = () => setOpen2(false);
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
    <div className=" max-h-fit	 w-full	grid lg:grid-cols-3	sm:grid-cols-2 gap-10 p-8 lg:p-28 grid-flow-row-dense ">
    {isLoading && (
  <div className="border-gray-300 justify-self-center col-span-3	  h-40 w-40 animate-spin rounded-full border-8 border-t-custom-blue" />

      )}
    {isError && <p>Error fetching bundles: {error.message}</p>}
    {data && data.bundles.map((item,index)=>{
          const {bundle_marketing_name,bundle_name,data_unit,gprs_limit,reseller_retail_price,validity, country_name, country_code } = item;
          return(
            <div className="min-h-min bg-white  relative rounded-xl   p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
      <div className="flex gap-6 w-full h-24  relative ">
      
        <img className='rounded-full w-14 h-14 self-center' src={globalImg} />
        <span className="self-center text-lg font-semibold text-black">{bundle_marketing_name}</span>
        <span className="absolute text-2xl font-bold text-black top-1 right-7">{gprs_limit + data_unit}</span>
        {/* <MdKeyboardArrowRight onClick={()=>{setIsShowing(!isShowing)}} className="absolute top-1 right-0 cursor-pointer" size={32}/> */}
      </div>
      {/* <hr className="w-[80%] pr-6 pl-6"/> */}
      <div className="flex justify-between pb-8 ">
        <p>{'Validity'+' '+validity + ' '+'days'}</p>
        <div className="flex  gap-3 relative ">
        
        </div>
      </div>
      <div className="flex justify-between border-8 border-solid rounded-xl bg-gray-200 p-4 mb-6">
        <p className="font-semibold">Supported country</p>
        <div className="flex relative ">
        {country_code.slice(0, 5).map((c)=>{
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
      <div className="flex w-full justify-center">
        <button onClick={()=>{handleToBuyBundle(item)
                              onOpenModal2()
        }} className="bg-custom-blue text-white p-3 font-bold  rounded-2xl w-[80%] ">Buy Now - {reseller_retail_price} USD</button>
        <div>
      <Modal open={open2} onClose={onCloseModal2} blockScroll={false} center
      classNames={{overlay:'overlay-cust1', modal:' min-h-min rounded-[25px] shadow-none w-[550px] '}}
      
      >
        <div className="flex flex-col items-center justify-center px[25px] py-[25px]">
        <img className="transform scale-[1.2]" src={compatibility}/>
        <p className='text-black text-xl font-bold mt-[25px] mb-[20px]'>Compatible Device Check</p>
      <p className='text-lg text-text-clr-grey  mt-[25px] text-center font-normal px-[45px] '>You’re now going to purchase the
      {bundle_marketing_name} eSIM plan. Are you sure your device is compatible with eSIM?</p>
<button onClick={()=>navigate('/checkout')} className="submit-button font-bold text-xl hover:bg-custom-blue my-[15px]">Yes, continue</button>
      <p className="red-link text-lg" onClick={onCloseModal2}>No, my device is not compatible</p>
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
  )
}

export default Global