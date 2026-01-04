import React, { useState, useEffect } from "react";
import {
  AdminContainer,
  AdminHeader,
  AdminSidePanel,
} from "@/src/components/admin";
import { IJobTemplate } from "@/src/utils/utils";

interface IDashboardIndex {
  [key: string]: string;
}
const DashboardIndex = () => {
  const [activeTab, setActveTab] = useState<IDashboardIndex>();
  const [jobList, setJobList] = useState<IJobTemplate[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsFetching(true);
      try {
        const response = await fetch("/api/well-wheels/create-job-posting");
        const result = await response.json();

        if (result.success) {
          setIsFetching(false);
          setJobList(result.data);
          return;
        }
        if (!result.success) {
          setIsFetching(false);
          setError(
            result.message || "Failed to fetch open jobs, Try again later."
          );
        }
      } catch (error) {
        setIsFetching(false);
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);
  return (
    <>
      <div className="">
        <AdminHeader />
        <div className="container-fluid">
          <div className="row">
            <>
              <AdminSidePanel
                setActiveTab={setActveTab}
                activeTab={activeTab}
              />
            </>
            <AdminContainer
              activeTab={activeTab}
              jobList={jobList}
              isFetching={isFetching}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardIndex;
