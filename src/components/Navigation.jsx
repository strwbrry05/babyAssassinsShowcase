import React from "react";
import { MdMenuOpen } from "react-icons/md";

const Navigation = () => {
  return (
    <div
      className="w-[full] h-[75px] bg-(--color-black)
    flex justify-center items-center"
    >
      <div className="flex items-center justify-center gap-x-[20px]">
        <MdMenuOpen className="text-(--color-white) text-[2.5rem] rotate-270 cursor-pointer" />

        <h1
          className="flex flex-col justify-center items-center  
        text-(--color-white) font-(family-name:--font-titles) font-bold
        text-[1.5rem] uppercase cursor-pointer"
        >
          <div className="font-(family-name:--font-baby) text-(--color-title-red) -skew-7 mb-[-0.65em]">
            baby
          </div>
          <div>assassins</div>
        </h1>

        <MdMenuOpen className="text-(--color-black) text-[2.5rem]" />
      </div>
    </div>
  );
};

export default Navigation;
