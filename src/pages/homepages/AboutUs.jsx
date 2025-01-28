import React from "react";
import { motion } from "framer-motion";
import image from "/image12.jpg";
import image2 from "/about2.jpg";
import image3 from "/about3.jpg";
import image4 from "/image40.jpg";
import image5 from "/about4.jpg";
import image6 from "/about.jpg";
import image7 from "/about6.jpg";
import image8 from "/about7.jpg";
import image9 from "/about8.jpg";
import Header from "../../components/Header";
import { Category } from "../../animations/animation";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const navigate =  useNavigate();

    const handleCategoryClick = (category) => {
      navigate(`/products/${category}`);
    };
  return (
    <div className=" min-h-[120vh] w-full bg-primary">
      <Header />
      <div className="w-full h-[370px] flex items-center justify-center mt-8 relative">
        <div className="w-[1404px] h-full relative">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/35 rounded-xl z-10 flex flex-col items-center justify-center">
            <motion.h1
              {...Category()}
              className="text-white font-main font-bold text-[80px] z-40"
            >
              About
            </motion.h1>
            <motion.h1
              {...Category()}
              className="text-white font-second text-[65px] z-40"
            >
              Us
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="w-full h-[450px] bg-accent flex items-center mt-32">
        <div className="flex flex-col items-center  w-[50%] h-full p-10">
          <h1 className="text-[45px] font-main font-bold text-gray-900">
            Elevating Skincare
          </h1>
          <h2 className="text-[35px] font-second text-gray-600 mt-2">
            For Radiant Beauty
          </h2>
          <p className="text-gray-700 font-accent mt-4 leading-relaxed text-center">
            We have crafted thousands of manufacturing processes, strategy that
            allows us to understand our customer like never before. We are
            present up to this point due to the trust and appreciation of our
            customers. To help stem the flow of plastic into the ocean, we have
            committed to eliminating single-use plastic from th product range by
            2025.
          </p>
          <div className="w-24 h-[3px] bg-gray-500 mt-6 rounded-full"></div>
        </div>
        <div className="flex w-[50%] h-full items-center">
          <img
            src={image3}
            alt=""
            className="w-[40%] h-[420px] object-cover mr-3"
          />
          <img src={image2} alt="" className="w-[58%] h-[420px] object-cover" />
        </div>
      </div>

      <div className="w-full h-[550px]  flex items-center mt-32">
        <div className="flex w-[50%] h-full items-center">
          <img
            src={image4}
            alt=""
            className="w-[90%] h-[420px] object-cover ml-3"
          />
        </div>
        <div className="flex flex-col items-center  w-[50%] h-full p-10">
          <h1 className="text-[45px] font-main font-bold text-gray-900">
            Our commitment
          </h1>
          <h2 className="text-[35px] font-second text-gray-600 mt-2">
            for You
          </h2>
          <p className="text-gray-700 font-accent mt-4 leading-relaxed text-center">
            At crystal, our mission is to empower individuals to embrace their
            unique beauty with confidence. We are dedicated to delivering
            premium beauty products that combine luxury with performance,
            ensuring that every product. Our commitment to using the finest
            ingredients and innovative formulas reflects our passion for quality
            and effectiveness.
          </p>
          <div className="w-24 h-[3px] bg-gray-500 mt-6 rounded-full"></div>
        </div>
      </div>
      <div className="w-full h-[350px] flex items-center mt-20 pb-8">
        <div className="h-full w-[400px] bg-yellow-100 overflow-hidden group relative">
          <img
            src={image5}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <h1 className="font-main font-bold text-[46px] leading-tight text-white" onClick={() => handleCategoryClick("bath&body")}>
              Bath & Body
            </h1>
          </div>
        </div>

        <div className="h-full w-[400px] bg-yellow-100 overflow-hidden group relative">
          <img
            src={image6}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <h1 className="font-main font-bold text-[46px] leading-tight text-white" onClick={() => handleCategoryClick("skincare")}>
              Skincare
            </h1>
          </div>
        </div>
        <div className="h-full w-[400px] bg-yellow-100 overflow-hidden group relative">
          <img
            src={image7}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <h1 className="font-main font-bold text-[46px] leading-tight text-white" onClick={() => handleCategoryClick("makeup")}>
              Makeup
            </h1>
          </div>
        </div>
        <div className="h-full w-[400px] bg-yellow-100 overflow-hidden group relative">
          <img
            src={image8}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <h1 className="font-main font-bold text-[46px] leading-tight text-white" onClick={() => handleCategoryClick("fragrance")}>
            Fragrance
            </h1>
          </div>
        </div>
        <div className="h-full w-[400px] bg-yellow-100 overflow-hidden group relative">
          <img
            src={image9}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <h1 className="font-main font-bold text-[46px] leading-tight text-white" onClick={() => handleCategoryClick("nailcare")}>
              Nailcare
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
