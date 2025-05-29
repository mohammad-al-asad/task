import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import TestimonialCards from "./TestimonialCards";

function TestimonialCard() {
  return (
    <div className="bg-[#FDF0E9] h-[252px] w-[485px] border-2 border-[#FFCABB] p-[25px] mt-[28px] rounded-[8px]">
      {/* Texts */}
      <div className="font-[400] text-[16px] relative">
        <Image
          src="/coma.png"
          alt="comma"
          width={24}
          height={17}
          className=" absolute top-0 left-0"
        />
        <p className="ml-8">
          Love the convenience of Tweet! Fast, reliable, and super easy to use
          for all your food delivery cravings.
        </p>
        <Image
          src="/coma.png"
          alt="comma"
          width={24}
          height={17}
          className="rotate-180 absolute bottom-0 left-28"
        />
      </div>

      {/* Profile */}
      <div className="flex items-center justify-between mt-[25px]">
        <div className="flex justify-center items-center gap-[14px]">
          <Image
            src="/profile.jpg"
            width={74}
            height={74}
            alt="customer profile"
            className="rounded-full h-[74px] w-[74px]"
          />
          <div>
            <p className="font-[600] text-[20px]">Leon Fischer</p>
            <p className="font-[300] text-[12px] text-[#767676]">
              Satisfied Customer
            </p>
          </div>
        </div>
        <div className="bg-main h-[34px] w-[116px] rounded-[4px] flex justify-center items-center text-white">
          <FaStar className="h-[15px] w-[15px" />
          <FaStar className="h-[15px] w-[15px" />
          <FaStar className="h-[15px] w-[15px" />
          <FaStar className="h-[15px] w-[15px" />
          <FaStar className="h-[15px] w-[15px" />
        </div>
      </div>
    </div>
  );
}

function TestimonialSection() {
  return (
    <div className="h-[682px] py-[80px] px-[121px] flex gap-[73px]">
      {/* Texts */}
      <div className="mb-[24px] w-[485px]">
        <p className="font-[400] text-[20px] font-lobsterTwo">Testimonial</p>
        <p className="font-[600] text-[38px]">
          What <span className="text-main">Customer Saying</span> About our
          Services
        </p>
        <TestimonialCards />
      </div>
      {/* Banner */}
      <div className="w-[638px] h-[522px] relative">
        <Image
          src="/testimonialBanner.png"
          fill
          alt="testimonial banner"
          objectFit="contain"
          className="absolute"
        />
      </div>
    </div>
  );
}

export default TestimonialSection;
