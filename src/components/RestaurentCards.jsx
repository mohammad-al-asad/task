import React from "react";
import burgerKing from "@/../public/restaurents/burgerKing.jpg";
import bistro from "@/../public/restaurents/bistro.jpg";
import delight from "@/../public/restaurents/delight.jpg";
import table from "@/../public/restaurents/table.jpg";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { IoBicycleSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";

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
    </>
  );
}

function RestaurentCards() {
  const Restaurents = [
    {
      image: burgerKing,
      store: "Burger King",
      time: "20-30 min",
      delivery: "$10",
      ratings: {
        points: 4.8,
        count: 48,
      },
      discount: "10%",
      foods: ["pizza", "burger", "pasta", "Chicken Fry"],
    },
    {
      image: bistro,
      store: "AlpenFlair Bistro",
      time: "20-30 min",
      delivery: "$10",
      ratings: {
        points: 4.8,
        count: 48,
      },
      discount: "10%",
      foods: ["pizza", "burger", "pasta", "Chicken Fry"],
    },
    {
      image: table,
      store: "Mozart's Table",
      time: "20-30 min",
      delivery: "$10",
      ratings: {
        points: 4.8,
        count: 48,
      },
      discount: "10%",
      foods: ["pizza", "burger", "pasta", "Chicken Fry"],
    },
    {
      image: delight,
      store: "Vienna's Delight",
      time: "20-30 min",
      delivery: "$10",
      ratings: {
        points: 4.8,
        count: 48,
      },
      discount: "10%",
      foods: ["pizza", "burger", "pasta", "Chicken Fry"],
    },
  ];
  return (
    <div className="flex mt-[50px] gap-[40px]">
      {Restaurents.map((item, index) => (
        <div key={index} className="rounded-xl bg-white">
          {/* Image Section*/}
          <div className="w-[282px] h-[175px] relative">
            {/* Image */}
            <Image
              src={item.image}
              alt={item.store}
              fill
              className="absolute rounded-tl-xl rounded-tr-xl"
            />
            {/* ImageOverlays */}
            <ImageOverlays item={item} />
          </div>

          {/* Description Section */}
          <div className="p-[15px] mt-[15px]">
            {/* Row-1 */}
            <p className="font-[500] text-[18px]">{item.store}</p>

            {/* Row-2 */}
            <div className="flex justify-between mt-[12px]">
              <div>
                <div className="flex gap-[24px] mt-[12px]">
                  <p className="font-[500] text-[12px] flex gap-1 items-center text-main">
                    <IoMdTime color="black" /> {item.time}
                  </p>
                  <p className="font-[500] text-[12px] flex gap-1 items-center text-main">
                    <IoBicycleSharp color="black" />
                    Delivery Fee {item.delivery}
                  </p>
                </div>
              </div>
            </div>

            {/* Row-3 */}
            <p className="text-[#767676] font-[400] text-[12px] mt-[12px]">
              {item.foods.reduce((accumulator, food) => {
                return accumulator + food + " | ";
              }, "| ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurentCards;
