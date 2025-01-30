import React from 'react'
import { motion } from "framer-motion";
import image from "/image14.jpg";
import image2 from "/image7.jpg";
import image3 from "/about3.jpg";
import image4 from "/image40.jpg";
import image5 from "/about4.jpg";
import image6 from "/about.jpg";
import image7 from "/about6.jpg";
import image8 from "/about7.jpg";
import image9 from "/about8.jpg";
import Header from "../../components/Header";
import { About, About2, Category } from "../../animations/animation";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';

function Blogs() {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
      // Navigate to the category page
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
            Fresh Beauty 
          </motion.h1>
          <motion.h1
            {...Category()}
            className="text-white font-second text-[65px] z-40"
          >
            insights
          </motion.h1>
        </div>
      </div>
    </div>

    <div className="w-full h-[450px] flex items-center mt-32">
    <motion.div {...About()} className="flex w-[50%] h-full items-center ml-6">
        <img src={image2} alt="" className="w-[90%] h-[420px] object-cover" />
      </motion.div>
      <div className="flex flex-col   w-[50%] h-full p-10">
      <h2 className="text-[35px] font-second text-gray-600 mt-2">
        Moisturizers
        </h2>
        <h1 className="text-[37px] w-[600px] font-main font-bold text-gray-900">
        How to choose perfect moisturizers for every occasion
        </h1>
        <p className="text-gray-700 font-accent mt-4 leading-relaxed">
        Discover crystal’s collection of moisturizers and learn how to select the right scent for your style and mood.here, 
        this part need  30 words Discover crystal’s collection of moisturizers
         and learn how to select the right scent for your style and mood.
        </p>
        <div className="w-24 h-[3px] bg-gray-500 mt-6 rounded-full"></div>
      </div>
    </div>

    <div className="w-full flex items-center justify-center mt-28">
  <div className="grid grid-cols-2 gap-12 w-[80%]">
    {/* Blog Cards */}
    {[image, image2, image3, image4].map((img, index) => (
      <div 
        key={index} 
        className="bg-accent  overflow-hidden transition-transform duration-500 hover:scale-105"
      >
        <div className="relative">
          <img 
            src={img} 
            alt="Skincare product" 
            className="w-full h-[260px] object-cover"
          />
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <button className="text-white font-second text-[20px] px-4 py-2 rounded-lg shadow-md hover:bg-opacity-80">
              Read More
            </button>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
            Skincare
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-2 leading-snug">
            The importance of sun protection in your skincare routine
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Discover why sunscreen is essential and how it protects your skin from premature aging and UV damage.
          </p>
          <div className="mt-4 w-16 h-[3px] bg-gray-400 rounded-full"></div>
        </div>
      </div>
    ))}
  </div>
</div>

     <div className="h-[120vh] w-full bg-primary flex justify-center items-center">
      <div className="flex w-[1460px] h-[570px] relative ">
       
        <div
          className="w-[50%] h-full relative group overflow-hidden shadow-lg cursor-pointer"
          onClick={() => handleCategoryClick("skincare")}
        >
          
          <img
            src={image5}
            alt=""
            className="w-full h-[570px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <img
            src={image4}
            alt=""
            className="absolute inset-0 w-[300px] h-[300px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <h2 className="font-main font-bold text-[46px] leading-tight text-white">Explore Skincare</h2>
          </div>
        </div>
    
        
        <div
          className="w-[50%] h-full relative group overflow-hidden shadow-lg cursor-pointer"
          onClick={() => handleCategoryClick("skincare")}
        >
         
          <img
            src={image3}
            alt=""
            className="w-full h-[570px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
         
          <img
            src={image4}
            alt=""
            className="absolute inset-0 w-[300px] h-[300px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <h2 className="font-main font-bold text-[46px] leading-tight text-white">Explore Skincare</h2>
          </div>
        </div>
      </div>
    </div>
    
    <Footer /> 
  </div>
  )
}

export default Blogs