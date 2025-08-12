import React from "react";
import { Footer, NavSection } from "./common";
import { HelpAtHomeHero } from "../page_components/HelpAtHome_service";
import { TransporationContent } from "../page_components/Transportation_page";

export const Transportation = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Transportation Service" />
      <TransporationContent />
      <Footer />
    </>
  );
};
