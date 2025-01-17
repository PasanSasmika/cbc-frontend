import React from "react";
import image1 from "/image7.jpg";
import image2 from "/image32.png";


function SkinImprove() {
  return (
    <div className="h-screen w-full bg-primary">
      <div className="w-full h-[650px] bg-accent flex items-center relative top-24">
        {/* Left Section */}
        <div className="w-[45%] h-[555px] flex items-center justify-center relative">
          <img
            src={image1}
            alt="Main Skin Image"
            className="w-[600px] h-full object-cover absolute right-0"
          />
        </div>

        {/* Right Section */}
        <div className="w-[55%] h-[550px] bg-accent p-12 ">
          <div className="flex flex-col">
            <div><h1 className="font-main text-[34px]">Careskin</h1></div>
            <div className="w-[600px]"><h1 className="font-main font-medium text-[55px]">Illuminate your natural essence.</h1></div>
            <div className="w-[574px]"><h1 className="font-accent text-[34px] mt-5">True beauty radiates from those who strive to feel beautiful for themselves</h1></div>
            <div><h1 className="text-[27px] font-accent text-secondary mt-5">Shop All</h1></div>
          </div>
          <div className="w-16 h-16 ml-20 relative">
            <img src={image2} alt=""  className=" absolute bottom-9 opacity-90"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinImprove;
