import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeaderNav() {
  return (
    <header className="h-[150px] flex flex-col">
      <div className="bg-main h-[50px] flex justify-center items-center text-white">
        <p> Free Delivery on Your First Order – Order Now!</p>
      </div>

      <div className="flex-1 flex justify-between px-[122px] items-center py-[8px] shadow bg-white">
        <div className="h-[56px] w-[102px] relative">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="absolute"
            objectFit="contain"
          />
        </div>
        <Link href="/profile" className="h-[65px] w-[65px] relative">
          <Image
            src="/profile.jpg"
            alt="profile picture"
            fill
            className="absolute rounded-full border border-main"
          />
        </Link>
      </div>
    </header>
  );
}

export default HeaderNav;
