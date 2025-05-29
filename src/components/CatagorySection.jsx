import React from "react";
import sandwich from "@/../public/catagory/sandwich.png";
import donuts from "@/../public/catagory/donuts.png";
import kebab from "@/../public/catagory/kebab.png";
import shawarma from "@/../public/catagory/shawarma.png";
import burger from "@/../public/catagory/burger.png";
import taco from "@/../public/catagory/taco.png";
import pizza from "@/../public/catagory/pizza.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "./ui/button";

function CatagorySection() {
  const catagory = [
    {
      name: "Sandwich",
      colour: "bg-[#F75E28]",
      image: sandwich,
    },
    {
      name: "Pizza",
      colour: "bg-[#FA8D1C]",
      image: pizza,
    },
    {
      name: "Donuts",
      colour: "bg-[#E1B47B]",
      image: donuts,
    },
    {
      name: "Kebab",
      colour: "bg-[#FD683E]",
      image: kebab,
    },
    {
      name: "Shawarma",
      colour: "bg-[#FCBD00]",
      image: shawarma,
    },
    {
      name: "Burger",
      colour: "bg-[#FF8000]",
      image: burger,
    },
    {
      name: "Taco",
      colour: "bg-[#DA270F]",
      image: taco,
    },
  ];
  return (
    <div className="px-[123px] py-[72px] h-[422px]">
      <div>
        <p className="font-[400] text-[20px] font-lobsterTwo">Category</p>
        <p className="font-[600] text-[40px]">
          Popular <span className="text-main">Category</span>
        </p>
      </div>
      <div className="flex gap-[38px] mt-[65px] relative">
        {catagory.map((item, index) => (
          <div
            className={`${item.colour} rounded-[7px] flex flex-col justify-end relative items-center p-3 w-[139px] h-[128px]`}
            key={index}
          >
            <div className="absolute bottom-10">
              <Image src={item.image} width={140} height={95} alt={item.name} />
            </div>
            <h4 className="text-white text-[20px] font-[500]">{item.name}</h4>
          </div>
        ))}
        <Button className="absolute w-[48px] h-[48px] rounded-full bg-white text-black hover:text-white bottom-8 -left-20 shadow-xl">
          <FaArrowLeft />
        </Button>
        <Button className="absolute w-[48px] h-[48px] rounded-full bg-white text-black hover:text-white bottom-8 -right-20 shadow-xl">
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default CatagorySection;
