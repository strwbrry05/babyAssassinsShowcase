import Director from "./components/Director";
import Footer from "./components/Footer";
import CastCard from "./components/CastCard";
import ManualSwitch from "./components/ManualSwitch";
import WatchNow from "./components/WatchNow";
import WatchNowCard from "./components/WatchNowCard";
import "./index.css";

import ba1 from "./assets/ba1.png";
import ba2 from "./assets/ba2.png";
import ba3 from "./assets/ba3.png";

import mahiro from "./assets/cast/mahiroBA1.png";
import mahiroBA2 from "./assets/cast/mahiroBA2.png";
import mahiroBA3 from "./assets/cast/mahiroBA3.png";

import chisato from "./assets/cast/chisatoBA1.png";
import chisatoBA2 from "./assets/cast/chisatoBA2.png";
import chisatoBA3 from "./assets/cast/chisatoBA3.png";

import { useState } from "react";

function App() {
  const moviesObj = [
    {
      src: ba1,
      title: "movie1",
      active: true,
      highlight: "shadow-[0px_0px_35px_rgba(190,146,0,1)]",
    },
    {
      src: ba2,
      title: "movie2",
      active: false,
      highlight: "shadow-[0px_0px_35px_rgba(31,161,207,1)]",
    },
    {
      src: ba3,
      title: "movie3",
      active: false,
      highlight: "shadow-[0px_0px_35px_rgba(216,33,33,1)]",
    },
  ];

  const [selection, setSelection] = useState(moviesObj);

  function toggleSelection(title) {
    setSelection(
      selection.map((selected) => {
        if (selected.title === title) {
          selected.active = true;
        } else {
          selected.active = false;
        }
        return selected;
      })
    );
  }

  return (
    <>
      <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={[mahiro, mahiroBA2, mahiroBA3]}
        alt={"saori izawa"}
        character={"mahiro"}
        actor={"Saori Izawa"}
        blurb={`Izawa Saori is a Japanese stuntwoman who began to work as an actress in 2021 with "The Janitor" being her first major appearance. She's done stunt work for "RE:BORN" (2016), "KINGDOM" (2019), "Rurouni Kenshin: The Beginning" (2021), and "Rurouni Kenshin: The Final" (2021).`}
        selection={selection}
      />
      <CastCard
        flexDirection={"lg:flex-row-reverse"}
        justifyIMG={"lg:justify-start"}
        src={[chisato, chisatoBA2, chisatoBA3]}
        alt={"Akari Takaishi"}
        character={"Chisato"}
        actor={"Akari Takaishi"}
        blurb={`Takaishi Akari is a Japanese actress represented by Avex Management under the acting division. She debuted as a stage actress in 2016, with "~Anecdote of Mermaid~". She began acting in smaller roles for movies in 2017, and in television in 2020 along with commercials and music videos.`}
        selection={selection}
      />

      <Director />
      <ManualSwitch selection={selection} toggleSelection={toggleSelection} />
      {/* <WatchNow
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
      <WatchNow poster={ba3} buy={"Buy Bluray on August 26 2025"} /> */}
      {/* <WatchNowCard /> */}
      <Footer />
    </>
  );
}

export default App;
