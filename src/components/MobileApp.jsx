import Image from "next/image";
import React from "react";

function MobileApp() {
  return (
    <div className="h-[812px] px-[120px] flex justify-center relative">
      {/* Description */}
      <div className="w-[756px] pl-0 p-[68px] mt-[120px]">
        {/* Texts */}
        <div className="mb-[24px]">
          <p className="font-[400] text-[20px] font-lobsterTwo">Restaurants</p>
          <p className="font-[600] text-[38px]">
            Enhance your experience,{" "}
            <span className="text-main">Download the Tweet app today!</span>
          </p>
          <p className="font-[400] text-[16px] mt-[24px]">
            Discover a whole new level of convenience with our mobile app. From
            browsing our delectable menu to securing exclusive deals, it's your
            gateway to a world of culinary delights. Download now and elevate
            your dining experience with just a tap.
          </p>
        </div>

        {/* App Stores Images */}
        <div className="flex gap-3 z-30">
          <Image src="/playstore.png" width={148} height={48} alt="playstore" />
          <Image src="/appstore.png" width={148} height={48} alt="appstore" />
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="relative w-[343px] h-[614px] mt-[80px]">
        <Image
          src="/iphoneBanner.png"
          alt="mobile app banner"
          fill
          className="absolute z-30"
        />
      </div>
      <div className="h-[291px] w-[1201px] absolute bottom-5">
        <Image src="/rectangle.png" alt="rectangle" fill className="z-10" />
        <Image
          src="/frame.png"
          alt="frame"
          fill
          className="z-20 opacity-[3%] bg-blend-darken"
        />
        <div className="text-white flex gap-[29px] absolute border-8 left-14 top-32">
          <div className="z-50 flex justify-center items-center flex-col">
            <p className="font-[700] text-[40px]">100+</p>
            <p className="font-[400] text-[20px]">Food Menu</p>
          </div>
          <div className="z-50 flex justify-center items-center flex-col">
            <p className="font-[700] text-[40px]">100+</p>
            <p className="font-[400] text-[20px]">Dwonloads</p>
          </div>
          <div className="z-50 flex justify-center items-center flex-col">
            <p className="font-[700] text-[40px]">20+</p>
            <p className="font-[400] text-[20px]">Positive reviews</p>
          </div>
          <div className="z-50 flex justify-center items-center flex-col">
            <p className="font-[700] text-[40px]">4.7</p>
            <p className="font-[400] text-[20px]">Average Review</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
