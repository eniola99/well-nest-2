import React from "react";
import { useSelector } from "react-redux";

import type { RootState } from "@/src/slice/store";

import { ApplicationHero } from "./ApplicationHero";
import { RoleRequirements } from "./RoleRequirements";
import { ApplicationForm } from "./ApplicationForm";

export const ApplicationPage = () => {
  const { role } = useSelector((state: RootState) => state.jobs);
  return (
    <>
      <ApplicationHero title={role.title} />
      <div className="container mt-5 mb-5">
        <p className="mt-5 mb-5">{role.berief}</p>
        <h4 className="mb-2">
          {role.title} - {role.job_type}
        </h4>
        <p className="">
          <strong>Line Manager :</strong> {role.reports_to}
        </p>
        <p className="">{role.salary}</p>
        <p className="mt-5">{role.your_role}</p>
        <RoleRequirements
          role={role.key_responsibilities}
          title="Key Responsibilities"
        />
        <RoleRequirements role={role.what_you_bring} title="Qualifications" />
        <RoleRequirements role={role.why_join_us} title="Why Join Us" />
        <RoleRequirements
          role={role.additional_training_provided}
          title="Additional Training"
        />
      </div>
      <ApplicationForm />
    </>
  );
};
