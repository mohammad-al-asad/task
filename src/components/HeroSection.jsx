import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaLocationCrosshairs } from "react-icons/fa6";
import HeroBanner from "./HeroBanner";

function HeroSection() {
  return (
    <div className="h-[791px] flex justify-around items-center px-[121px] bg-linear-to-bl from-50% to-[#fe8c4f3c] from-[#FDEDE5]">
      {/* Text Section */}
      <div className="w-[584px]">
        <h1 className="text-[100px] font-rancho text-main">Hungry?</h1>
        <h2 className="text-[72px] font-[700] tracking-tight">
          Let Us{" "}
          <span className="text-main">
            Bring <br /> The Feast to You
          </span>
        </h2>
        <h5 className="text-[18px] font-[400]">
          Explore hundreds of delicious options from top restaurants and Enjoy
          fast, reliable delivery right to you.
        </h5>

        <div className="flex mt-7 relative">
          <Input
            placeholder="Enter your location"
            className="border-main rounded-tr-none rounded-br-none h-[64px] focus-visible:ring-0 focus-visible:border-ring-main"
          />
          <Button className="bg-main rounded-tl-none rounded-bl-none h-[64px] w-[159px] text-[20px] font-[600] hover:bg-[#ed6a23b9]">
            Find Food
          </Button>
          <Button
            className="text-main absolute top-3 right-[170px]"
            variant="goast"
          >
            {" "}
            <FaLocationCrosshairs color="black" /> Locate me{" "}
          </Button>
        </div>
      </div>

      {/* Banner Section */}
      <HeroBanner />
    </div>
  );
}

export default HeroSection;
