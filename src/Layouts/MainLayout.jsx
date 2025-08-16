import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

const MainLayout = (props) => {
  return (
    <>
      <div className="sticky top-0 w-full z-5">
        <Navigation selection={props.selection} />
      </div>

      {/* content */}
      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;
