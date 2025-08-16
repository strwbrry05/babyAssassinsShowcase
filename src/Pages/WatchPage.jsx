import React, { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";
import ScrollToTop from "../components/ScrollToTop";

import WatchNow from "../components/WatchNow.jsx";

import ba1 from "../assets/ba1.png";
import ba2 from "../assets/ba2.png";
import ba3 from "../assets/ba3.png";

const WatchPage = () => {
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
      <Element name="firstMovie"></Element>
      <WatchNow
        poster={ba1}
        stream={["tubi", "pluto tv", "roku", "plex", "hoopla"]}
        rent={[
          "hi-yah",
          "prime",
          "apple tv",
          "google play",
          "youtube",
          "fandango",
        ]}
      />
      <WatchNow
        poster={ba2}
        stream={["tubi", "roku", "plex", "hoopla"]}
        rent={[
          "hi-yah",
          "prime",
          "apple tv",
          "google play",
          "youtube",
          "fandango",
        ]}
      />
      <WatchNow poster={ba3} buy={"Buy Bluray on August 26 2025"} />

      <Link
        to="firstMovie"
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

export default WatchPage;
