import React from "react";
import image1 from "/image18.jpg";
import image2 from "/image8.jpg";
import image3 from "/image10.jpg";
import image4 from "/image14.jpg";
import { motion } from 'framer-motion' 
import { HomePageAnimation2 } from "../../animations/animation";



function PassionPage() {
  return (
    <div className="min-h-screen w-full bg-primary flex justify-center items-center py-8 md:py-0">
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-[45%] min-h-[50vh] md:h-full flex flex-col justify-center bg-accent px-6 sm:px-8 md:px-16 py-8 md:py-12 shadow-lg relative">
          <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-[60px] sm:w-[80px] h-[4px] sm:h-[5px] bg-gradient-to-r from-pink-500 to-orange-400"></div>
          <h1 className="font-main font-bold text-[28px] sm:text-[36px] md:text-[46px] leading-tight text-gray-800 pr-4 sm:pr-0">
            A Passion for Skincare that Transformed into a Brand
          </h1>
          <p className="mt-4 sm:mt-6 font-accent text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 leading-relaxed">
            Pamper your skin with the purest organic ingredients and experience
            the difference of natural skincare. <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Our organic products are crafted with care and commitment to provide
            you with a skincare routine that is not only effective but also
            mindful of your well-being and the planet.
          </p>
        </div>

        {/* Right Section */}
        <motion.div 
          {...HomePageAnimation2()} 
          whileHover={{scale: 1.1}} 
          className="w-full md:w-[55%] h-auto md:h-full px-4 md:px-8 py-8 md:py-0 flex flex-col md:flex-row"
        >
          {/* Left Column of Right Section */}
          <div className="w-full md:w-[50%] flex flex-col items-center justify-center space-y-4 md:space-y-5">
            <div className="w-full flex items-center justify-center">
              <img
                src={image1}
                alt=""
                className="w-full sm:w-[80%] max-h-[300px] md:h-[490px] object-cover shadow-lg rounded-lg"
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <img
                src={image4}
                alt=""
                className="w-full sm:w-[80%] max-h-[150px] md:h-[200px] object-cover ml-0 md:ml-[60px] mt-4 md:mt-5 shadow-md rounded-md"
              />
            </div>
          </div>

          {/* Right Column of Right Section */}
          <div className="w-full md:w-[50%] flex flex-col items-center justify-center space-y-4 md:space-y-8 mt-4 md:mt-0">
            <div className="w-full flex items-center justify-center">
              <img
                src={image2}
                alt=""
                className="w-full sm:w-[63%] max-h-[250px] md:h-[390px] object-cover mt-0 md:mt-14 shadow-lg rounded-lg"
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <img
                src={image3}
                alt=""
                className="w-full sm:w-[80%] max-h-[280px] md:h-[430px] object-cover mr-0 md:mr-20 shadow-lg rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PassionPage;
