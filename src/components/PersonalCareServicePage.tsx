import React from "react";

import { Footer, NavSection } from "./common";
import {
  HelpAtHomeHero,
  PersonalCareService,
} from "../page_components/HelpAtHome_service";

export const PersonalCareServicePage = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Personal Care Service" />
      <PersonalCareService />
      <Footer />
    </>
  );
};
