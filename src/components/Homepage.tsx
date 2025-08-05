import React from "react";

import {
  About,
  HeaderTop,
  HeroSection,
  Navbar,
} from "../page_components/home_page";

export const Homepage = () => {
  return (
    <div className="home-3">
      <HeaderTop />
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
};
