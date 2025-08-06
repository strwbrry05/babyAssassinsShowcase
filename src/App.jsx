import Director from "./components/Director";
import Footer from "./components/Footer";
import ManualSwitch from "./components/ManualSwitch";
import WatchNow from "./components/WatchNow";
import WatchNowCard from "./components/WatchNowCard";
import "./index.css";

function App() {
  return (
    <>
      <Director />
      <ManualSwitch />
      <WatchNow />
      <WatchNowCard />
      <Footer />
    </>
  );
}

export default App;
