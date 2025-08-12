import React from "react";

import { Footer, NavSection } from "@/src/components/common";
import { ContactPageContent } from "@/src/page_components/contact_page";

const contact = () => {
  return (
    <>
      <NavSection />
      <ContactPageContent />
      <Footer />
    </>
  );
};

export default contact;
