import React from "react";
import BA1_img1 from "../assets/gallery/BA1_img1.png";

const Gallery = () => {
  const imgArr = [
    {
      src: BA1_img1,
      category: "BA1",
    },
    {
      src: BA1_img1,
      category: "BA1",
    },
    {
      src: BA1_img1,
      category: "BA1",
    },
    {
      src: BA1_img1,
      category: "BA1",
    },
    {
      src: BA1_img1,
      category: "BA1",
    },
  ];

  return (
    <div
      className="bg-(--color-black) text-(--color-white) font-(family-name:--font-text) pt-[3em] pb-[3em]
    flex flex-col pl-[2em] pr-[2em] justify-center items-center"
    >
      <p className=" mb-[1em] w-full">
        click on an image to enlarge or download
      </p>
      <div
        className="flex flex-col gap-y-[20px] justify-center items-center
      md:flex-row md:flex-wrap md:gap-x-[20px] md:justify-start
      md:max-w-[1360px]"
      >
        {imgArr.map((image, index) => {
          return (
            <div key={index} className="grow-2">
              <img
                src={image.src}
                alt=""
                className="w-[325px] cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
