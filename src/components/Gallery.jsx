import React, { useState } from "react";
import BA1_img1 from "../assets/gallery/BA1/BA1_img1.png";
import BA1_img2 from "../assets/gallery/BA1/BA1_img2.png";
import BA1_img3 from "../assets/gallery/BA1/BA1_img3.png";
import BA1_img4 from "../assets/gallery/BA1/BA1_img4.png";
import BA1_img5 from "../assets/gallery/BA1/BA1_img5.png";
import BA1_img6 from "../assets/gallery/BA1/BA1_img6.png";
import BA1_img7 from "../assets/gallery/BA1/BA1_img7.png";
import BA1_img8 from "../assets/gallery/BA1/BA1_img8.png";
import BA1_img9 from "../assets/gallery/BA1/BA1_img9.png";
import BA1_img10 from "../assets/gallery/BA1/BA1_img10.png";
import BA1_img11 from "../assets/gallery/BA1/BA1_img11.png";
import BA1_img12 from "../assets/gallery/BA1/BA1_img12.png";
import BA1_img13 from "../assets/gallery/BA1/BA1_img13.png";

import BA2_img1 from "../assets/gallery/BA2/BA2_img1.png";
import BA2_img2 from "../assets/gallery/BA2/BA2_img2.png";
import BA2_img3 from "../assets/gallery/BA2/BA2_img3.png";
import BA2_img4 from "../assets/gallery/BA2/BA2_img4.png";
import BA2_img5 from "../assets/gallery/BA2/BA2_img5.png";
import BA2_img6 from "../assets/gallery/BA2/BA2_img6.png";
import BA2_img7 from "../assets/gallery/BA2/BA2_img7.png";
import BA2_img8 from "../assets/gallery/BA2/BA2_img8.png";
import BA2_img9 from "../assets/gallery/BA2/BA2_img9.png";
import BA2_img10 from "../assets/gallery/BA2/BA2_img10.png";
import BA2_img11 from "../assets/gallery/BA2/BA2_img11.png";
import BA2_img12 from "../assets/gallery/BA2/BA2_img12.png";
import BA2_img13 from "../assets/gallery/BA2/BA2_img13.png";
import BA2_img14 from "../assets/gallery/BA2/BA2_img14.png";
import BA2_img15 from "../assets/gallery/BA2/BA2_img15.png";
import BA2_img16 from "../assets/gallery/BA2/BA2_img16.png";

import BA3_img1 from "../assets/gallery/BA3/BA3_img1.png";
import BA3_img2 from "../assets/gallery/BA3/BA3_img2.png";
import BA3_img3 from "../assets/gallery/BA3/BA3_img3.png";
import BA3_img4 from "../assets/gallery/BA3/BA3_img4.png";
import BA3_img5 from "../assets/gallery/BA3/BA3_img5.png";
import BA3_img6 from "../assets/gallery/BA3/BA3_img6.png";
import BA3_img7 from "../assets/gallery/BA3/BA3_img7.png";
import BA3_img8 from "../assets/gallery/BA3/BA3_img8.png";

import { IoDownloadOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Gallery = () => {
  const imgArr = [
    {
      src: BA1_img1,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img2,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img3,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img4,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img5,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img6,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img7,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img8,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img9,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img10,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img11,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img12,
      category: ["none", "BA1"],
    },
    {
      src: BA1_img13,
      category: ["none", "BA1", "BA2", "BA3"],
    },
    {
      src: BA2_img1,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img2,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img3,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img4,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img5,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img6,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img7,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img8,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img9,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img10,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img11,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img12,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img13,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img14,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img15,
      category: ["none", "BA2"],
    },
    {
      src: BA2_img16,
      category: ["none", "BA2"],
    },
    {
      src: BA3_img1,
      category: ["none", "BA3"],
    },
    {
      src: BA3_img2,
      category: ["none", "BA3"],
    },
    {
      src: BA3_img3,
      category: ["none", "BA3"],
    },
    {
      src: BA3_img4,
      category: ["none", "BA3"],
    },
    {
      src: BA3_img5,
      category: ["none", "BA3"],
    },
    {
      src: BA3_img6,
      category: ["none", "BA3"],
    },
    {
      src: BA3_img7,
      category: ["none", "BA3"],
    },
    {
      src: BA3_img8,
      category: ["none", "BA3"],
    },
  ];

  const [images, setImages] = useState(shuffleArr(imgArr));
  const [showImage, setShowImage] = useState([false, null]);

  function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function selectIMG(name) {
    setShowImage([true, name]);
  }

  function filterIMG(filterValue) {
    setImages(imgArr.filter((img) => img.category.includes(filterValue)));
    console.log(filterValue);
  }

  return (
    <div
      className="bg-(--color-black) text-(--color-white) font-(family-name:--font-text) pt-[3em] pb-[3em]
    flex flex-col pl-[2em] pr-[2em] justify-center items-center"
    >
      <div
        className="w-[80%] ml-[2em] mb-[1em]
      flex flex-col 
      md:flex-row justify-between"
      >
        <p className="mb-[1em]">click on an image to enlarge or download</p>

        <form onChange={(e) => filterIMG(e.target.value)}>
          <label htmlFor="galleryFilter" className="mr-[0.5em]">
            filter:
          </label>
          <select
            name="galleryFilter"
            id="galleryFilter"
            className="border-2 rounded-[5px] bg-(--color-black) cursor-pointer"
            defaultValue={"none"}
          >
            <option value="none">none</option>
            <option value="BA1">baby assassins</option>
            <option value="BA2">baby assassins: 2 babies</option>
            <option value="BA3"> baby assassins: nice days</option>
          </select>
        </form>
      </div>

      <div
        className="flex flex-col gap-y-[20px] justify-center items-center

      md:flex-row md:flex-wrap md:gap-x-[20px] md:justify-center
      md:max-w-[1360px] "
      >
        {images.map((image, index) => {
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
        <div className="z-6 fixed top-0 size-full bg-(--color-black) flex flex-col justify-center items-center overflow-y-hidden">
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
