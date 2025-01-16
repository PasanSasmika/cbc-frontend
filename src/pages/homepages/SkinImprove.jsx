import React from "react";
import image1 from "../../../public/image1.jpg";
import image2 from "../../../public/image2.jpg";
import image3 from "../../../public/image32.png";


function SkinImprove() {
  return (
    <div className="h-screen w-full flex bg-yellow-300">
      <div className="flex bg-primary h-full w-[50%] relative">
        <div className="flex items-center justify-center">
          <img
            src={image2}
            alt=""
            className="w-[390px] h-[600px] object-cover relative left-24 z-10"
          />
          <div className="relative z-20">
            <img
              src={image1}
              alt=""
              className="w-[360px] h-[400px] object-cover"
            />
            <div className=" absolute bottom-0 right-0 -z-10">
                <img src={image3} alt="" className="w-32 h-32 relative top-14 left-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary h-full w-[50%]">
        <div className=" absolute">
            <h1 className="text-[47px] text-black font-medium font-main relative bottom-52">Improve your skin’s <br></br>well-begin with our </h1>
        </div>
        <div className=" absolute">
        <h1 className="text-[80px] text-secondary font-medium font-second relative bottom-16">Skincare</h1>
        </div>
        <div className='absolute'>
            <h1 className='text-[26px] font-accent text-secondary relative top-3 '>Shop here</h1>
          </div>
          
      </div>
    </div>
  );
}

export default SkinImprove;
