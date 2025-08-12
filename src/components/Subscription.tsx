import React from "react";
import { Footer, NavSection } from "./common";
import { HelpAtHomeHero } from "../page_components/HelpAtHome_service";
import { Payment } from "../page_components/Subscription_page";

export const Subscription = () => {
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Pricing Plan" />
      <Payment />
      <Footer />
    </>
  );
};
