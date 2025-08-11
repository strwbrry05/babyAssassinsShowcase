import React, { useState } from "react";
import BA1_img1 from "../assets/gallery/BA1_img1.png";
import BA1_img2 from "../assets/gallery/BA1_img2.png";
import BA1_img3 from "../assets/gallery/BA1_img3.png";
import BA1_img4 from "../assets/gallery/BA1_img4.png";
import BA1_img5 from "../assets/gallery/BA1_img5.png";
import BA1_img6 from "../assets/gallery/BA1_img6.png";
import BA1_img7 from "../assets/gallery/BA1_img7.png";
import BA1_img8 from "../assets/gallery/BA1_img8.png";
import BA1_img9 from "../assets/gallery/BA1_img9.png";
import BA1_img10 from "../assets/gallery/BA1_img10.png";
import BA1_img11 from "../assets/gallery/BA1_img11.png";
import BA1_img12 from "../assets/gallery/BA1_img12.png";
import BA1_img13 from "../assets/gallery/BA1_img13.png";

import { IoDownloadOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Gallery = () => {
  const imgArr = [
    {
      src: BA1_img1,
      category: "BA1",
      isSelected: false,
    },
    {
      src: BA1_img2,
      category: "BA1",
      isSelected: false,
    },
    {
      src: BA1_img3,
      category: "BA1",
      isSelected: false,
    },
    {
      src: BA1_img4,
      category: "BA1",
      isSelected: false,
    },
    {
      src: BA1_img5,
      category: "BA1",
      isSelected: false,
    },
    {
      src: BA1_img6,
      category: "BA1",
      isSelected: false,
    },
    {
      src: BA1_img7,
      category: "BA1",
      isSelected: false,
    },
    {
      src: BA1_img8,
      category: "BA1",
      isSelected: false,
    },
    {
      src: BA1_img9,
      category: "BA1",
    },
    // {
    //   src: BA1_img10,
    //   category: "BA1",
    // },
    // {
    //   src: BA1_img11,
    //   category: "BA1",
    // },
    // {
    //   src: BA1_img12,
    //   category: "BA1",
    // },
    // {
    //   src: BA1_img13,
    //   category: "BA1",
    // },
  ];

  const [showImage, setShowImage] = useState([false, null]);

  function selectIMG(name) {
    console.log(showImage);

    setShowImage([true, name]);
    console.log(showImage);
  }

  return (
    <div
      className="bg-(--color-black) text-(--color-white) font-(family-name:--font-text) pt-[3em] pb-[3em]
    flex flex-col pl-[2em] pr-[2em] justify-center items-center"
    >
      <p className="ml-[2em] mb-[1em] w-full">
        click on an image to enlarge or download
      </p>
      <div
        className="flex flex-col gap-y-[20px] justify-center items-center

      md:flex-row md:flex-wrap md:gap-x-[20px] md:justify-center
      md:max-w-[1360px] "
      >
        {imgArr.map((image, index) => {
          return (
            <div key={index} className="grid grid-rows-3 grid-cols-3">
              <a
                href={image.src}
                download
                className="z-1 flex justify-center items-center place-self-start justify-self-end
                 row-start-1 row-end-2 col-start-3 col-end-4 bg-(--color-title-red) h-[40px] w-[40px] mt-[0.5em] mr-[0.5em]
                 rounded-[10px] 
                 active:bg-(--color-gray)"
              >
                <IoDownloadOutline className="text-[1.5rem] hover:text-[1.75rem] " />
              </a>

              <img
                src={image.src}
                alt=""
                className="z-0 w-[325px] cursor-pointer hover:grayscale
                row-start-1 row-end-4 col-start-1 col-end-4"
                onClick={() => {
                  selectIMG(image.src);
                }}
              />
            </div>
          );
        })}
      </div>
      {showImage[0] && (
        <div className="z-1 fixed top-0 size-full bg-(--color-black) flex flex-col justify-center items-center overflow-y-hidden">
          <button className="cursor-pointer w-[320px] md:w-[500px] mb-[0.5em]">
            <IoMdCloseCircleOutline
              className="text-[2.25em] justify-self-end"
              onClick={() => setShowImage([false, null])}
            />
          </button>
          <img
            src={showImage[1]}
            alt=""
            className="bg-yellow-600 w-[320px] md:w-[500px]"
          />
          <a href={showImage[1]} download>
            <button
              className="cursor-pointer mt-[1em] bg-(--color-title-red) h-[35px] w-[200px] rounded-[10px]
            hover:bg-(--color-gray)"
            >
              download image
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Gallery;
