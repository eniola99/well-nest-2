import React from "react";
import { useRouter } from "next/router";

import { HelpAtHome, NurseAtHome, LiveInCare } from "@/src/components";

const HomeServicePage = () => {
  const router = useRouter();
  const { service } = router.query;

  let PageComponent: React.ElementType;

  switch (true) {
    case service === "help-at-home":
      PageComponent = HelpAtHome;
      break;
    case service === "nurse-at-home":
      PageComponent = NurseAtHome;
      break;
    case service === "live-in-care":
    default:
      PageComponent = LiveInCare;
      break;
  }
  return (
    <>
      <PageComponent />
    </>
  );
};

export default HomeServicePage;
