import { useState } from "react";
import SingleCountry from "./SingleCountry";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Countries = ({ countries, activeId, toggleCountry, isHomepage, allCountryActiveId,toggleAllCountry,allCountries }) => {
  const [isAllCountriesShow, setIsAllCountriesShow] = useState(false)
  const navigate = useNavigate()
  // console.log(allCountries.countries, 'HERE IS YOUR DATA')
  const scrollToTop = () => {
    window.scrollTo({
      top: '250px',
      behavior: 'smooth'
    });
  };
  return (
    <div className="min-h-min mb-16 	 w-full bg-white border-solid flex justify-center items-start 	">

      <div className="min-h-min	w-full border-solid flex flex-col items-center  ">
        {isHomepage && (
          <>
          <p className="text-lg mb-[15px] lg:text-2xl text-custom-text-color text-center font-semibold">
          Here are some of our bestsellers
        </p>
        <h1 className="text-3xl lg:text-5xl	 text-custom-text-color-1 text-center font-bold leading-normal mb-[25px] lg:mb-0			">
          Travel carefree with
          <br />
          Monty eSIM!
        </h1>
        </>
        )}
        
        <div className=" max-h-fit	 w-full	grid lg:grid-cols-3 sm:grid-cols-2	gap-10 lg:p-28 grid-flow-row-dense ">
          {!isAllCountriesShow && countries.map((c) => {
            return (
              <SingleCountry
                key={c.id}
                {...c}
                activeId={activeId}
                toggleCountry={toggleCountry}
                isAllCountriesShow={isAllCountriesShow}

              ></SingleCountry>
            );
          })}
          {isAllCountriesShow && allCountries &&  allCountries.countries && allCountries.countries.map((allC, index) => {
            // if (r.region_name === "Australia") {
            //   return null; 
            // }
            return (
              <SingleCountry
                id={index}
                key={index}
                {...allC}
                allCountryActiveId={allCountryActiveId}
                toggleAllCountry={toggleAllCountry}
                activeId={activeId}
                toggleCountry={toggleCountry}
                isAllCountriesShow={isAllCountriesShow}
              ></SingleCountry>
            );
          })}
        </div>
        {isHomepage ? (
          <button onClick={()=>{navigate('/plans')}} className="rounded-[42px] h-[59px] w-[296px] text-[18px] border-none bg-custom-pink font-bold hover:bg-custom-blue text-white lg:mt-0 mt-[49px]">
            View all countries
          </button>
        ):(
          <button onClick={()=>{
            setIsAllCountriesShow(!isAllCountriesShow)
            scrollToTop()
            }} className="rounded-[42px] h-[59px] w-[296px] text-[18px] border-none bg-custom-pink font-bold hover:bg-custom-blue text-white lg:mt-0 mt-[49px]">
            {isAllCountriesShow ? 'View Popular Countries':'View all countries'}
          </button>
        )}

        
      </div>
    </div>
  );
};

export default Countries;
