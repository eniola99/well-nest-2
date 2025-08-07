import React from "react";

import { NavSection } from "./common";
import {
  HelpAtHomeHero,
  HelpHomeContent,
} from "../page_components/HelpAtHome_service";

export const HelpAtHome = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero />
      <HelpHomeContent />
    </>
  );
};
