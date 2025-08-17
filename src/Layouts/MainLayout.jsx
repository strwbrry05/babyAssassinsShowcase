import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

const MainLayout = (props) => {
  return (
    <>
      {/* containing the navigation in a div, and adding these classes makes
    it stick to the top of the page whenever you scroll */}
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
