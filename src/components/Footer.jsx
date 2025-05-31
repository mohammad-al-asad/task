import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BsFillSendFill } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="space-y-[24px] h-[56px] w-[293px]">
      <div className="relative w-[102px] h-[56px]">
        <Image
          src="/logo.png"
          alt="logo"
          fill
          className="absolute"
          objectFit="contain"
        />
      </div>
      <p className="font-[400] text-[16px] text-[#767676]">
        Your go-to choice for fast and fresh delivery, bringing the best to your
        door in no time
      </p>
      <div className="text-white flex gap-[8px]">
        <div className="bg-[#1C2125] rounded-full h-[44px] w-[44px] justify-center flex items-center">
          <FaFacebookF className="h-[14px] w-[14px]" />
        </div>
        <div className="bg-[#1C2125] rounded-full h-[44px] w-[44px] justify-center flex items-center">
          <FaTwitter className="h-[14px] w-[14px]" />
        </div>
        <div className="bg-main rounded-full h-[44px] w-[44px] justify-center flex items-center">
          <FaLinkedinIn className="h-[14px] w-[14px]" />
        </div>
        <div className="bg-[#1C2125] rounded-full h-[44px] w-[44px] justify-center flex items-center">
          <FaWhatsapp className="h-[14px] w-[14px]" />
        </div>
      </div>
    </div>
  );
}

function QuickLink({ links }) {
  return (
    <div className="mt-[21px] flex flex-col items-start">
      <p className="font-[600] text-[24px] text-white mb-[31px]">Quick Link</p>
      {links.map((item, index) => (
        <Button
          variant="link"
          className="font-[400] text-[16px] text-[#767676]"
          key={index}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

function Newsletter() {
  return (
    <div className="mt-[21px] flex flex-col items-start w-[337px]">
      <p className="font-[600] text-[24px] text-white mb-[31px]">Newsletter</p>
      <p className="font-[400] text-[16px] text-[#767676]">
        Subscribe Our newsletter to get our Latest Update & News
      </p>
      <div className="flex mt-7 relative">
        <Input
          placeholder="Enter Email"
          className="text-white border-none bg-[#181D21] rounded-[4px] rounded-tr-none rounded-br-none w-[280px] h-[50px] focus-visible:ring-0 focus-visible:border-ring-main"
        />
        <Button className="bg-main rounded-[4px]  rounded-tl-none rounded-bl-none h-[50px] w-[50px] text-[20px] font-[600] hover:bg-[#ed6a23b9]">

          <BsFillSendFill className="text-white h-[50px] w-[50px]"/>
        </Button>
      </div>
    </div>
  );
}

function Footer() {
  const QuickLink1 = ["About Us", "How We works", "Career"];
  const QuickLink2 = ["Privacy Policies", "Terms & Conditions", "Faq"];
  return (
    <footer className="bg-black h-[440px] justify-between flex flex-col items-center">
      <div className="px-[94px] pt-[47px] flex gap-[75px]">
        {/* Social Media */}
        <SocialMedia />
        {/* Quick Link-1 */}
        <QuickLink links={QuickLink1} />
        {/* Quick Link-2 */}
        <QuickLink links={QuickLink2} />
        {/* Newsletter */}
        <Newsletter />
      </div>
      <div className="flex justify-center border-t-2 border-[#5C5C5C] w-full">
        <p className="font-[300] text-[12px] text-[#767676] py-[25px]">
          © 2024 Tweet. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
