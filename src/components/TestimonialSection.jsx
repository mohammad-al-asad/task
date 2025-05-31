import Image from "next/image";
import React from "react";
import TestimonialCards from "./TestimonialCards";

function TestimonialSection() {
  return (
    <div className="h-[682px] py-[80px] px-[121px] flex w-full justify-around">
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
