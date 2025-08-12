import { Footer, NavSection } from "@/src/components/common";
import { AboutUs } from "@/src/page_components/about_page";
import { HelpAtHomeHero } from "@/src/page_components/HelpAtHome_service";
import React from "react";

const about = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="About Us" />
      <AboutUs />
      <Footer />
    </>
  );
};

export default about;
