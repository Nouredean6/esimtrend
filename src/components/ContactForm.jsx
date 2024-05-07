import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ContactForm = ({howitworks, contactus}) => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
        
      });
      const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData,[name]:value});
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try{
          const response = await fetch('/api/contact',{
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if(response.ok){
            toast.success('Email sent successfully!');
            setFormData({
              email: '',
              message: '',
            })
          } else {
            toast.error('Error sending email')
          }
      
        } catch (error) {
          console.error('Eroor: ', error)
        }
      };
  return (
    <div className={`w-full min-h-min  lg:px-[100px] px-[20px] mb-[120px] ${contactus ? 'lg:mt-[170px] mt-[20px]' : ''} `}>
        <div className= {`w-full min-h-min  flex items-center justify-center flex-col lg:rounded-[130px] rounded-[60px] ${contactus ? 'bg-white':'bg-light-blue-custom'}`}>
              <div className=" flex items-center justify-center flex-col lg:mb-[60px] mb-[40px] pt-[120px]">
                <p className="leading-[27px] text-[#5e6282] text-[18px] font-semibold">Contact us</p>
                <h3 className="lg:text-[40px] text-3xl font-bold  text-custom-text-color-1 leading-[62px]">Need some help?</h3>
                <p className="leading-[27px] text-[#5e6282] text-sm lg:text-[18px]">For all inquiries, please email us using the form below. Our team is there for you 24/7!</p>
        
              </div>
              <div className=" lg:w-[60%] w-[80%]">
              <form className="flex flex-col"
              onSubmit={handleSubmit}
              >
        {/* <input
          name="name"
          type="text"
          placeholder="Name"
          // value={formData.name}
          // onChange={handleChange} 
        /> */}
        <label className="input-labels mb-[10px]">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="esim-inputs mb-[20px]"

          value={formData.email}
          onChange={handleChange} 
        />
        {/* <input
          name="subject"
          type="text"
          placeholder="Subject"
          className="esim-inputs"
          // value={formData.subject}
          // onChange={handleChange} 
        /> */}
        <label className="input-labels mb-[10px]">Message</label>
        <textarea
          name="message"
          placeholder="Message"
          className="resize-none overflow-auto esim-desc h-[200px] lg:mb-[60px] mb-[40px]"
          // rows="4"
          value={formData.message}
          onChange={handleChange} 
        />  
        <button className="contactus-btn mb-[40px] self-center hover:bg-custom-text-color-1 " type="submit" >Send Message</button>
              </form>
              </div>
        </div>
        </div>
  )
}

export default ContactForm