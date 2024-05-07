import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="min-h-96 w-full bg-custom-blue flex flex-wrap justify-evenly items-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col gap-8 items-center">
          <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center">
            <MdLocalPhone size={32} className="text-custom-blue" />
          </div>
          <p className="text-xl text-white">Phone</p>
          <a className="text-lg text-white">+44 207 370 53 10</a>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col gap-8 items-center">
          <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center">
            <MdOutlineEmail size={32} className="text-custom-blue" />
          </div>
          <p className="text-xl text-white">Email</p>
          <a className="text-lg text-white">support@montyesim.com</a>
        </div>

        <div className="w-full flex sm:w-1/2 md:w-1/3 lg:w-1/4 p-4  flex-col gap-8 items-center">
          <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center">
            <MdOutlineLocationOn size={32} className="text-custom-blue" />
          </div>
          <p className="text-xl text-white">Office</p>
          <a className="text-lg text-white">
            Headquarters, Bridge House, <br />
            181 Queen Victoria Street, London EC4V 4EG
          </a>
        </div>
      </div>

      <hr />

      <div className="min-h-32 w-full flex items-center justify-center bg-custom-blue">
        <div className="w-full sm:w-2/3 lg:w-1/2 flex flex-col sm:flex-row justify-between p-4">
          <div className="flex gap-4 sm:gap-10 text-white sm:flex-grow">
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
            <a>Contact Us</a>
          </div>
          <div className="text-white">&copy; 2024 Monty eSIM</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
