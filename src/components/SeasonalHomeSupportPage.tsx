import React from "react";
import { Footer, NavSection } from "./common";
import {
  HelpAtHomeHero,
  SeasonalHomeSupport,
} from "../page_components/HelpAtHome_service";

export const SeasonalHomeSupportPage = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Seasonal Home Support" />
      <SeasonalHomeSupport />
      <Footer />
    </>
  );
};
