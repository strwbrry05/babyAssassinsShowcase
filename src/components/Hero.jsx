import React from "react";
import heroBA1 from "../assets/hero_BA1.png";
import heroBA2 from "../assets/hero_BA2.png";
import heroBA3 from "../assets/hero_BA3.png";

const Hero = (props) => {
  const heroArr = [
    {
      src: heroBA1,
      bgColor: "bg-(--color-BA1-yellow)",
      babyColor: "text-(--color-title-red)",
      subtitle: "",
    },
    {
      src: heroBA2,
      bgColor: "bg-(--color-BA2-blue)",
      babyColor: "text-(--color-title-red)",
      subtitle: "2 babies",
    },
    {
      src: heroBA3,
      bgColor: "bg-(--color-title-red)",
      babyColor: "text-(--color-BA3-yellow)",
      subtitle: "nice days",
    },
  ];

  function toggleEverything(index) {
    if (index === 2) {
      props.toggleSelection(props.selection[0].title);
    } else {
      props.toggleSelection(props.selection[index + 1].title);
    }
  }

  return props.selection.map((selected, index) => {
    if (selected.active === true) {
      return (
        <div
          className={`pt-[5em] flex flex-col justify-center items-center 
    ${heroArr[index].bgColor}`}
        >
          <img
            src={heroArr[index].src}
            alt=""
            className="h-[300px] z-0 

      sm:h-[400px] md:h-[500px]"
          />
          <div
            className="z-2 w-full h-[250px] bg-(--color-black) 
      rounded-tl-[300px] rounded-tr-[300px] mt-[-6em]

      sm:h-[300px] md:h-[350px] lg:max-w-[1100px] lg:h-[275px]"
          >
            <div
              className="h-full flex justify-center items-center
        flex-col cursor-pointer hover:scale-102 
        translate-1 transition-transform duration-500 ease-linear"
              onClick={() => toggleEverything(index)}
            >
              <p
                className={`z-2 text-[3rem] -skew-7 font-(family-name:--font-baby) 
          ${heroArr[index].babyColor} uppercase
          
          sm:text-[4.5rem] md:text-[5rem]`}
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
              <p className="z-1 mt-[-0.25em] text-[2rem] text-(--color-white) font-(family-name:--font-titles) uppercase">
                {heroArr[index].subtitle}
              </p>
            </div>
          </div>
        </div>
      );
    }
  });
};

export default Hero;
