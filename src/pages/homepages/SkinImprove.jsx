import React from "react";
import { motion } from 'framer-motion' 
import image1 from "/image7.jpg";
import image2 from "/image32.png";
import image3 from "/image8.jpg";
import { HomePageAnimation2, SkinImprove1, SkinImprove2, SkinImprove3, SkinImprove4 } from "../../animations/animation";


function SkinImprove() {
  return (
    <div className=" min-h-[120vh] w-full bg-primary flex justify-center items-center">
      <div className="w-full h-[650px] bg-accent flex items-center relative">
        {/* Left Section */}
        <motion.div {...SkinImprove4()} className="w-[45%] h-[355px] flex items-center justify-center absolute z-20">
          <img
            src={image3}
            alt="Main Skin Image"
            className="w-[287px] h-full object-cover rounded-md relative right-12"
          />
        </motion.div>
        <motion.div {...SkinImprove1()} className="w-[45%] h-[555px] flex items-center justify-center relative z-10">
          <img
            src={image1}
            alt="Main Skin Image"
            className="w-[380px] h-full object-cover rounded-md absolute right-0"
          />
        </motion.div>
        

        {/* Right Section */}
        <motion.div {...HomePageAnimation2()} className="w-[55%] h-[550px] bg-accent p-16 ">
          <div className="flex flex-col">
            <div><h1 className="font-second  text-secondary text-[44px]">Careskin</h1></div>
            <div className="w-[600px]"><h1 className="font-main font-medium text-[45px]">Next-Gen Skincare for Lasting Glow</h1></div>
            <div className="w-[594px]"><h1 className="font-accent text-[22px] mt-7">True beauty radiates from those who strive to feel beautiful for themselves</h1></div>
            <div><h1 className="text-[18px] font-accent text-secondary mt-7">Shop All</h1></div>
          </div>
          <div className="w-14 h-14 ml-20 relative">
            <motion.img src={image2}  {...SkinImprove3()} alt=""  className=" absolute bottom-9 opacity-90"/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SkinImprove;
