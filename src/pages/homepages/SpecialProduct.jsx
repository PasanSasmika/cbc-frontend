import React from 'react'
import image3 from "/facecream.jpg";
import image4 from "/skincre.png";
import image5 from "/suncream.jpg";
import image6 from "/aaa.png";


import { useNavigate } from 'react-router-dom';


function SpecialProduct() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the category page
    navigate(`/products/${category}`);
  };
  return (
    <div className="min-h-screen w-full bg-primary flex justify-center items-center py-8 px-4">
    <div className="flex flex-col md:flex-row  w-full max-w-[1460px] h-auto md:h-[570px] gap-4 md:gap-2">
      
      {/* Left Section */}
      <div
        className="w-full md:w-[50%] h-[300px] md:h-full relative group overflow-hidden shadow-lg cursor-pointer"
        onClick={() => handleCategoryClick("skincare")}
      >
        {/* Background Image */}
        <img
          src={image5}
          alt="Suncream"
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Image */}
        <img
          src={image6}
          alt="Overlay"
          className="absolute inset-0 w-[360px] md:w-[360px] h-[340px] md:h-[340px] object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl"
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex justify-center items-center">
          <h2 className="font-main font-bold text-2xl md:text-[46px] leading-tight text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Explore Skincare
          </h2>
        </div>
      </div>
  
      {/* Right Section */}
      <div
        className="w-full md:w-[50%] h-[300px] md:h-full relative group overflow-hidden shadow-lg cursor-pointer"
        onClick={() => handleCategoryClick("skincare")}
      >
        {/* Background Image */}
        <img
          src={image3}
          alt="Facecream"
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Image */}
        <img
          src={image4}
          alt="Overlay"
          className="absolute inset-0 w-[360px] md:w-[360px] h-[340px] md:h-[340px] object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl"
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex justify-center items-center">
          <h2 className="font-main font-bold text-2xl md:text-[46px] leading-tight text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Explore Skincare
          </h2>
        </div>
      </div>
    </div>
  </div>

  )
}

export default SpecialProduct