import React from "react";
import director from "../assets/director.png";

const Director = () => {
  return (
    <div className="bg-(--color-dark-blue) text-(--color-white) font-(family-name:--font-text) pt-[2em] pb-[2em]">
      <div
        className="flex flex-col justify-center items-start uppercase
      lg:flex-row lg:justify-center lg:items-center lg:pr-[32em] lg:mb-[-1.5em]"
      >
        <h2
          className="font-(family-name:--font-headings) font-bold text-[2.5rem] pl-[0.75em] tracking-tight
        lg:text-[2.5rem]"
        >
          Hugo Sakamoto |
        </h2>
        <p
          className="pl-[1.25em] font-(family-name:--font-text) text-[1.5rem] leading-2
        lg:pl-[0.5em] lg:text-[2rem]"
        >
          Director
        </p>
      </div>

      <div
        className="flex flex-col items-center pt-[2em]
      lg:flex-row lg:items-center lg:justify-center"
      >
        <img
          src={director}
          alt="director"
          className="w-[325px] mb-[0.5em] lg:ml-[2em]"
        />
        <div className="lg:w-[600px]">
          <p className="p-[2em] pt-[1.5em]">
            In 2016, at the age of 20, he released a romantic film about a
            couple whose hobby is murder, “Bae” which won the Grand Prix of the
            Cruel Student Film Festival 2016. He also won the Special Jury Prize
            at the Bucheon International Fantastic Film Festival, his first
            attempt at participating in an international film festival, and
            swept the independent film world with his overwhelming depiction of
            violence while still in college.
          </p>
          <p className="p-[2em] pt-[0em]">
            In 2021, he released "A Janitor" in Feb. and "Baby Assassins" in
            July, and his fame skyrocketed. In particular, "Baby Assassins" has
            been a huge hit in Japan and has been screened at several
            international film festivals, attracting attention from around the
            world. His films are notable for their action and violence, with a
            style and pacing influenced by manga and anime. His philosophy about
            his filmmaking is "Weekly Shonen Jump, not Hollywood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Director;
