import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";

function HeroBanner() {
  return (
    <div className="h-[587px] w-[590px] relative">
      {/* Card-1 */}
      <div className="h-[150px] w-[194px] shadow z-10 top-6 absolute rounded-[14px] bg-white p-[16px] space-y-2">
        {/* Image */}
        <div className="h-[48px] w-[120px] relative">
          <Image
            src="/avatars/avatar-1.jpg"
            alt="customer avatar"
            width={48}
            height={48}
            className="h-[48px] w-[48px] rounded-full absolute border"
          />
          <Image
            src="/avatars/avatar-2.jpg"
            alt="customer avatar"
            width={48}
            height={48}
            className="h-[48px] w-[48px] rounded-full absolute left-5 border-2 border-white"
          />
          <Image
            src="/avatars/avatar-3.jpg"
            alt="customer avatar"
            width={48}
            height={48}
            className="h-[48px] w-[48px] rounded-full absolute left-10 border-2 border-white"
          />
          <div className="h-[48px] w-[48px] rounded-full absolute left-[60px] border-2 bg-[#FAFAFA] border-white flex items-center justify-center">
            <FaPlus className="h-[18px] w-[18px]" />
          </div>
        </div>

        {/* Others */}
        <div className="flex items-center flex-col gap-3">
          <p className="text-[16px] text-[#333333] font-[600]">
            Satisfied Customer
          </p>
          <div className="flex items-center text-[16px] text-[#333333]">
            <FaStar color="#F4C700" className="h-[26px] w-[26px]" />
            5.0 (3K Reviews)
          </div>
        </div>
      </div>

      {/* Card-2 */}
      <div className="w-[322px] h-[140px] shadow flex justify-between items-center z-10 absolute rounded-[14px] bg-linear-to-b to-white from-[#ffffff38] bottom-0 left-4 backdrop-blur-3xl p-[15px]">
        <div className="w-[113px] h-[110] relative">
          {/* Image */}
          <Image
            fill
            src="/cardImg-2.jpg"
            alt="hero card image"
            objectFit="cover"
            className="absolute rounded-[14px]"
          />
        </div>

        {/* Others */}
        <div className="w-[157px] h-[76px] ">
          <p className="font-[600] text-[15px]">Flavor Fusion Bistro</p>
          <p className="font-[400] text-[12px] text-[#3D3D3D]">
            Kaliurang, Seleman
          </p>
          <p className="font-[400] text-[16px] flex gap-2 items-center">
            4.9 <FaStar color="#F4C700" className="h-[16px] w-[16px]" />
          </p>
        </div>
        <div className="rounded-full h-[30px] w-[30px] border absolute bottom-[15px] right-[15px] flex justify-center items-center">
          <CiHeart />
        </div>
      </div>

      {/* Card-3 */}
      <div className="w-[161px] h-[83px] py-[16px] px-[25px] flex justify-center gap-[16px] items-center z-10 absolute rounded-[14px] bg-linear-to-b to-white shadow from-[#FFFFFFA6] right-0 bottom-6 backdrop-blur-xl">
        {/* Icon */}
        <div className="h-[24px] w-[24px]">
          <TbTruckDelivery color="#ED6923" className="h-full w-full" />
        </div>

        {/* Others */}
        <div className="">
          <p className="font-[600] text-[16px]">24/7</p>
          <p className="font-[400] text-[12px] text-[#737373]">Delivery</p>
        </div>
      </div>

      <Image
        alt="hero section banner"
        src="/heroBanner.png"
        fill
        className="absolute"
        objectFit="contain"
      />
    </div>
  );
}

export default HeroBanner;
