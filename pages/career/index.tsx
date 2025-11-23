import React from "react";

import { HeaderTop, Navbar } from "@/src/page_components/home_page";
import { CareerPageContent } from "@/src/page_components/career_page";

const index = () => {
  return (
    <>
      <>
        <HeaderTop />
        <Navbar />
      </>
      <CareerPageContent />
    </>
  );
};

export default index;
