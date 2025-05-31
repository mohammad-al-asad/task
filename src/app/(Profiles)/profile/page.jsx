"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProfileBlock from "@/components/utility/ProfileBlock";
import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Profile() {
  const [name, setName] = useState("Mark Jecno");
  const [email, setEmail] = useState("mark-jecno@gmail.com");
  const [address, setAddress] = useState(
    "93, Songbird Cir, Blackville, South Carolina, USA-29817"
  );
  return (
    <div className="flex flex-1 flex-col">
      {/* Profile Details */}
      <div className="flex flex-col rounded-[10px] max-w-[895px] mb-[46px]">
        <div className="rounded-[10px] p-6 h-[468px] bg-white">
          <p className="font-[500] text-[24px] text-black mb-[30px]">Profile</p>
          <div className="space-y-[24px]">
            {/* Name */}
            <ProfileBlock>
              <IoPerson className="text-main h-[18px] w-[18px] mt-0.5" />
              <div className="">
                <p className="text-[16px] font-[500] ml-2.5">Name:</p>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="shadow-none text-[#5C5C5C] font-[400] text-[16px] focus-visible:ring-0 border-none w-[760px]"
                />
              </div>
            </ProfileBlock>
            {/* Email */}
            <ProfileBlock>
              <MdEmail className="text-main h-[18px] w-[18px] mt-0.5" />
              <div className="">
                <p className="text-[16px] font-[500] ml-2.5">Email:</p>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="shadow-none text-[#5C5C5C] font-[400] text-[16px] focus-visible:ring-0 border-none w-[760px]"
                />
              </div>
            </ProfileBlock>
            {/* Address */}
            <ProfileBlock>
              <IoIosLock className="text-main h-[18px] w-[18px] mt-0.5" />
              <div className="">
                <p className="text-[16px] font-[500] ml-2.5">Address:</p>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  className="shadow-none text-[#5C5C5C] font-[400] text-[16px] focus-visible:ring-0 border-none w-[760px]"
                />
              </div>
            </ProfileBlock>
          </div>
        </div>
        <Button className="bg-main w-[198px] h-[48px] self-end rounded-[12px] mt-[17px]">
          Update
        </Button>
      </div>

      {/* Change Password */}
      <div className="flex flex-col rounded-[10px] max-w-[895px]">
        <div className="rounded-[10px] p-6 h-[468px] bg-white">
          <p className="font-[500] text-[24px] text-black mb-[30px]">
            Change Password
          </p>
          <div className="space-y-[24px]">
            {/* Current Password */}
            <ProfileBlock>
              <IoIosLock className="text-main h-[18px] w-[18px] mt-0.5" />
              <div className="">
                <p className="text-[16px] font-[500] ml-2.5">
                  Current Password:
                </p>
                <Input
                  type="password"
                  className="shadow-none text-[#5C5C5C] font-[400] text-[16px] focus-visible:ring-0 border-none w-[760px]"
                />
              </div>
            </ProfileBlock>

            {/* New Password */}
            <ProfileBlock>
              <IoIosLock className="text-main h-[18px] w-[18px] mt-0.5" />
              <div className="">
                <p className="text-[16px] font-[500] ml-2.5">New Password:</p>
                <Input
                  type="password"
                  className="shadow-none text-[#5C5C5C] font-[400] text-[16px] focus-visible:ring-0 border-none w-[760px]"
                />
              </div>
            </ProfileBlock>
            {/* Confirm password */}
            <ProfileBlock>
              <IoIosLock className="text-main h-[18px] w-[18px] mt-0.5" />
              <div className="">
                <p className="text-[16px] font-[500] ml-2.5">
                  Confirm Password:
                </p>
                <Input
                  type="password"
                  className="shadow-none text-[#5C5C5C] font-[400] text-[16px] focus-visible:ring-0 border-none w-[760px]"
                />
              </div>
            </ProfileBlock>
          </div>
        </div>
        <Button className="bg-main w-[198px] h-[48px] self-end rounded-[12px] mt-[17px]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default Profile;
