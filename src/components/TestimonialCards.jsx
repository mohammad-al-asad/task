"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import leon from "@/../public/avatars/leon.jpg";
import avatar1 from "@/../public/avatars/avatar-1.jpg";
import avatar2 from "@/../public/avatars/avatar-2.jpg";
import avatar3 from "@/../public/avatars/avatar-3.jpg";

const testimonials = [
  {
    name: "Leon Fischer",
    role: "Satisfied Customer",
    image: leon,
    rating: 5,
    quote:
      "Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.",
  },
  {
    name: "Sara Thompson",
    role: "Happy Customer",
    image: avatar1,
    rating: 4,
    quote:
      "Tweet has completely changed how I order food. It's seamless, intuitive, and always on time. Highly recommended!",
  },
  {
    name: "Michael Rivera",
    role: "Loyal User",
    image: avatar2,
    rating: 4,
    quote:
      "I've been using Tweet for months now and it is awesome. Great service, friendly support, and lots of restaurant choices!",
  },
  {
    name: "Emily Chen",
    role: "First-Time User",
    image: avatar3,
    rating: 5,
    quote:
      "Tried Tweet for the first time and I’m impressed. It was cool. Fast delivery and the app is so easy to use!",
  },
];

const TestimonialCards = () => {
  const [current, setCurrent] = useState(0);

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % testimonials.length);
  // };

  // const prevSlide = () => {
  //   setCurrent(
  //     (prev) => (prev - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  return (
    <>
      <div className="bg-[#FDF0E9] h-[252px] w-[485px] border-2 border-[#FFCABB] p-[25px] mt-[28px] rounded-[8px]">
        {/* Texts */}
        <div className="font-[400] text-[16px] relative pr-8">
          <Image
            src="/coma.png"
            alt="comma"
            width={24}
            height={17}
            className=" absolute top-0 left-0"
          />
          <p className="ml-8 line-clamp-2 text-justify">
            {testimonials[current].quote}
          </p>
          <Image
            src="/coma.png"
            alt="comma"
            width={24}
            height={17}
            className="rotate-180 absolute bottom-0 right-0"
          />
        </div>

        {/* Profile */}
        <div className="flex items-center justify-between mt-[25px]">
          <div className="flex justify-center items-center gap-[14px]">
            <Image
              src={testimonials[current].image}
              width={74}
              height={74}
              alt="customer profile"
              className="rounded-full h-[74px] w-[74px]"
            />
            <div>
              <p className="font-[600] text-[20px]">
                {testimonials[current].name}
              </p>
              <p className="font-[300] text-[12px] text-[#767676]">
                {testimonials[current].role}
              </p>
            </div>
          </div>
          <div className="bg-main h-[34px] w-[116px] rounded-[4px] flex justify-center items-center text-white">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <FaStar key={i} className="text-white" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-main border ${
              index === current ? "bg-orange-500" : "bg-transparent"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default TestimonialCards;
