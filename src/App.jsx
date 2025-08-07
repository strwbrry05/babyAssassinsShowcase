import Director from "./components/Director";
import Footer from "./components/Footer";
import ManualSwitch from "./components/ManualSwitch";
import WatchNow from "./components/WatchNow";
import WatchNowCard from "./components/WatchNowCard";
import "./index.css";

import ba1 from "./assets/ba1.png";
import ba2 from "./assets/ba2.png";
import ba3 from "./assets/ba3.png";

function App() {
  return (
    <>
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
