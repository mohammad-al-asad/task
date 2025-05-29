import React from "react";
import burger from "@/../public/foods/burger.jpg";
import chicken from "@/../public/foods/chicken.jpg";
import pizza from "@/../public/foods/pizza.jpg";
import kebab from "@/../public/foods/kebab.jpg";
import Image from "next/image";
import { LiaStoreAltSolid } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
import { IoBicycleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";

function DescriptionRow1({ item }) {
  return (
    <div className="flex justify-between">
      <p className="font-[500] text-[18px]">{item.title}</p>
      <div>
        <p className="font-[300] text-[12px] text-[#767676] line-through">
          {item.price}
        </p>
        <p className="font-[600] text-[16px] text-main">{item.dicountPrice}</p>
      </div>
    </div>
  );
}

function DescriptionRow2({ item }) {
  return (
    <div className="flex justify-between mt-[12px]">
      <div>
        <p className="font-[400] text-[16px] flex gap-1 text-[#262626] items-center">
          <LiaStoreAltSolid /> {item.store}
        </p>
        <div className="flex gap-[24px] mt-[12px]">
          <p className="font-[500] text-[12px] flex gap-1 text-[#262626] items-center">
            <IoMdTime /> {item.time}
          </p>
          <p className="font-[500] text-[12px] flex gap-1 text-[#262626] items-center">
            <IoBicycleSharp /> {item.delivery}
          </p>
        </div>
      </div>
      <FaPlusCircle className="bg-white text-main h-[36px] w-[36px] self-end" />
    </div>
  );
}

function ImageOverlays({ item }) {
  return (
    <>
      {/* Rating */}
      <div className="w-[81px] h-[25px] z-10 absolute rounded-[29px] bg-white bottom-4 right-4 flex items-center justify-center">
        <p className="text-[12px] font-[500] flex justify-center items-center gap-1">
          <FaRegStar className="text-main mb-0.5" />
          <span>{item.ratings.points}</span>
          <span className="text-[#707070]">{`(${item.ratings.count})`}</span>
        </p>
      </div>

      {/* Discount */}
      <div className="w-[81px] h-[25px] z-10 absolute rounded-br-[29px] rounded-tr-[29px] bg-main text-white top-4 left-0 flex items-center justify-center">
        <p className="text-[12px] font-[500] flex justify-center items-center gap-1">
          <RiDiscountPercentLine className="text-white mb-0.5 h-[20px] w-[20px]" />
          {item.discount} off
        </p>
      </div>

      {/* Favorite */}
      <div className="absolute bg-white rounded-full h-[34px] w-[34px] justify-center items-center flex top-4 right-4">
        {item.favorite ? (
          <FaHeart className="text-main h-[20px] w-[20px]" />
        ) : (
          <FaRegHeart className="text-main h-[20px] w-[20px]" />
        )}
      </div>
    </>
  );
}

function FoodCards() {
  const foods = [
    {
      title: "Burger with Emmental Cheese",
      price: "$44.99",
      dicountPrice: "$49.99",
      image: burger,
      store: "Burger King",
      time: "30 min",
      delivery: "$02",
      ratings: {
        points: 4.8,
        count: 48,
      },
      favorite: false,
      discount: "30%",
    },
    {
      title: "Tandoori Chicken",
      price: "$44.99",
      dicountPrice: "$49.99",
      image: chicken,
      store: "Burger King",
      time: "30 min",
      delivery: "$02",
      ratings: {
        points: 4.8,
        count: 48,
      },
      favorite: true,
      discount: "30%",
    },
    {
      title: "Döner Kebab",
      price: "$44.99",
      dicountPrice: "$49.99",
      image: kebab,
      store: "Burger King",
      time: "30 min",
      delivery: "$02",
      ratings: {
        points: 4.8,
        count: 48,
      },
      favorite: false,
      discount: "30%",
    },
    {
      title: "Pepperoni Pizza Slice",
      price: "$44.99",
      dicountPrice: "$49.99",
      image: pizza,
      store: "Burger King",
      time: "30 min",
      delivery: "$02",
      ratings: {
        points: 4.8,
        count: 48,
      },
      favorite: false,
      discount: "30%",
    },
  ];
  return (
    <div className="flex mt-[50px] gap-[40px]">
      {foods.map((item, index) => (
        <div key={index} className="rounded-xl bg-white">
          {/* Image Section*/}
          <div className="w-[282px] h-[175px] relative">
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="absolute rounded-tl-xl rounded-tr-xl"
            />
            {/* ImageOverlays */}
            <ImageOverlays item={item} />
          </div>

          {/* Description Section */}
          <div className="p-[15px] mt-[15px]">
            {/* Row-1 */}
            <DescriptionRow1 item={item} />
            {/* Row-2 */}
            <DescriptionRow2 item={item} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCards;
