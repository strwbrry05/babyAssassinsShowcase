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
        stream={[
          [
            "tubi",
            "https://tubitv.com/movies/100008053/baby-assassins?start=true&tracking=google-feed&utm_source=google-feed",
          ],
          [
            "pluto tv",
            "https://pluto.tv/us/on-demand/movies/658f378bb4896d0013e8b193?utm_medium=textsearch&utm_source=google",
          ],
          [
            "roku",
            "https://therokuchannel.roku.com/watch/f45313259c9d5436972536b1b8a52217?source=google",
          ],
          [
            "plex",
            "https://watch.plex.tv/watch/movie/baby-assassins?uri=provider%3A%2F%2Ftv.plex.provider.vod%2Flibrary%2Fmetadata%2F60e08affbc76bc002c050bcb&autoplay=1",
          ],
          [
            "hoopla",
            "https://www.hoopladigital.com/movie/baby-assassins-akari-akaishi/15203397",
          ],
        ]}
        rent={[
          ["hi-yah", "https://www.hiyahtv.com/baby-assassins"],
          [
            "prime",
            "https://www.amazon.com/gp/video/detail/amzn1.dv.gti.e9f83a86-4b9c-4f57-a82e-58d88985416a?autoplay=0&ref_=atv_cf_strg_wb",
          ],
          [
            "apple tv",
            "https://tv.apple.com/us/movie/baby-assassins/umc.cmc.5qf0j5sycmr56mj4uv1fy7ns3?action=play",
          ],
          [
            "google play",
            "https://play.google.com/store/movies/details?id=uZH2ugxNF44.P&pli=1",
          ],
          ["youtube", "https://www.youtube.com/watch?v=ME1CUS1tYlk"],
          [
            "fandango",
            "https://athome.fandango.com/content/browse/details/Baby-Assassins/2088255?cmp=OrganicSearch~Vudu~GoogleWatch",
          ],
        ]}
      />
      <WatchNow
        poster={ba2}
        stream={[
          [
            "tubi",
            "https://tubitv.com/movies/100029889/baby-assassins-2?start=true&tracking=google-feed&utm_source=google-feed",
          ],
          [
            "roku",
            "https://therokuchannel.roku.com/watch/9e9567516be4505f9ec5d726e3e556a2?source=google",
          ],
          [
            "pluto",
            "https://pluto.tv/us/on-demand/movies/684c1e0d68ac3f1eec5cde97?utm_medium=textsearch&utm_source=google",
          ],
          [
            "plex",
            "https://watch.plex.tv/watch/movie/baby-assassins-2-babies?uri=provider%3A%2F%2Ftv.plex.provider.vod%2Flibrary%2Fmetadata%2F64007433f47669ed76116591&autoplay=1",
          ],
          [
            "hoopla",
            "https://www.hoopladigital.com/movie/baby-assassins-2-akari-takaish/16704451",
          ],
        ]}
        rent={[
          ["hi-yah", "https://www.hiyahtv.com/baby-assassins-2"],
          [
            "prime",
            "https://www.amazon.com/gp/video/detail/amzn1.dv.gti.529f017d-c73c-440d-b594-213baf81c124?autoplay=0&ref_=atv_cf_strg_wb",
          ],
          [
            "apple tv",
            "https://tv.apple.com/us/movie/baby-assassins-2/umc.cmc.742p1i1ajfopq8eqono5zxxxm?action=play",
          ],
          [
            "google play",
            "https://play.google.com/store/movies/details?id=g8Q99gTEiFY.P",
          ],
          [
            "fandango",
            "https://athome.fandango.com/content/browse/details/Baby-Assassins-2/3042061?cmp=OrganicSearch~Vudu~GoogleWatch",
          ],
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
