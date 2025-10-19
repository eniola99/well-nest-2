import React from "react";
import { useRouter } from "next/router";

import {
  PersonalCareServicePage,
  SeasonalHomeSupportPage,
  LiveInCare,
  NonEmergencyMedicalTransport,
  HealthWellnessSupport,
  DailyLivingSupport,
  RespiteGroupTransport,
} from "@/src/components";
import wellWheels from ".";

const WellWheelsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  let PageComponent: React.ElementType;

  switch (true) {
    case slug === "non-emergency-medical-transportation":
      PageComponent = NonEmergencyMedicalTransport;
      break;
    case slug === "health-and-wellness-support":
      PageComponent = HealthWellnessSupport;
      break;
    case slug === "daily-living-support":
      PageComponent = DailyLivingSupport;
      break;
    case slug === "respite-or-group-transport":
      PageComponent = RespiteGroupTransport;
      break;
    default:
      PageComponent = wellWheels;
      break;
  }
  return (
    <>
      <PageComponent />
    </>
  );
};

export default WellWheelsPage;
