import React from "react";
import { JobList, JobOpeningCard } from "../JobOpenings";

import { IJobTemplate } from "@/src/utils/utils";
import { Spinner } from "reactstrap";

interface IDashboardIndex {
  [key: string]: string;
}

interface DashboardProps {
  jobList?: IJobTemplate[] | undefined;
  activeTab: IDashboardIndex | undefined;
  isFetching?: boolean;
  error?: string | null;
}

export const DashboardContent = ({
  jobList,
  activeTab,
  isFetching,
  error,
}: DashboardProps) => {
  return (
    <>
      <JobOpeningCard jobList={jobList} />
      <button
        className="mt-3 border border-rounded rounded-2 p-2 d-inline-block btn btn-success"
        onClick={() => window.location.reload()}
      >
        <i className="fa-solid fa-arrow-rotate-right"></i>
      </button>
      {activeTab && activeTab.name === "Job Openings" ? null : isFetching ? (
        <div className="mt-5">
          <Spinner />
        </div>
      ) : error ? (
        <div className="mt-5">
          <span className="text-danger">{error}</span>
        </div>
      ) : (
        <div className="mt-5">
          <h4 className="mt-3 mb-3">
            <strong>Job List</strong>
          </h4>
          <JobList jobList={jobList} />
        </div>
      )}
    </>
  );
};
