import React from 'react'
import image1 from "/image23.jpg";
import image2 from "/image24.jpg";
import image3 from "/image25.jpg";
import image4 from "/image26.jpg";
import image5 from "/image27.jpg";
import { useNavigate } from 'react-router-dom';

function ProductCollection() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the category page
    navigate(`/products/${category}`);
};

    
  return (
    <div className="w-full mx-auto p-8 bg-primary">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h1 className="font-main font-medium text-[42px] md:text-[48px] text-center mb-2">Superior Skin Products</h1>
      <p className="font-second  text-secondary text-[48px] md:text-[54px] relative text-center">Collection</p>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Large Image */}
      <div className="lg:col-span-1 row-span-2">
        <div className="relative rounded-lg overflow-hidden ml-16 w-[400px] h-[600px]">
          <img 
            src={image1}
            alt="Orange collection skincare products" 
            className="w-full h-full object-cover" onClick={() => handleCategoryClick('skincare')}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 text-white opacity-0 
          hover:opacity-100 transition-opacity">
           <span className='font-main font-bold text-[46px] leading-tight text-white'>Skincare</span>
        </div>
        </div>
        
      </div>

      {/* Small Images */}
      <div className="space-y-4  lg:col-span-2">
        <div className="grid grid-cols-2 gap-4">
          {/* Top Row Images */}
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={image2} 
              alt="Beauty products flatlay" 
              className="w-full max-h-72 object-cover" onClick={() => handleCategoryClick('nailcare')}
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 text-white opacity-0 
          hover:opacity-100 transition-opacity">
           <span className='font-main font-bold text-[46px] leading-tight text-white'>Skincare</span>
        </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={image3} 
              alt="Pink nail polish collection" 
              className="w-full h-72 object-cover" onClick={() => handleCategoryClick('fragrance')}
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 text-white opacity-0 
          hover:opacity-100 transition-opacity">
           <span className='font-main font-bold text-[46px] leading-tight text-white'>Skincare</span>
        </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Bottom Row Images */}
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={image5} 
              alt="Chanel perfume bottle" 
              className="w-full h-72 object-cover" onClick={() => handleCategoryClick('bath&body')}
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 text-white opacity-0 
          hover:opacity-100 transition-opacity">
           <span className='font-main font-bold text-[46px] leading-tight text-white'>Skincare</span>
        </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={image4} 
              alt="Makeup products on purple background" 
              className="w-full h-72 object-cover" onClick={() => handleCategoryClick('makeup')}
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 text-white opacity-0 
          hover:opacity-100 transition-opacity">
           <span className='font-main font-bold text-[46px] leading-tight text-white'>Skincare</span>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCollection