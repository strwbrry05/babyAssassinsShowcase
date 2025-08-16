import React, { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";
import ScrollToTop from "../components/ScrollToTop";

import Gallery from "../components/Gallery.jsx";
import WatchNowCard from "../components/WatchNowCard.jsx";

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Element name="firstImage"></Element>
      <Gallery />
      <WatchNowCard />

      <Link
        to="firstImage"
        smooth={true}
        offset={-100}
        className={`z-99 fixed bottom-10 cursor-pointer ${
          isVisible ? "block" : "hidden"
        } `}
      >
        <div>
          <ScrollToTop />
        </div>
      </Link>
    </>
  );
};

export default GalleryPage;
