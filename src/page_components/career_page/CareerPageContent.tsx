import React from "react";
import { CareerPageHero } from "./CareerPageHero";
import { CareerPageDisclaimer } from "./CareerPageDisclaimer";
import { CareerBenefits } from "./CareerBenefits";
import { CareerJobListing } from "./CareerJobListing";

export const CareerPageContent = () => {
  return (
    <>
      <CareerPageHero
        title="Join our team of care professionals"
        sub_text="We’re hiring! Start making a difference with immediate assignments and full-time opportunities in PSW, HSW, and Nursing roles."
      />
      <CareerPageDisclaimer />
      <CareerBenefits />
      <CareerJobListing />
    </>
  );
};
