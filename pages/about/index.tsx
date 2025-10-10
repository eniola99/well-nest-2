import React from "react";
import { Footer, NavSection } from "@/src/components/common";
import { AboutUs } from "@/src/page_components/about_page";
import { HelpAtHomeHero } from "@/src/page_components/HelpAtHome_service";

const index = () => {
  return (
    <>
      <>
        <NavSection />
        <HelpAtHomeHero title="About Us" />
        <AboutUs />
        <Footer />
      </>
    </>
  );
};

export default index;
