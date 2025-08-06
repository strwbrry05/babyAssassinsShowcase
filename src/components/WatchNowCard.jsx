import React from "react";

const WatchNowCard = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-(--color-black)
    pb-[3em] pt-[3em]
    
    md:flex-row"
    >
      <div
        className="text-(--color-white) uppercase font-(family-name:--font-titles) text-center text-[2.25rem]
      font-bold pb-[1em] 
      
      md:mr-[5em]"
      >
        <p className="mb-[1.5em]">watch</p>
        <div className="text-[3.5rem]">
          <p className="font-(family-name:--font-baby) text-(--color-title-red) leading-[5px] -skew-6">
            baby
          </p>
          <p>assassins</p>
        </div>
        <p className="mt-[0.5em]">now</p>
      </div>
      <div
        className="flex justify-center items-center bg-(--color-title-red) text-(--color-white) w-[250px] h-[55px] text-center rounded-[7px]
      hover:shadow-[0px_0px_35px_rgba(216,33,33,1)] cursor-pointer hover:scale-[1.05]"
      >
        <p className="font-(family-name:--font-headings) font-bold text-[1.5rem] tracking-tight">
          find out where
        </p>
      </div>
    </div>
  );
};

export default WatchNowCard;
