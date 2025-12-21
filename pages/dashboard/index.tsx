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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/well-wheels/create-job-posting");
        const result = await response.json();

        if (result.success) {
          setJobList(result.data);
        }
      } catch (error) {
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
            <AdminSidePanel setActiveTab={setActveTab} activeTab={activeTab} />
            <AdminContainer activeTab={activeTab} jobList={jobList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardIndex;
