import React from "react";

import { useEffect } from "react";
import { useLocation } from "react-router";

// if location changes (pathname) window is auto scrolled to the top
// helpful when switching between nav links
const AutoScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default AutoScrollToTop;
