import React from "react";
import { useRouter } from "next/router";

import {
  PersonalCareServicePage,
  SeasonalHomeSupportPage,
  LiveInCare,
} from "@/src/components";

const HomeServicePage = () => {
  const router = useRouter();
  const { service } = router.query;

  let PageComponent: React.ElementType;

  switch (true) {
    case service === "personal-care-services":
      PageComponent = PersonalCareServicePage;
      break;
    case service === "seasonal-home-support":
      PageComponent = SeasonalHomeSupportPage;
      break;
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
