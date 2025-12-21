import React from "react";

import { IJobTemplate } from "@/src/utils/utils";

interface JobOpeningCardProps {
  jobList?: IJobTemplate[] | undefined;
  activeTab?: {
    name: string;
  };
}

export const JobOpeningCard = ({ jobList, activeTab }: JobOpeningCardProps) => {
  console.log({ activeTab });
  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="card me-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Current Openings</h5>
            <div className="d-flex pt-3">
              <p className="card-text me-3">Total Jobs: </p>
              <h4> 2</h4>
            </div>
          </div>
        </div>
        {/* {activeTab && activeTab.name !== "Job Openings" && ( */}
        <div className="card me-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Total Job Posted</h5>
            <div className="d-flex pt-3">
              <p className="card-text me-3">Total Jobs: </p>
              <h4>{jobList?.length || 0}</h4>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
};
