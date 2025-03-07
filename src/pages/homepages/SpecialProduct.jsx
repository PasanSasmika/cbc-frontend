import React from 'react'
import image3 from "/facecream.jpg";
import image4 from "/png.png";
import image5 from "/suncream.jpg";

import { useNavigate } from 'react-router-dom';


function SpecialProduct() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the category page
    navigate(`/products/${category}`);
  };
  return (
    <div className="min-h-screen w-full bg-primary flex justify-center items-center py-8 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-[1460px] h-auto md:h-[570px] gap-4 md:gap-0">
        
        {/* Left Section */}
        <div
          className="w-full md:w-[50%] h-[300px] md:h-full relative group overflow-hidden shadow-lg cursor-pointer"
          onClick={() => handleCategoryClick("skincare")}
        >
          <img
            src={image5}
            alt="Suncream"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <img
            src={image4}
            alt="Overlay"
            className="absolute inset-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <h2 className="font-main font-bold text-2xl md:text-[46px] leading-tight text-white text-center px-4">
              Explore Skincare
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-[50%] h-[300px] md:h-full relative group overflow-hidden shadow-lg cursor-pointer"
          onClick={() => handleCategoryClick("skincare")}
        >
          <img
            src={image3}
            alt="Facecream"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <img
            src={image4}
            alt="Overlay"
            className="absolute inset-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <h2 className="font-main font-bold text-2xl md:text-[46px] leading-tight text-white text-center px-4">
              Explore Skincare
            </h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SpecialProduct