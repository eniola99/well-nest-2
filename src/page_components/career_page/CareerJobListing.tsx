import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setOpenPosition } from "@/src/slice/jobSlice";
import { IJobTemplate } from "@/src/utils/utils";
import { truncateTooLong } from "@/src/utils/common";

export const CareerJobListing = () => {
  const dispatch = useDispatch();
  const route = useRouter();

  const [jobList, setJobList] = useState<IJobTemplate[]>();

  const handleClick = (item: IJobTemplate) => {
    dispatch(setOpenPosition(item));
    route.push("/application");
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/well-wheels/create-job-posting");
        const result = await response.json();

        if (result.success) {
          setJobList(result.data);
          return;
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="terms-area py-120">
      <div className="mx-5">
        <h4 className="text-center career-opennings">Current Opportunities</h4>
        <div className=" mt-5">
          <div className="container">
            <div className="row">
              {jobList &&
                jobList.map((item, index) => (
                  <>
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 mt-5"
                      key={index}
                    >
                      <div className="" style={{ margin: "30px" }}>
                        <div className="d-flex">
                          <h4 className="">
                            {item.title}
                            <i className={`fa-brands fa-google-scholar`}></i>
                          </h4>
                        </div>
                        <div className="job_type mt-2">
                          <span>
                            <b>Job Type: {item.type}</b>
                          </span>{" "}
                          <br />
                          <span>
                            <b>Salary: {item.salary}</b>
                          </span>
                        </div>
                        <div className="mt-3">
                          <p className="">{truncateTooLong(item.role!)}</p>
                        </div>
                        <span
                          role="button"
                          className="btn btn-success mt-3"
                          onClick={() => handleClick(item)}
                        >
                          Read More
                        </span>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
