import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setOpenPosition } from "@/src/slice/jobSlice";
import { openRoles } from "@/src/utils/utils";
import { truncateTooLong } from "@/src/utils/common";

interface OpenPositionsProps {
  title: string;
  job_type: string;
  salary: string;
  reports_to: string;
  berief: string;
  your_role: string;
  key_responsibilities: { id: number; value: string }[];
  additional_training_provided: { id: number; value: string }[];
  what_you_bring: { id: number; value: string }[];
  why_join_us: { id: number; value: string }[];
}

export const CareerJobListing = () => {
  const dispatch = useDispatch();
  const route = useRouter();

  const handleClick = (item: OpenPositionsProps) => {
    dispatch(setOpenPosition(item));
    route.push("/application");
  };

  return (
    <div className="terms-area py-120">
      <div className="mx-5">
        <h4 className="text-center career-opennings">Current Opportunities</h4>
        <div className=" mt-5">
          <div className="container">
            <div className="row">
              {openRoles.map((item, index) => (
                <>
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5" key={index}>
                    <div className="" style={{ margin: "30px" }}>
                      <div className="d-flex">
                        <h4 className="">
                          {item.title}
                          <i className={`fa-brands fa-google-scholar`}></i>
                        </h4>
                      </div>
                      <div className="job_type mt-2">
                        <span>
                          <b>Job Type: {item.job_type}</b>
                        </span>{" "}
                        <br />
                        <span>
                          <b>Salary: {item.salary}</b>
                        </span>
                      </div>
                      <div className="mt-3">
                        <p className="">{truncateTooLong(item.berief)}</p>
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
