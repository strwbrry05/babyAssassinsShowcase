import Director from "./components/Director";
import Footer from "./components/Footer";
import ManualSwitch from "./components/ManualSwitch";
import WatchNowCard from "./components/WatchNowCard";
import "./index.css";

function App() {
  return (
    <>
      <Director />
      <ManualSwitch />
      <WatchNowCard />
      <Footer />
    </>
  );
}

export default App;
