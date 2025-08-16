import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";

const ScrollToTop = () => {
  return (
    <div
      className="z-99 sticky p-[0.75em] bg-(--color-BA1-red)
    flex justify-center items-center w-[50px] h-[50px]"
    >
      <BiSolidUpArrow className="text-[3rem] text-(--color-white)" />
    </div>
  );
};

export default ScrollToTop;
