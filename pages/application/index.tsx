import React from "react";
import { ApplicationPage } from "@/src/page_components/career_page/ApplicationPage";
import { Footer, NavSection } from "@/src/components/common";

const index = () => {
  return (
    <>
      <NavSection />
      <ApplicationPage />
      <Footer />
    </>
  );
};

export default index;
