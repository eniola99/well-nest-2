import React from "react";
import { JobOpeningCard } from "../JobOpenings";

import { IJobTemplate } from "@/src/utils/utils";

interface DashboardProps {
  jobList?: IJobTemplate[] | undefined;
}

export const DashboardContent = ({ jobList }: DashboardProps) => {
  return (
    <>
      <JobOpeningCard jobList={jobList} />
    </>
  );
};
