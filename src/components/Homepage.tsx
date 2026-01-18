import React from "react";

import {
  About,
  Assessment,
  HeroSection,
  Testimonial,
} from "../page_components/home_page";
import { Footer, NavSection } from "./common";

export const Homepage = () => {
  return (
    <div className="home-2">
      <NavSection />
      <HeroSection />
      <About />
      <Testimonial />
      <Assessment />
      <Footer />
    </div>
  );
};
