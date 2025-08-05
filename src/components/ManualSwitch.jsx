import React, { useState } from "react";
import ba1 from "../assets/ba1.png";
import ba2 from "../assets/posters/ba2.png";
import ba3 from "../assets/posters/ba3.png";

const ManualSwitch = () => {
  const moviesObj = [
    {
      src: ba1,
      title: "movie1",
      active: true,
      highlight: "shadow-[0px_0px_35px_rgba(190,146,0,1)]",
    },
    {
      src: ba2,
      title: "movie2",
      active: false,
      highlight: "shadow-[0px_0px_35px_rgba(31,161,207,1)]",
    },
    {
      src: ba3,
      title: "movie3",
      active: false,
      highlight: "shadow-[0px_0px_35px_rgba(216,33,33,1)]",
    },
  ];

  const [selection, setSelection] = useState(moviesObj);

  function toggleSelection(title) {
    setSelection(
      selection.map((selected) => {
        if (selected.title === title) {
          selected.active = true;
        } else {
          selected.active = false;
        }
        return selected;
      })
    );
  }

  return (
    <div
      className="flex flex-col justify-center items-center bg-(--color-black) pt-[5em] pb-[2em]
    md:flex-row"
    >
      {selection.map((img) => {
        return (
          <img
            key={img.title}
            src={img.src}
            alt="poster baby assassins 1"
            className={`w-[175px] mb-[3em] cursor-pointer 
                md:mr-[1em] md:ml-[1em] md:mt-[3em] md:w-auto md:h-[275px] lg:ml-[2em] lg:mr-[2em]
                ${
                  img.active
                    ? `${img.highlight} w-[200px] md:w-auto md:h-[310px]`
                    : ""
                }`}
            onClick={() => toggleSelection(img.title)}
          />
        );
      })}
    </div>
  );
};

export default ManualSwitch;
