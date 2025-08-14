import React from "react";
import heroBA1 from "../assets/hero_BA1.png";
import heroBA2 from "../assets/hero_BA2.png";
import heroBA3 from "../assets/hero_BA3.png";

const Hero = (props) => {
  return (
    <div
      className="pt-[5em] flex flex-col justify-center items-center 
    bg-(--color-BA1-yellow)"
    >
      <img
        src={heroBA1}
        alt=""
        className="h-[300px] z-0 

      sm:h-[400px] md:h-[500px]"
      />
      <div
        className="z-2 w-full h-[250px] bg-(--color-black) 
      rounded-tl-[300px] rounded-tr-[300px] mt-[-6em]

      sm:h-[300px] md:h-[400px] lg:max-w-[1100px] lg:h-[275px]"
      >
        <div
          className="h-full flex justify-center items-center
        flex-col cursor-pointer"
          onClick={() => console.log("hi")}
        >
          <p
            className="z-2 text-[3rem] -skew-7 font-(family-name:--font-baby) 
          text-(--color-title-red) uppercase
          
          sm:text-[4.5rem] md:text-[5rem]"
          >
            baby
          </p>
          <p
            className="z-1 mt-[-.75em] text-[3rem] font-bold 
          font-(family-name:--font-titles) text-(--color-white) uppercase
          
          sm:text-[4.5rem] md:text-[5rem]"
          >
            assassins
          </p>
          <p>2 babies</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
