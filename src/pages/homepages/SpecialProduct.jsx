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

  )
}

export default SpecialProduct