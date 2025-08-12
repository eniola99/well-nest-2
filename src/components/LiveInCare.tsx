import React from "react";
import { useRouter } from "next/router";

import { Footer, NavSection } from "./common";
import {
  HelpAtHomeHero,
  LiveInCareContent,
} from "../page_components/HelpAtHome_service";

export const LiveInCare = () => {
  const router = useRouter();

  const title = router.query
    .service!.split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <NavSection />
      <HelpAtHomeHero title={title} />
      <LiveInCareContent />
      <Footer />
    </>
  );
};
