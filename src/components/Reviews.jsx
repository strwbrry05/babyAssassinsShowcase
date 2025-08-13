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

import BA2_review1 from "../assets/reviews/BA2/BA2_review1.png";
import BA2_review2 from "../assets/reviews/BA2/BA2_review2.png";
import BA2_review3 from "../assets/reviews/BA2/BA2_review3.png";
import BA2_review4 from "../assets/reviews/BA2/BA2_review4.png";
import BA2_review5 from "../assets/reviews/BA2/BA2_review5.png";
import BA2_review6 from "../assets/reviews/BA2/BA2_review6.png";
import BA2_review7 from "../assets/reviews/BA2/BA2_review7.png";
import BA2_review8 from "../assets/reviews/BA2/BA2_review8.png";
import BA2_review9 from "../assets/reviews/BA2/BA2_review9.png";
import BA2_review10 from "../assets/reviews/BA2/BA2_review10.png";
import BA2_review11 from "../assets/reviews/BA2/BA2_review11.png";
import BA2_review12 from "../assets/reviews/BA2/BA2_review12.png";
import BA2_review13 from "../assets/reviews/BA2/BA2_review13.png";
import BA2_review14 from "../assets/reviews/BA2/BA2_review14.png";
import BA2_review15 from "../assets/reviews/BA2/BA2_review15.png";

import BA3_review1 from "../assets/reviews/BA3/BA3_review1.png";
import BA3_review2 from "../assets/reviews/BA3/BA3_review2.png";
import BA3_review3 from "../assets/reviews/BA3/BA3_review3.png";
import BA3_review4 from "../assets/reviews/BA3/BA3_review4.png";
import BA3_review5 from "../assets/reviews/BA3/BA3_review5.png";
import BA3_review6 from "../assets/reviews/BA3/BA3_review6.png";
import BA3_review7 from "../assets/reviews/BA3/BA3_review7.png";
import BA3_review8 from "../assets/reviews/BA3/BA3_review8.png";
import BA3_review9 from "../assets/reviews/BA3/BA3_review9.png";
import BA3_review10 from "../assets/reviews/BA3/BA3_review10.png";

const Reviews = (props) => {
  const reviews_BA1 = [
    BA1_review1,
    BA1_review2,
    BA1_review3,
    BA1_review4,
    BA1_review5,
    BA1_review6,
    BA1_review7,
    BA1_review8,
    BA1_review9,
    BA1_review10,
    BA1_review11,
    BA1_review12,
  ];

  const reviews_BA2 = [
    BA2_review1,
    BA2_review2,
    BA2_review3,
    BA2_review4,
    BA2_review5,
    BA2_review6,
    BA2_review7,
    BA2_review8,
    BA2_review9,
    BA2_review10,
    BA2_review11,
    BA2_review12,
    BA2_review13,
    BA2_review14,
    BA2_review15,
  ];

  const reviews_BA3 = [
    BA3_review1,
    BA3_review2,
    BA3_review3,
    BA3_review4,
    BA3_review5,
    BA3_review6,
    BA3_review7,
    BA3_review8,
    BA3_review9,
    BA3_review10,
  ];

  const reviewsArr = [reviews_BA1, reviews_BA2, reviews_BA3];

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
          {props.selection.map((selected, index) => {
            if (selected.active === true) {
              return reviewsArr[index].map((review, i) => {
                return (
                  <div className="" key={i}>
                    <img
                      src={review}
                      alt="fan review"
                      className="mb-[1em] pl-[1em] pr-[1em] m-auto"
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

export default Reviews;
