import React from "react";
import image1 from "/image18.jpg";
import image2 from "/image8.jpg";
import image3 from "/image10.jpg";
import image4 from "/image14.jpg";
import { motion } from 'framer-motion' 
import { HomePageAnimation, HomePageAnimation2 } from "../../animations/animation";



function PassionPage() {
  return (
    <div className="h-[130vh] w-full bg-primary flex justify-center items-center">
      <div className="w-full h-full flex">
        {/* Left Section */}
        <div className="w-[45%] h-full flex flex-col justify-center bg-accent px-16 py-12 shadow-lg relative">
          <div className="absolute top-10 left-10 w-[80px] h-[5px] bg-gradient-to-r from-pink-500 to-orange-400"></div>
          <h1 className="font-main font-bold text-[46px] leading-tight text-gray-800">
            A Passion for Skincare that Transformed into a Brand
          </h1>
          <p className="mt-6 font-accent text-[20px] text-gray-600 leading-relaxed">
            Pamper your skin with the purest organic ingredients and experience
            the difference of natural skincare. <br />
            <br />
            Our organic products are crafted with care and commitment to provide
            you with a skincare routine that is not only effective but also
            mindful of your well-being and the planet.
          </p>
        </div>

        {/* Right Section */}
        <motion.div {...HomePageAnimation2()} whileHover={{scale: 1.1}} className="w-[55%] h-full mr-8 flex">
          {/* Left Column of Right Section */}
          <div className="w-[50%] h-full  flex flex-col items-center justify-center space-y-5">
            <div className="flex items-center justify-center">
              <img
                src={image1}
                alt=""
                className="w-[80%] h-[490px] object-cover shadow-lg rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={image4}
                alt=""
                className="w-[80%] h-[200px] object-cover ml-[60px] mt-5 shadow-md rounded-md"
              />
            </div>
          </div>

          {/* Right Column of Right Section */}
          <div className="w-[50%] h-full  flex flex-col items-center justify-center space-y-8">
            <div className="flex items-center">
              <img
                src={image2}
                alt=""
                className="w-[63%] h-[390px] object-cover mt-14 shadow-lg rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={image3}
                alt=""
                className="w-[80%] h-[430px] object-cover mr-20 shadow-lg rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PassionPage;
