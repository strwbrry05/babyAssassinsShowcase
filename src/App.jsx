import Director from "./components/Director";
import Footer from "./components/Footer";
import CastCard from "./components/CastCard";
import ManualSwitch from "./components/ManualSwitch";
import WatchNow from "./components/WatchNow";
import WatchNowCard from "./components/WatchNowCard";
import "./index.css";

// import ba1 from "./assets/ba1.png";
// import ba2 from "./assets/ba2.png";
// import ba3 from "./assets/ba3.png";

import mahiro from "./assets/cast/mahiroBA1.png";
import chisato from "./assets/cast/chisatoBA1.png";

function App() {
  return (
    <>
      <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={mahiro}
        alt={"saori izawa"}
        character={"mahiro"}
        actor={"Saori Izawa"}
        blurb={`Izawa Saori is a Japanese stuntwoman who began to work as an actress in 2021 with "The Janitor" being her first major appearance. She's done stunt work for "RE:BORN" (2016), "KINGDOM" (2019), "Rurouni Kenshin: The Beginning" (2021), and "Rurouni Kenshin: The Final" (2021).`}
      />
      <CastCard
        flexDirection={"lg:flex-row-reverse"}
        justifyIMG={"lg:justify-start"}
        src={chisato}
        alt={"Akari Takaishi"}
        character={"Chisato"}
        actor={"Akari Takaishi"}
        blurb={`Takaishi Akari is a Japanese actress represented by Avex Management under the acting division. She debuted as a stage actress in 2016, with "~Anecdote of Mermaid~". She began acting in smaller roles for movies in 2017, and in television in 2020 along with commercials and music videos.`}
      />

      <Director />
      <ManualSwitch />
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
