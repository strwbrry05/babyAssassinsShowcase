import React, { useEffect, useRef, useState } from "react";
import { MdMenuOpen } from "react-icons/md";

const Navigation = (props) => {
  const [mobileActive, setMobileActive] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const hitbox = useRef(null);

  const babyColors = [
    "text-(--color-title-red)",
    "text-(--color-title-red)",
    "text-(--color-BA3-yellow)",
  ];

  function toggleMobileMenu() {
    setMobileActive(!mobileActive);
  }

  // hide menu if window size is larger than md screen
  useEffect(() => {
    const hideMenu = () => {
      setWindowSize(window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileActive(false);
      }
    };

    window.addEventListener("resize", hideMenu);
    hideMenu();

    return () => window.removeEventListener("resize", hideMenu);
  }, [hitbox, mobileActive, windowSize]);

  // hide menu if hit outside of hitbox
  useEffect(() => {
    const clickOutside = (e) => {
      if (hitbox.current && !hitbox.current.contains(e.target)) {
        console.log("hit outside");
        setMobileActive(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [hitbox, mobileActive]);

  return (
    <>
      <div
        ref={hitbox}
        className="sticky z-5 w-[full] h-[75px] bg-(--color-black)
    flex justify-center items-center"
      >
        <div className="flex items-center justify-center gap-x-[20px]">
          <MdMenuOpen
            className={`text-(--color-white) text-[2.5rem] rotate-270 cursor-pointer
            ${
              mobileActive
                ? " transition-transform duration-300 ease-in -rotate-160"
                : "transition-all duration-300 ease-in rotate-450 "
            }
            md:hidden`}
            onClick={toggleMobileMenu}
          />

          <div className="hidden md:block md:flex flex-row  w-[250px] justify-between">
            <h2
              className=" text-(--color-white) font-(family-name:--font-titles) uppercase text-[1.15rem]
            cursor-pointer ml-[2.5em]"
            >
              Home
            </h2>
            <h2
              className=" text-(--color-gray) font-(family-name:--font-titles) uppercase text-[1.15rem] mr-[2.5em]
            cursor-pointer"
            >
              Cast
            </h2>
          </div>

          <h1
            className="flex flex-col justify-center items-center  
        text-(--color-white) font-(family-name:--font-titles) font-bold
        text-[1.5rem] uppercase cursor-pointer"
          >
            {props.selection.map((selected, index) => {
              if (selected.active === true) {
                return (
                  <div
                    className={`font-(family-name:--font-baby) ${babyColors[index]} -skew-7 mb-[-0.65em]`}
                  >
                    baby
                  </div>
                );
              }
            })}

            <div>assassins</div>
          </h1>

          <div className="hidden md:block md:flex w-[250px] justify-between ">
            <h2
              className=" text-(--color-gray) font-(family-name:--font-titles) uppercase text-[1.15rem]
            ml-[2.5em] cursor-pointer"
            >
              Gallery
            </h2>
            <h2
              className=" text-(--color-gray) font-(family-name:--font-titles) uppercase text-[1.15rem]
            cursor-pointer"
            >
              Watch Now
            </h2>
          </div>

          <MdMenuOpen
            className={`text-(--color-black) text-[2.5rem] md:hidden`}
          />
        </div>
      </div>

      <div
        ref={hitbox}
        className={`bg-(--color-black) text-(--color-white) font-(family-name:--font-titles) uppercase
        text-[1.15rem] absolute w-full z-4 md:hidden
        ${
          mobileActive
            ? "translate-y-[0vh] transition-all duration-500 ease-in-out"
            : "translate-y-[-100vh] transition-all duration-500 ease-in"
        }
        
        shadow-[0_3px_3px_rgba(0,0,0,0.5)]`}
      >
        <ul className="flex justify-center items-center flex-col pt-[2em] pb-[2em]">
          <li className="mb-[2em] cursor-pointer text-(--color-white)">Home</li>
          <li className="mb-[2em] cursor-pointer text-(--color-gray)">cast</li>
          <li className="mb-[2em] cursor-pointer text-(--color-gray)">
            gallery
          </li>
          <li className="mb-[2em] cursor-pointer text-(--color-gray)">
            watch now
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
