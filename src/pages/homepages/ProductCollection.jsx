import React from "react";
import image1 from "/image23.jpg";
import image2 from "/image24.jpg";
import image3 from "/image25.jpg";
import image4 from "/image26.jpg";
import image5 from "/1.jpg";
import { motion } from 'framer-motion' 
import { useNavigate } from "react-router-dom";
import { HomePageAnimation2 } from "../../animations/animation";

function ProductCollection() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the category page
    navigate(`/products/${category}`);
  };

  return (
    <div className="w-full mx-auto p-8 bg-primary">
      {/* Header Section */}
      <motion.div {...HomePageAnimation2()} className="text-center mb-12">
        <h1 className="font-main font-medium text-[42px] md:text-[48px] text-center mb-2">
          Superior Skin Products
        </h1>
        <p className="font-second  text-secondary text-[48px] md:text-[54px] relative text-center">
          Collection
        </p>
      </motion.div>

      {/* Grid Layout */}
      <motion.div {...HomePageAnimation2()} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5">
        {/* Large Image */}
        <div className="lg:col-span-1 row-span-2 cursor-pointer">
          <div className="relative group rounded-lg overflow-hidden w-[400px] h-[600px]"  onClick={() => handleCategoryClick("skincare")}>
            <img
              src={image1}
              alt="Orange collection skincare products"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-full left-0 opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 flex items-center justify-center">
              <span className="font-main font-bold text-[46px] leading-tight text-white">
                Skincare
              </span>
            </div>
          </div>
        </div>

        {/* Small Images */}
        <div className="space-y-4  lg:col-span-2 -ml-16">
          <div className="grid grid-cols-2 gap-4 cursor-pointer">
            {/* Top Row Images */}
            <div className="relative group rounded-lg overflow-hidden" onClick={() => handleCategoryClick("nailcare")}>
              <img
                src={image2}
                alt="Beauty products flatlay"
                className="w-full max-h-72 object-cover"
              />
               <div className="absolute top-full left-0 opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 flex items-center justify-center">
              <span className="font-main font-bold text-[46px] leading-tight text-white">
                Nailcare
              </span>
            </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden" onClick={() => handleCategoryClick("fragrance")}>
              <img
                src={image3}
                alt="Pink nail polish collection"
                className="w-full h-72 object-cover"
              />
              <div className="absolute top-full left-0 opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 flex items-center justify-center">
              <span className="font-main font-bold text-[46px] leading-tight text-white">
              Fragrance
              </span>
            </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 cursor-pointer">
            {/* Bottom Row Images */}
            <div className="relative group rounded-lg overflow-hidden"  onClick={() => handleCategoryClick("bath&body")}>
              <img
                src={image5}
                alt="Chanel perfume bottle"
                className="w-full h-72 object-cover"
              />
              <div className="absolute top-full left-0 opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 flex items-center justify-center">
              <span className="font-main font-bold text-[46px] leading-tight text-white">
                Bath & Body
              </span>
            </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden" onClick={() => handleCategoryClick("makeup")}>
              <img
                src={image4}
                alt="Makeup products on purple background"
                className="w-full h-72 object-cover"
              />
              <div className="absolute top-full left-0 opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 flex items-center justify-center">
              <span className="font-main font-bold text-[46px] leading-tight text-white">
                Makeup
              </span>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductCollection;
