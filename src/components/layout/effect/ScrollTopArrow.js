import React, { useState } from "react";
import { ArrowUpward } from "@material-ui/icons";
import "./ScrollTopArrow.css";

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    >
      <ArrowUpward style={{ fontSize: 60 }} />
    </div>
  );
};

export default ScrollTopArrow;
