import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MobileOSInfo from "../components/MobileOSInfo";
import BtnContainer from "../components/BtnContainer";
import { useState } from "react";
import { esimPlans } from "../data";
import Footer from "../components/Footer";

const Esim = () => {
  const navigate = useNavigate();
  const [planEsim, setPlanEsim] = useState(esimPlans);
  const [currentEsimPlan, setCurrentEsimPlan] = useState(0);
  const [toggleEsimPlan, setToggleEsimPlan] = useState(false);

  const isEsimPlans=true;
  return (
    <>
    <Navbar/>
    
    <section className="  flex flex-col items-center  justify-start min-h-min   w-full ">
      <div className="  mt-[170px] flex flex-col items-center w-full min-h-[650px] px-8">
      <div onClick={()=>navigate('/')} className='flex gap-2 self-start hover:cursor-pointer mb-7 items-center'><span className='font-medium text-custom-text-color-1 '>Home</span><MdOutlineKeyboardArrowRight size={24}/><span className='font-medium text-custom-text-color-1 '>Myesim</span></div>
    <p className="text-custom-text-color-1 text-2xl font-bold mb-4">My eSIM</p>
        {/* btn container */}

        <BtnContainer
        isEsimPlans={isEsimPlans}
          planEsim={planEsim}
          currentEsimPlan={currentEsimPlan}
          setCurrentEsimPlan={setCurrentEsimPlan}
          toggleEsimPlan={toggleEsimPlan}
          setToggleEsimPlan={setToggleEsimPlan}
        />
        {/* Operating System info */}
        <MobileOSInfo
          isEsimPlans={isEsimPlans}
          planEsim={planEsim}
          currentEsimPlan={currentEsimPlan}
          toggleEsimPlan={toggleEsimPlan}
          setToggleEsimPlan={setToggleEsimPlan}
        />
      </div>
    
      </section>
      <Footer/>
    </>
  )
}

export default Esim