import React from "react";

import { Footer, NavSection } from "./common";
import {
  HelpAtHomeHero,
  LiveInCareContent,
} from "../page_components/HelpAtHome_service";

export const LiveInCare = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Live In Care" />
      <LiveInCareContent />
      <Footer />
    </>
  );
};
