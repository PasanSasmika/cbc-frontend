import React, { useState } from 'react'
import Header from '../../components/Header'
import image2 from "/contact.jpg";
import { motion } from "framer-motion";
import { About, Category } from "../../animations/animation";
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import Footer from '../../components/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function submit(event){
  event.preventDefault();    
    
    const contact = {
      name,
      email,
      subject,
      message
    };

    if (!name || !message || !email ||!subject ) {
      toast.error("All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    
  const token = localStorage.getItem('token');

  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/contact`, 
      contact, 
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    toast.success('Your Message sent');
  } catch (error) {
    toast.error('Failed to send message !');
  }
}


  return (
    <div className="min-h-[120vh] w-full bg-primary">
  <Header />
  
  {/* Hero Section */}
  <div className="w-full h-[370px] flex items-center justify-center mt-8 relative">
    <div className="w-[1404px] h-full relative">
      <img
        src={image2}
        alt=""
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/35 rounded-xl z-10 flex flex-col items-center justify-center">
        <motion.h1 {...Category()} className="text-white font-main font-bold text-[80px] z-40">
          Need a help
        </motion.h1>
        <motion.h1 {...Category()} className="text-white font-second text-[65px] z-40">
          contact us
        </motion.h1>
      </div>
    </div>
  </div>


  {/* Contact Form Section */}
  <div className="w-full flex justify-center mt-44">
    <div className="w-[80%] flex gap-12">
      
      {/* Left Contact Info Box */}
      <motion.div {...About()} className="w-1/3 h-[500px] bg-accent p-8 rounded-xl">
        <div className="mb-12">
          <p className="text-[30px]  flex items-center font-main font-medium text-gray-900">
            <span className="mr-2 text-red-500"><FaLocationDot /></span> Address
          </p>
          <p className="text-gray-700 text-[17px] font-accent">Kaluthara South, Sri Lanka, 12000</p>
        </div>

        <div className="mb-12">
          <p className="flex items-center text-[30px]   font-main font-medium text-gray-900">
            <span className="mr-2 text-red-500"><BiSolidPhoneCall /></span> Call
          </p>
          <p className="text-gray-700 text-[17px] font-accent">076 738 3649</p>
          <p className="text-gray-700 text-[17px] font-accent">074 404 3187</p>
        </div>

        <div>
          <p className="flex items-center text-[30px]  font-main font-medium text-gray-900">
            <span className="mr-2 text-red-500"> <MdEmail /></span> Email
          </p>
          <p className="text-gray-700 text-[17px] font-accent">Crystalbeauty@gmail.com</p>
        </div>
      </motion.div>

      {/* Right Contact Form */}
      <div className="w-2/3 p-8 rounded-xl">
        <h3 className="text-gray-700 text-[17px] font-accent">CONTACT FORM</h3>
        <h1 className="text-[30px]  font-main font-semibold text-gray-900">Fill the Form</h1>

        <form className="flex flex-col space-y-6 mt-7">
          <input type="text" 
          placeholder="enter your name" 
          value={name}
          onChange={(e)=> setName(e.target.value)}
          className="p-3 border placeholder:font-main placeholder:text-secondary border-secondary bg-primary" />

          <input type="email" 
          placeholder="enter your email" 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          className="p-3 border placeholder:font-main placeholder:text-secondary border-secondary bg-primary" />

          <input type="text" 
          placeholder="subject" 
          value={subject}
          onChange={(e)=> setSubject(e.target.value)}
          className="p-3 border placeholder:font-main placeholder:text-secondary border-secondary bg-primary" />

          <textarea placeholder="message" 
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
          className="p-3 border placeholder:font-main placeholder:text-secondary border-secondary bg-primary h-32"></textarea>
          <button className=" text-white bg-secondary py-3 hover:bg-opacity-90" onClick={submit}>
            Send Message
          </button>
        </form> 
      </div>
    </div>
  </div>
  <Footer/>
</div>

  )
}

export default Contact