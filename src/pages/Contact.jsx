import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Questions from '../components/Questions'
import { questions as data } from '../data'
import ContactForm from '../components/ContactForm'


const Contact = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  const contactus = true

  return (
    <>
      <Navbar />
      {/* <div className='min-h-screen mt-[170px] w-full bg-white flex justify-center items-start'>
        <div className='h-full w-full md:w-3/4 lg:w-2/3 xl:w-1/2 border-solid rounded-3xl flex flex-col items-center p-8'>
          <p className='text-2xl text-custom-text-color text-center font-semibold'>Contact us</p>
          <h1 className='text-5xl text-custom-text-color-1 text-center font-bold leading-normal mt-4 mb-6'>Need some help?</h1>
          <p className='text-xl text-custom-text-color text-center font-normal mb-6'>For all inquiries, please email us using the form below. Our team is there for you 24/7!</p>
          <form className='flex flex-col justify-evenly gap-6 items-center w-full'>
            <label>Subject</label>
            <input
              className='w-full p-4 rounded-2xl outline-none shadow-md'
              type="text"
              name="subject"
              required
            />
            <label>Message</label>
            <textarea className='w-full p-4 rounded-2xl resize-none border-none outline-none shadow-md'
              required
            ></textarea>
            <button className='text-white text-xl bg-pink-500 rounded-3xl p-6 font-bold'>Send Message</button>
          </form>
        </div>
      </div> */}
      <ContactForm contactus={contactus}/>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
      <Footer />
    </>
  );
};

export default Contact