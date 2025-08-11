import Director from "./components/Director";
import Footer from "./components/Footer";
import CastCard from "./components/CastCard";
import ManualSwitch from "./components/ManualSwitch";
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
// import susano from "./assets/cast/susano.png";
// import tasaka from "./assets/cast/tasaka.png";

// import himari from "./assets/cast/himari.png";
// import ippei from "./assets/cast/ippei.png";
// import kazuki from "./assets/cast/kazuki.png";

// import makoto from "./assets/cast/makoto.png";
// import miyauchi from "./assets/cast/miyauchi.png";
// import yuri from "./assets/cast/yuri.png";

// import kaede from "./assets/cast/kaede.png";
// import riku from "./assets/cast/riku.png";
// import iruka from "./assets/cast/iruka.png";

import { useState } from "react";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";

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
      {/* <Gallery /> */}

      <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={[mahiro, mahiroBA2, mahiroBA3]}
        alt={"saori izawa"}
        character={"mahiro"}
        actor={"Saori Izawa"}
        blurb={`Izawa Saori is a Japanese stuntwoman who began to work as an actress in 2021 with "The Janitor" being her first major appearance. She's done stunt work for "RE:BORN" (2016), "KINGDOM" (2019), "Rurouni Kenshin: The Beginning" (2021), and "Rurouni Kenshin: The Final" (2021).`}
        selection={selection}
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
        selection={selection}
        showSocials={false}
        display={["movie1", "movie2", "movie3"]}
      />

      <Reviews />
      {/* <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={[susano, susano, susano]}
        alt={"Tsubasa Tobinaga"}
        character={"Susano"}
        actor={"Tsubasa Tobinaga"}
        blurb={`Tsubasa Tobinaga is known for Baby Walkure Everyday! (2024), Kanpai Senshi After V (2014) and Wotakoi: Love Is Hard for Otaku (2020).`}
        selection={selection}
        showSocials={true}
        display={["movie1", "movie2", "movie3"]}
      />
      <CastCard
        flexDirection={"lg:flex-row-reverse"}
        justifyIMG={"lg:justify-start"}
        src={[tasaka, tasaka, tasaka]}
        alt={"Atomu Mizuishi"}
        character={"Tasaka"}
        actor={"Atomu Mizuishi"}
        blurb={`Mizuishi Atomu; born January 1, 1996), is a Japanese actor represented by STRAIGHT entertainment. In 2012 he made his debut as an actor portraying Renji Yanagi in Prince of Tennis 2nd season.`}
        selection={selection}
        showSocials={true}
        display={["movie1", "movie2", "movie3"]}
      />
      <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={[himari]}
        alt={"Mone Akitani"}
        character={"Himari"}
        actor={"Mone Akitani"}
        blurb={`Mone Akitani (秋谷 百音, Akitani Mone, born November 27, 1999) is a Japanese actress and talent from Kanagawa Prefecture. She belongs to LePros Entertainment.`}
        selection={selection}
        showSocials={true}
        display={["movie1"]}
      />
      <CastCard
        flexDirection={"lg:flex-row-reverse"}
        justifyIMG={"lg:justify-start"}
        src={[ippei]}
        alt={"Yasukaze Motomiya"}
        character={"Ippei"}
        actor={"Yasukaze Motomiya"}
        blurb={`Yasukaze Motomiya is a Japanese actor. He is represented by Triple A. Known for Kamen Rider Blade (2004), Izo (2004) and Graveyard of Honor (2002). `}
        selection={selection}
        showSocials={true}
        display={["movie1"]}
      />
      <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={[kazuki]}
        alt={"Satoshi Uekiya"}
        character={"Kazuki"}
        actor={"Satoshi Uekiya"}
        blurb={`Satoshi Uekiya is a Japanese actor who portrays Kirito Asari/Kamen Rider Turbon in Kamen Rider Geats. His hobbies are drinking and drawing, with specialities in drawing and making people laugh.`}
        selection={selection}
        showSocials={true}
        display={["movie1"]}
      />
      <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={[miyauchi, miyauchi, miyauchi]}
        alt={"Tomo Nakai"}
        character={"Miyauchi"}
        actor={"Tomo Nakai"}
        blurb={`Tomo Nakai is known for Call Me by No Name (2025), Time Traveler's Disease (2024) and Baby Assassins: Nice Days (2024).`}
        selection={selection}
        showSocials={true}
        display={["", "movie2", "movie3"]}
      />
      <CastCard
        flexDirection={"lg:flex-row-reverse"}
        justifyIMG={"lg:justify-start"}
        src={[makoto, makoto]}
        alt={"Tatsuomi Hamada"}
        character={"Makoto"}
        actor={"Tatsuomi Hamada"}
        blurb={`Tatsuomi Hamada is a Japanese actor represented by TakeOff and Four Springs. As a child actor, Hamada played the role of Sakamoto Ryōma as a child in Ryōmaden and Hiroshi Ichikawa in Kaibutsu-kun. He won the 2010 Gold Dream Award in October 2010.`}
        selection={selection}
        showSocials={true}
        display={["", "movie2"]}
      />
      <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={[yuri, yuri]}
        alt={"Joey Iwanaga"}
        character={"Yuri"}
        actor={"Joey Iwanaga"}
        blurb={`Joey Iwanaga is known for Lion-Girl (2023), Rurouni Kenshin: Final Chapter Part I - The Final (2021) and Muga Shozoku (2015). He was a member of Small but BIG 4 and TOPS under Johnny's Entertainment. He also worked as a backing dancer for Akanishi Jin.`}
        selection={selection}
        showSocials={true}
        display={["", "movie2"]}
      />
      <CastCard
        flexDirection={"lg:flex-row-reverse"}
        justifyIMG={"lg:justify-start"}
        src={[kaede, kaede, kaede]}
        alt={"Sosuke Ikematsu"}
        character={"Kaede"}
        actor={"Sosuke Ikematsu"}
        blurb={`Sōsuke Ikematsu is a Japanese actor, television, and theatre actor best known for his role as Higen, the young nephew of samurai leader Katsumoto, in the 2003 film The Last Samurai.`}
        selection={selection}
        showSocials={true}
        display={["", "", "movie3"]}
      />
      <CastCard
        flexDirection={"lg:flex-row"}
        justifyIMG={"lg:justify-end"}
        src={[riku, riku, riku]}
        alt={"Mondo Otani"}
        character={"Riku"}
        actor={"Mondo Otani"}
        blurb={`Mondo Otani is an actor. In the movie Baby Assassins: Nice Days, Otani plays the character Riku Nanase and uses a Serbu Super Shorty. Taekwondodata.com ranks Otani 11,344th with 23 points, based on participation in four international tournaments.`}
        selection={selection}
        showSocials={true}
        display={["", "", "movie3"]}
      />

      <CastCard
        flexDirection={"lg:flex-row-reverse"}
        justifyIMG={"lg:justify-start"}
        src={[iruka, iruka, iruka]}
        alt={"Atsuko Maeda"}
        character={"Iruka"}
        actor={"Atsuko Maeda"}
        blurb={`Atsuko Maeda is a Japanese actress and singer. She is a former member of the idol girl group AKB48, and was one of the most prominent members in the group at the time, regarded as the group's "absolute ace", "immovable center", and the "Face of AKB.`}
        selection={selection}
        showSocials={true}
        display={["", "", "movie3"]}
      /> */}
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
