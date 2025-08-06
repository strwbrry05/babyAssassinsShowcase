import React from "react";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="text-(--color-white) bg-(--color-black) flex flex-col font-(family-name:--font-headings) pt-[2em]
    
      md:flex-row md:justify-between md:items-center md:pt-[2em] md:pb-[2em]"
    >
      <div className="m-auto text-center md:pl-[2em] md:m-[0em] lg:ml-[3em]">
        <p className="text-[2.25rem] font-bold">STRWBRRY05</p>

        <div className="flex m-auto justify-center ">
          <div className="bg-(--color-title-red) p-[0.75em] mr-[1em] rounded-[5px] cursor-pointer">
            <LuGithub className="text-[1.75em]" />
          </div>
          <div className="bg-(--color-title-red) p-[0.75em] mr-[1em] rounded-[5px] cursor-pointer">
            <LuLinkedin className="text-[1.75em]" />
          </div>
          <div className="bg-(--color-title-red) p-[0.75em] rounded-[5px] cursor-pointer">
            <FaRegHeart className="text-[1.75em]" />
          </div>
        </div>
        <p className="font-bold mt-[0.5em]">&copy;2025 Jacqueline Molina</p>
      </div>

      <div
        className="text-center mt-[3em] pl-[5em] pr-[5em] mb-[5em] 
      
      md:text-left md:mr-[3em] md:w-[600px] md:text-[0.75rem] md:mb-[0em] md:mt-[0em] md:pr-[0em] md:pl-[3em]"
      >
        <p>
          this page is meant to serve as a fan creation, any false/incorrect
          information provided or represented is completely accidental and not
          ill intended. this page was created out of love for the movies.
        </p>
        <p className="mt-[3em] font-bold underline">
          information provided by the following
        </p>
        <p>
          imdb, rotten tomatoes, baby assassins press kit, wikipedia, omdb api,
          letterboxd
        </p>
      </div>
    </div>
  );
};

export default Footer;
