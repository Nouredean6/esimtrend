import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import windowplane from '../assets/windowplane.svg'
import jumpingman from '../assets/jumpingman.png'
import pariswindow from '../assets/paris-window.svg'
import hotballon from '../assets/hot-baloon.svg'

const About = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-min w-full flex flex-col items-center justify-center mb-12 mt-20 md:mb-[50px] md:mt-[170px]">
          <p className='text-xl md:text-2xl text-custom-text-color text-center font-semibold mb-4'>Stay connected</p>
          <h1 className='text-3xl md:text-5xl text-custom-text-color-1 text-center font-bold leading-normal mb-4'>About us</h1>
          <p className='text-lg md:text-2xl text-custom-text-color text-center font-normal leading-relaxed mt-8 md:mt-[30px]'>Say goodbye to the physical SIM card and welcome to the latest innovative technology that will make your life easier than ever: eSIM!</p>
      </div>
      <div className="min-h-min w-full relative">
        <div className="min-h-min w-full flex flex-wrap justify-around  items-center">
          <img src={pariswindow} className="max-w-xs md:max-w-sm lg:max-w-lg"/>
          <h1 className='text-custom-text-color-1 text-4xl md:text-[68px] leading-normal md:leading-[80px] '>Stay<br/>Connected<br/>with<br/>Monty<br/>eSIM</h1>
        </div>
        <div className="min-h-min w-full md:w-1/2 mt-8 md:mt-16 flex flex-col ">
          <p className='mb-4 md:mb-6 text-lg md:text-xl'>Monty eSIM provides the best connectivity you can ask for, whether you’re a regular traveler, or just someone enjoying their vacation. You can now download up to 10 eSIM profiles using our app, with any compatible device, wherever you may be around the world!</p>
          <p className='text-lg md:text-xl'>Monty UK Global limited, a company incorporated under the laws of England and Wales with registration number No.8632740 and VAT 169296852 having its registered office at Bridge House, 181 Queen Victoria Street, London EC4V 4EG, United Kingdom.</p>
        </div>
        <div className='absolute bottom-0 right-0 hidden md:block'>
          <img src={hotballon}/>
        </div>
      </div>
      {/*SECTION BACKGROUND PINK*/}
      <div className='min-h-min	w-full mt-12 md:mt-[50px]'>
        <div className="h-3/4 w-full pt-10 pb-12 md:pt-[80px] md:pb-[50px] lg:flex lg:flex-row lg:flex-wrap md:gap-16 sm:flex sm:flex-col-reverse sm:items-center justify-center bg-custom-pink ">
          <div className="min-h-min">
            <img src={jumpingman} className="max-w-xs md:max-w-sm lg:max-w-lg"/>
          </div>
          <div className="min-h-min w-full lg:w-1/2 md:w-3/4 text-white text-center md:text-center ">
            <p className='text-xl md:text-2xl mb-6 font-bold lg:text-3xl leading-10 lg:leading-12'>Monty Mobile</p>
            <p className='mb-6 text-lg md:text-xl'>Monty Mobile is a global fast growing telecommunication company offering innovative technology and communication solutions. We provide cutting-edge digital products and services for mobile network operators, enterprises, and service providers across different industries.</p>
            <p className='mb-6 text-lg md:text-xl'>Our revolutionary Omni channel, messaging, and network monetization platforms, facilitate the international flow of communication globally, allowing service providers to offer an optimal customer experience while boosting their revenues through a broad variety of in-house developed state-of-the-art products.</p>
            <p className='mb-6 text-lg md:text-xl'>With its innovative solutions, professional customer service and a long-lasting thirst for improvement, Monty Mobile has grown into a key regional player in the telecommunications business, gathering under its portfolio many of the biggest mobile operators and service providers around the world.</p>
          </div>
        </div>
      </div>
      {/*LAST SECTION*/}
      <div className='min-h-min	w-full flex justify-center items-center mt-12 md:mt-0 border-solid border-8 border-emerald-500'>
        <div className="h-3/4 w-full  flex flex-wrap justify-center items-center gap-10 md:gap-28 border-solid border-8 border-yellow-500">
          <div className="min-h-min w-full md:w-1/3 lg:w-1/2 text-center md:text-left border-solid border-8 border-red-500">
            <p className='text-black text-2xl md:text-3xl mb-6'>Travel eSIM</p>
            <p className='text-lg md:text-xl mb-10'>One of the most important things that travelers take into consideration each trip is how to avoid the high roaming rates. So they either turn mobile data off and depend only on Wi-Fi which is not always available or buy local SIM card at each destination they arrive to.</p>
            <p className='text-lg md:text-xl'>But now Monty Travel eSIM is a better option they can choose. It is an international data eSIM profile, of which the traveler can download its app or visit its website to get the profile with no need to insert any physical SIM card and benefit from the most competitive roaming rates and avoid bill shock. The whole process is done via our smart system that looks to the least cost network according to the traveler destination and latches him/her to.</p>
          </div>
          <div className="min-h-min">
            <img src={windowplane} className="max-w-xs md:max-w-sm lg:max-w-lg"/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About
