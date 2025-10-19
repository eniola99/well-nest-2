import React from "react";
import { NavSection, Footer } from "@/src/components/common";
import {
  HelpAtHomeHero,
  WellNestHomeCareContent,
} from "@/src/page_components/HelpAtHome_service";

const index = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="WellNest Home Care" />
      <WellNestHomeCareContent />
      <Footer />
    </>
  );
};

export default index;
