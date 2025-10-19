import React from "react";
import { Footer, NavSection } from "./common";
import { HelpAtHomeHero } from "../page_components/HelpAtHome_service";
import { WellWheelsContent } from "../page_components/Transportation_page";

export const WellWheelsPage = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="WellWheels" />
      <WellWheelsContent />
      <Footer />
    </>
  );
};
