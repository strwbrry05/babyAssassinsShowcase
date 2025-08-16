import "./index.css";

import ba1 from "./assets/ba1.png";
import ba2 from "./assets/ba2.png";
import ba3 from "./assets/ba3.png";

import { useState } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import CastPage from "./Pages/CastPage";
import GalleryPage from "./Pages/GalleryPage";
import WatchPage from "./Pages/WatchPage";
import AutoScrollToTop from "./components/AutoScrollToTop";

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
      <AutoScrollToTop />
      <Routes>
        <Route element={<MainLayout selection={selection} />}>
          <Route
            index
            element={
              <HomePage
                selection={selection}
                toggleSelection={toggleSelection}
              />
            }
          />
          <Route
            path="cast"
            element={
              <CastPage
                selection={selection}
                toggleSelection={toggleSelection}
              />
            }
          />
          <Route path="gallery" element={<GalleryPage />} />
          <Route
            path="watch"
            element={
              <WatchPage
                selection={selection}
                toggleSelection={toggleSelection}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
