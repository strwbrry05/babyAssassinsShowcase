import React, { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";
import ScrollToTop from "../components/ScrollToTop";

import Hero from "../components/Hero";
import SynopsisCard from "../components/SynopsisCard";
import CastCard from "../components/CastCard";
import Reviews from "../components/Reviews";
import Director from "../components/Director";
import ManualSwitch from "../components/ManualSwitch";
import HomeSlides from "../components/HomeSlides";

import mahiro from "../assets/cast/mahiroBA1.png";
import mahiroBA2 from "../assets/cast/mahiroBA2.png";
import mahiroBA3 from "../assets/cast/mahiroBA3.png";

import chisato from "../assets/cast/chisatoBA1.png";
import chisatoBA2 from "../assets/cast/chisatoBA2.png";
import chisatoBA3 from "../assets/cast/chisatoBA3.png";

const HomePage = (props) => {
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
      <Element name="hero">
        <Hero
          selection={props.selection}
          toggleSelection={props.toggleSelection}
        />
      </Element>

      <SynopsisCard selection={props.selection} />

      <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={[mahiro, mahiroBA2, mahiroBA3]}
        alt={"saori izawa"}
        character={"mahiro"}
        actor={"Saori Izawa"}
        blurb={`Izawa Saori is a Japanese stuntwoman who began to work as an actress in 2021 with "The Janitor" being her first major appearance. She's done stunt work for "RE:BORN" (2016), "KINGDOM" (2019), "Rurouni Kenshin: The Beginning" (2021), and "Rurouni Kenshin: The Final" (2021).`}
        selection={props.selection}
        showSocials={false}
        display={["movie1", "movie2", "movie3"]}
      />

      <CastCard
        flexDirection={"lg:flex-row-reverse"}
        justifyIMG={"lg:justify-start"}
        src={[chisato, chisatoBA2, chisatoBA3]}
        alt={"Akari Takaishi"}
        character={"Chisato"}
        actor={"Akari Takaishi"}
        blurb={`Takaishi Akari is a Japanese actress represented by Avex Management under the acting division. She debuted as a stage actress in 2016, with "~Anecdote of Mermaid~". She began acting in smaller roles for movies in 2017, and in television in 2020 along with commercials and music videos.`}
        selection={props.selection}
        showSocials={false}
        display={["movie1", "movie2", "movie3"]}
      />

      <Reviews selection={props.selection} />

      <Director />

      <ManualSwitch
        selection={props.selection}
        toggleSelection={props.toggleSelection}
      />

      <HomeSlides selection={props.selection} />

      <Link
        to="hero"
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

export default HomePage;
