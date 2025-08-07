import React from "react";

const CastCard = (props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center pt-[3em] pb-[3em] 
    bg-(--color-black) text-(--color-white) font-(family-name:--font-text)
    
    lg:flex-row ${props.flexDirection} lg:pt-[0em] lg:pb-[0em] lg:justify-start overflow-x-hidden`}
    >
      <div
        className={`w-[85%] lg:w-[50%] lg:flex lg:justify-end ${props.justifyIMG}
      md:flex md:justify-center`}
      >
        <img
          src={props.src}
          alt={props.alt}
          className="md:max-w-[600px] lg:w-[600px]"
        />
      </div>

      <div
        className="w-[85%] lg:w-[50%] pl-[2em] pr-[2em]
        md:max-w-[600px]
      lg:w-[500px] lg:flex lg:flex-col lg:justify-start lg:items-start
      xl:w-[600px] pb-[1em]"
      >
        <div className="leading-7 mb-[1.5em] lg:leading-8 ">
          <h2
            className="mt-[0.75em] lg:mt-[0.75em] text-[2.5rem] font-(family-name:--font-headings) 
          uppercase font-bold
          
          lg:text-[2.75rem] xl:text-[3rem]"
          >
            {props.character}
          </h2>
          <p className="lg:text-[1.5rem]">played by {props.actor}</p>
        </div>
        <p className="xl:text-[1.15rem]">{props.blurb}</p>
        <button
          className="bg-(--color-title-red) w-[100px] h-[35px] 
        rounded-[10px] text-[1.15rem] mt-[1em] active:text-(--color-gray)
        active:bg-(--color-BA1-red) cursor-pointer
        
        lg:text-[1.25rem] lg:w-[150px]"
        >
          see more
        </button>
      </div>
    </div>
  );
};

export default CastCard;
