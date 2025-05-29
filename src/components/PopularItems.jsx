import React from "react";
import { Button } from "./ui/button";

function PopularItems({ children, itemTitle }) {
  return (
    <div className="px-[123px] my-[75px] h-[470px]">
      <div className="flex justify-between">
        <div>
          <p className="font-[400] text-[20px] font-lobsterTwo">Popular Food</p>
          <p className="font-[600] text-[40px]">
            Popular <span className="text-main">{itemTitle}</span>
          </p>
        </div>
        <Button
          variant="goast"
          className="font-[600] text-[20px] text-main border-2 border-main rounded-[8px] self-end"
        >
          View All
        </Button>
      </div>
      {children}
    </div>
  );
}

export default PopularItems;
