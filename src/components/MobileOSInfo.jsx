import Carousel from "./Carousel";
import Countries from "./Countries";
import Global from "./Global";
import Regions from "./Regions";
import { countries as data } from "../data";
import { useState } from "react";
import { useFetchCountries, useFetchRegions } from "../ReactQueryCustomHooks";
import ExpiredPlans from "./ExpiredPlans";
import CurrentPlans from "./CurrentPlans";
import SearchResults from "./SearchResults";


const MobileOSInfo = ({
  isPlans,
  isEsimPlans,
  plan,
  operatingSystem,
  currentItem,
  toggleOperatingSystem,
  setToggleOperatingSystem,
  planEsim,
  currentEsimPlan,
  toggleEsimPlan,
  setToggleEsimPlan,
  isSelectedSearch,
  countryCodeSearch
}) => {
  // COUNTRIES
  const { isLoading: allCountryIsLoading, isError:isAllCountryIsError, data:allCountryData, error:allCountryError } = useFetchCountries();

  const [countries, setCountries] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleCountry = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  //REGIONS
  // const [regions, setRegions] = useState(data);
  const { isLoading, isError, data:regionData, error } = useFetchRegions();

  const [regionActiveId, setRegionActiveId] = useState(null);

  const toggleRegion = (id) => {
    const newActiveId = id === regionActiveId ? null : id;
    setRegionActiveId(newActiveId);
  };
  //ALL COUNTRIES

  const [allCountryActiveId, setAllCountryActiveId] = useState(null);

  const toggleAllCountry = (id) => {
    const newActiveId = id === allCountryActiveId ? null : id;
    setAllCountryActiveId(newActiveId);
  };
////ESIM PLANS


  const { id, opSystem, icon, component, title } = isPlans || isEsimPlans ? {} : operatingSystem[currentItem];
  const { id: planId, title: planTitle } = isPlans ?plan: {};
  const { id: esimPlanId, title: esimPlanTitle } = isEsimPlans ?planEsim: {};


  let renderComponent = null;

  

  return (
    <>
        {isPlans && isSelectedSearch ? <SearchResults countryCodeSearch={countryCodeSearch}/> : ""}

      {isPlans && !isSelectedSearch && currentItem=== 0 ?<Countries
      countries={countries}
      allCountries={allCountryData? allCountryData: 'No data'}
      activeId={activeId}
      allCountryActiveId={allCountryActiveId}
      toggleAllCountry={toggleAllCountry}
      toggleCountry={toggleCountry}
    />: ''}
    {isPlans && !isSelectedSearch && currentItem=== 1 ?<Regions 
    regions={regionData? regionData :'No Data'}
    activeId={regionActiveId}
    toggleRegion={toggleRegion}
    />: ''}
    {isPlans && !isSelectedSearch && currentItem=== 2 ?<Global/>: ''}
      {!isPlans && !isEsimPlans && <Carousel isAndroid={title} toggleOperatingSystem={toggleOperatingSystem} />}
      {isEsimPlans && currentEsimPlan ===0 ? <ExpiredPlans />: ''}
      {isEsimPlans && currentEsimPlan ===1 ? <CurrentPlans/>: ''}

    </>    
    
  );
};

export default MobileOSInfo;
