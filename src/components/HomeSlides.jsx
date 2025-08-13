import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BA1_img1 from "../assets/gallery/BA1/BA1_img1.png";
import BA1_img2 from "../assets/gallery/BA1/BA1_img2.png";
import BA1_img3 from "../assets/gallery/BA1/BA1_img3.png";
import BA1_img4 from "../assets/gallery/BA1/BA1_img4.png";
import BA1_img5 from "../assets/gallery/BA1/BA1_img5.png";
import BA1_img6 from "../assets/gallery/BA1/BA1_img6.png";

import BA2_img1 from "../assets/gallery/BA2/BA2_img1.png";
import BA2_img2 from "../assets/gallery/BA2/BA2_img2.png";
import BA2_img3 from "../assets/gallery/BA2/BA2_img3.png";
import BA2_img4 from "../assets/gallery/BA2/BA2_img4.png";
import BA2_img5 from "../assets/gallery/BA2/BA2_img5.png";
import BA2_img6 from "../assets/gallery/BA2/BA2_img6.png";

import BA3_img1 from "../assets/gallery/BA3/BA3_img1.png";
import BA3_img2 from "../assets/gallery/BA3/BA3_img2.png";
import BA3_img3 from "../assets/gallery/BA3/BA3_img3.png";
import BA3_img4 from "../assets/gallery/BA3/BA3_img4.png";
import BA3_img5 from "../assets/gallery/BA3/BA3_img5.png";
import BA3_img6 from "../assets/gallery/BA3/BA3_img6.png";

const HomeSlides = (props) => {
  const BA1_images = [
    BA1_img1,
    BA1_img2,
    BA1_img3,
    BA1_img4,
    BA1_img5,
    BA1_img6,
  ];

  const BA2_images = [
    BA2_img1,
    BA2_img2,
    BA2_img3,
    BA2_img4,
    BA2_img5,
    BA2_img6,
  ];

  const BA3_images = [
    BA3_img1,
    BA3_img2,
    BA3_img3,
    BA3_img4,
    BA3_img5,
    BA3_img6,
  ];

  const imagesArr = [BA1_images, BA2_images, BA3_images];

  const [showNumber, setShowNumber] = useState(1);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
      if (windowSize > 787) {
        setShowNumber(3);
      } else if (windowSize > 550) {
        setShowNumber(2);
      } else if (windowSize < 550) {
        setShowNumber(1);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(windowSize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize, showNumber]);

  const settings = {
    infinite: true,
    slidesToShow: showNumber,
    slidesToScroll: 1,
    centerMode: true,
    speed: 500,

    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#6C1418",
          width: "100%",
          height: "35px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="pb-[1em] pt-[3em] bg-(--color-black) overflow-x-hidden">
      <div
        className=" bg-(--color-BA1-red) text-(--color-title-red)
       text-[3rem] w-[100%] h-[35px] mb-[0.5em]"
      ></div>
      <div className="slider-container pb-[3em]  bg-(--color-black) overflow-x-hidden">
        <Slider {...settings}>
          {props.selection.map((selected, index) => {
            if (selected.active === true) {
              return imagesArr[index].map((img, i) => {
                return (
                  <div className="" key={i}>
                    <img
                      src={img}
                      alt="movie image"
                      className="p-[1em] pb-[3em]"
                    />
                  </div>
                );
              });
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlides;
