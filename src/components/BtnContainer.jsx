import { useState } from "react";
import { MdSearch } from "react-icons/md";
import Select from 'react-select'
import { countriesSearch } from "../data";


const BtnContainer = ({
  isPlans,
  isEsimPlans,
  plan,
  operatingSystem,
  currentItem,
  setCurrentItem,
  setToggleOperatingSystem,
  toggleOperatingSystem,
  planEsim,
  currentEsimPlan,
  setCurrentEsimPlan,
  setIsSelectedSearch,
  isSelectedSearch,
  setCountryCodeSearch
  // toggleEsimPlan,
  // setToggleEsimPlan
}) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const options = countriesSearch
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  // const [isSelected, setIsSelected] = useState(false);
  const handleChange = (selectedOption) => {
    if(selectedOption !== null){
      setIsSelectedSearch(true)
      setCountryCodeSearch(selectedOption.value)
    }else{
      setIsSelectedSearch(false)
    }
    setSelectedOption(selectedOption);
    // console.log('Selected Option:', selectedOption.value);
  };
  // console.log(setIsSelectedSearch, 'HERE IS STATE SELECTED');
  return (
    <div className='    sm:w-full w-full lg:w-auto lg:flex lg:flex-row flex flex-col lg:gap-0 gap-4 relative items-center   border-solid border-transparent border-8  '>
      {/* SEARCH  */}
      {isPlans && (
        <div className={` flex lg:order-none order-1 lg:absolute items-center border-8 transition-all duration-1000 ease-linear border-solid border-transparent shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  bg-white h-12 rounded-full     cursor-pointer  ${
          isSearchActive ? 'lg:w-full w-3/4 z-50 justify-start ' : 'lg:w-12 w-3/4 lg:justify-center  '
        }`} >
              <MdSearch onClick={()=>setIsSearchActive(!isSearchActive)} size={28} className=" text-custom-text-color-1 "/>
              <Select className="w-full lg:hidden " options={options}        
              value={selectedOption}
              onChange={handleChange}
              isClearable={isClearable}
              isSearchable={isSearchable}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderStyle: 'none',
      
                  outline:'none',
                  
                  width:'100%' ,
                }),
              }}
              />
              {isSearchActive && <Select className="w-full hidden lg:block" options={options}        
              value={selectedOption}
              onChange={handleChange}
              isClearable={isClearable}
              isSearchable={isSearchable}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderStyle: 'none',
      
                  outline:'none',
                  
                  width:'100%' ,
                }),
              }}
              />}
             </div>
      )}
      
       {/* REST */}
       <div className="    flex lg:min-w-min sm:w-3/4 w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-[50px]   rounded-2xl text-xl font-medium gap-6 lg:gap-0    border-solid border-8 border-transparent lg:justify-normal sm:justify-around">
      
      {isEsimPlans ? (planEsim.map((p, index) => {
        return (
          <button
            key={p.id}
            onClick={() => {
              setCurrentEsimPlan(index);
              // setToggleOperatingSystem(!toggleOperatingSystem);
            }}
            className={
              index === currentEsimPlan
                ? " lg:w-[200px] min-w-min rounded-2xl  text-custom-text-color border-b-4 border-solid border-custom-blue"
                : " lg:w-[200px] min-w-min rounded-2xl"
            }
          >
            {p.title}
          </button>
        );
      })) :isPlans ? 
      (plan.map((p, index) => {
        return (
          <button
            key={p.id}
            onClick={() => {
              setCurrentItem(index);
              // setToggleOperatingSystem(!toggleOperatingSystem);
            }}
            className={
              index === currentItem
                ? " lg:w-[200px] min-w-min rounded-2xl  text-custom-text-color border-b-4 border-solid border-custom-blue"
                : " lg:w-[200px] min-w-min rounded-2xl"
            }
          >
            {p.title}
          </button>
        );
      })):
      (
        operatingSystem.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentItem(index);
                setToggleOperatingSystem(!toggleOperatingSystem);
              }}
              className={
                index === currentItem
                  ? " lg:w-[200px] w-[80px] border-b-4 border-solid border-custom-blue  rounded-2xl font-semibold  text-custom-text-color"
                  : " lg:w-[200px] w-[80px]  rounded-2xl"
              }
            >
              {item.opSystem}
            </button>
          );
        })
      ) }
      {/* <div
        style={{
          transform: currentItem ? "translateX(110%)" : "translateX(5%)",
        }}
        className="absolute  bg-blue-900 z-[-1] rounded-full transition duration-250 ease-out top-0 left-0 w-1/2 h-full"
      ></div> */}
    </div>
    </div>
    
  );
};

export default BtnContainer;
