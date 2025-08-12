import React from "react";
import { Footer, NavSection } from "./common";
import {
  HelpAtHomeHero,
  NurseHomeContent,
} from "../page_components/HelpAtHome_service";

export const NurseAtHome = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Nurse At Home" />
      <NurseHomeContent />
      <Footer />
    </>
  );
};
