import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BA1_review1 from "../assets/reviews/BA1/BA1_review1.png";
import BA1_review2 from "../assets/reviews/BA1/BA1_review2.png";
import BA1_review3 from "../assets/reviews/BA1/BA1_review3.png";
import BA1_review4 from "../assets/reviews/BA1/BA1_review4.png";
import BA1_review5 from "../assets/reviews/BA1/BA1_review5.png";
import BA1_review6 from "../assets/reviews/BA1/BA1_review6.png";
import BA1_review7 from "../assets/reviews/BA1/BA1_review7.png";
import BA1_review8 from "../assets/reviews/BA1/BA1_review8.png";
import BA1_review9 from "../assets/reviews/BA1/BA1_review9.png";
import BA1_review10 from "../assets/reviews/BA1/BA1_review10.png";
import BA1_review11 from "../assets/reviews/BA1/BA1_review11.png";
import BA1_review12 from "../assets/reviews/BA1/BA1_review12.png";

const Reviews = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    adaptiveHeight: true,
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
          <div className="">
            <img
              src={BA1_review1}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review2}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review3}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>

          <div className="">
            <img
              src={BA1_review4}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review5}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review6}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review7}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review8}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review9}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review10}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review11}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
          <div className="">
            <img
              src={BA1_review12}
              alt=""
              className="mb-[1em] pl-[1em] pr-[1em] m-auto"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
