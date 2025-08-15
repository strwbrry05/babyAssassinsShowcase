import { nanoid } from "nanoid";
import React, { useEffect, useRef, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { NavLink } from "react-router";
import { Link } from "react-scroll";

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
    setMobileActive((prev) => !prev);
    console.log(mobileActive);
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
  }, [mobileActive, windowSize]);

  // hide menu if hit outside of hitbox
  useEffect(() => {
    const clickOutside = (e) => {
      console.log(e.target);
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

  function handleTitleClick() {
    window.scrollTo(0, 0);
    setMobileActive(false);
  }

  return (
    <div ref={hitbox}>
      <div
        ref={hitbox}
        className="sticky z-5 w-[full] h-[75px] bg-(--color-black)
    flex justify-center items-center"
      >
        <div className="z-5 flex items-center justify-center gap-x-[20px]">
          <MdMenuOpen
            className={`text-(--color-white) text-[2.5rem] rotate-90 cursor-pointer
            ${
              mobileActive
                ? " transition-all duration-400 ease-in -rotate-270"
                : "transition-all duration-300 ease-in rotate-270 "
            }
            md:hidden`}
            onClick={toggleMobileMenu}
          />

          <div className="hidden md:block md:flex flex-row  w-[250px] justify-between">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-(--color-white) font-(family-name:--font-titles) uppercase text-[1.15rem] ml-[2.5em] cursor-pointer"
                  : "text-(--color-gray) font-(family-name:--font-titles) uppercase text-[1.15rem] ml-[2.5em] cursor-pointer"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cast"
              className={({ isActive }) =>
                isActive
                  ? "text-(--color-white) font-(family-name:--font-titles) uppercase text-[1.15rem] mr-[2.5em] cursor-pointer"
                  : "text-(--color-gray) font-(family-name:--font-titles) uppercase text-[1.15rem] mr-[2.5em] cursor-pointer"
              }
            >
              Cast
            </NavLink>
          </div>

          <NavLink
            to="/"
            className="flex flex-col justify-center items-center  
        text-(--color-white) font-(family-name:--font-titles) font-bold
        text-[1.5rem] uppercase cursor-pointer"
            onClick={() => handleTitleClick()}
          >
            {props.selection.map((selected, index) => {
              if (selected.active === true) {
                return (
                  <div
                    key={nanoid()}
                    className={`font-(family-name:--font-baby) ${babyColors[index]} -skew-7 mb-[-0.65em]`}
                  >
                    baby
                  </div>
                );
              }
            })}

            <div>assassins</div>
          </NavLink>

          <div className="hidden md:block md:flex w-[250px] justify-between ">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-(--color-white) font-(family-name:--font-titles) uppercase text-[1.15rem] ml-[2.5em] cursor-pointer"
                  : "text-(--color-gray) font-(family-name:--font-titles) uppercase text-[1.15rem] ml-[2.5em] cursor-pointer"
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/watch"
              className={({ isActive }) =>
                isActive
                  ? "text-(--color-white) font-(family-name:--font-titles) uppercase text-[1.15rem] cursor-pointer"
                  : "text-(--color-gray) font-(family-name:--font-titles) uppercase text-[1.15rem] cursor-pointer"
              }
            >
              Watch Now
            </NavLink>
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-(--color-white) font-(family-name:--font-titles) uppercase mb-[2em] cursor-pointer"
                : "text-(--color-gray) font-(family-name:--font-titles) uppercase mb-[2em] cursor-pointer"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cast"
            className={({ isActive }) =>
              isActive
                ? "text-(--color-white) font-(family-name:--font-titles) uppercase mb-[2em] cursor-pointer"
                : "text-(--color-gray) font-(family-name:--font-titles) uppercase mb-[2em] cursor-pointer"
            }
          >
            cast
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-(--color-white) font-(family-name:--font-titles) uppercase mb-[2em] cursor-pointer"
                : "text-(--color-gray) font-(family-name:--font-titles) uppercase mb-[2em] cursor-pointer"
            }
          >
            gallery
          </NavLink>
          <NavLink
            to="/watch"
            className={({ isActive }) =>
              isActive
                ? "text-(--color-white) font-(family-name:--font-titles) uppercase mb-[2em] cursor-pointer"
                : "text-(--color-gray) font-(family-name:--font-titles) uppercase mb-[2em] cursor-pointer"
            }
          >
            watch now
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
