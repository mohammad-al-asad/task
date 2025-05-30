"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";

function Menu() {
  const [menu, setMenu] = useState([
    {
      name: "Profile",
      Icon: <CgProfile className="h-[15px] w-[15px] mb-0.5" />,
      active: true,
    },
    {
      name: "Order",
      Icon: <MdOutlineShoppingBag className="h-[15px] w-[15px] mb-0.5" />,
      active: false,
    },
    {
      name: "StampCard",
      Icon: <CiDiscount1 className="h-[15px] w-[15px] mb-0.5" />,
      active: false,
    },
    {
      name: "Help",
      Icon: <IoHelpCircleOutline className="h-[15px] w-[15px] mb-0.5" />,
      active: false,
    },
    {
      name: "Setting",
      Icon: <IoSettingsOutline className="h-[15px] w-[15px] mb-0.5" />,
      active: false,
    },
    {
      name: "Log Out",
      Icon: <CiLogin className="h-[15px] w-[15px] mb-0.5" />,
      active: false,
    },
  ]);
  function activeLink(i) {
    const newMenu = [];
    menu.forEach((value, index) => {
      if (i === index) {
        value.active = true;
      } else {
        value.active = false;
      }
      newMenu[index] = value;
    });
    setMenu(newMenu);
  }
  return (
    <div className="mt-[200px] ml-[28px] space-y-[16px] text-[#5C5C5C] font-[400] text-[16px]">
      {menu.map((item, index) => (
        <Link
        href="#"
          onClick={() => activeLink(index)}
          key={index}
          className={` flex items-center gap-[5px] text-[14px] ${
            item.active ? "text-main font-[500]" : " font-[400]"
          }`}
        >
          {item.Icon}
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

function ProfileNavigation() {
  return (
    <div className="w-[282px] h-[1076px] bg-white rounded-t-[6px] mb-[224px]">
      {/* Profile */}
      <div className="h-[150px] w-[282px] bg-linear-to-tl from-[#FF8D2F] to-[#FFD3B0] relative rounded-t-[6px]">
        <div className="flex justify-center items-center absolute top-28 h-full w-full">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/avatars/DP.png"
              alt="profile picture"
              height={100}
              width={100}
              className="rounded-full h-[100px] w-[100px]"
            />
            <div className="flex flex-col justify-center items-center mt-[32px]">
              <h5 className="font-[500] text-[18px] mb-[4px]">Mark Jecno</h5>
              <h6 className="font-[400] text-[14px] text-[#747474]">
                mark-jecno@gmail.com
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* Menu */}
      <Menu />
    </div>
  );
}

export default ProfileNavigation;
