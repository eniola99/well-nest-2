import React from "react";

import { Footer, NavSection } from "./common";
import {
  HelpAtHomeHero,
  WellNestHomeCareContent,
} from "../page_components/HelpAtHome_service";

export const LiveInCare = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Live In Care" />
      <WellNestHomeCareContent />
      <Footer />
    </>
  );
};
