import React from "react";

import { Footer, NavSection } from "./common";
import {
  HelpAtHomeHero,
  HelpHomeContent,
} from "../page_components/HelpAtHome_service";

export const HelpAtHome = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Help At Home" />
      <HelpHomeContent />
      <Footer />
    </>
  );
};
