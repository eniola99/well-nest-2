import React from "react";
import { useSelector } from "react-redux";

import type { RootState } from "@/src/slice/store";

import { ApplicationHero } from "./ApplicationHero";
import { RoleRequirements } from "./RoleRequirements";
import { ApplicationForm } from "./ApplicationForm";

export const ApplicationPage = () => {
  const { role } = useSelector((state: RootState) => state.jobs);
  console.log({ role });
  return (
    <>
      <ApplicationHero title={role.title!} />
      <div className="container mt-5 mb-5">
        <p className="mt-5 mb-5">
          At WellWheels, we do more than drive — we care. As the transportation
          arm of WellNest Health Group, our focus is helping clients get where
          they need to go safely, comfortably, and with dignity. We provide
          non-emergency medical transportation for seniors, people with
          disabilities, and individuals needing support for appointments,
          errands, or community outings. We’re looking for Driver Companions who
          take pride in providing safe, reliable, and compassionate service.
        </p>
        <h4 className="mb-2">
          {role.title} - {role.type}
        </h4>
        <p className="">
          <strong>Line Manager :</strong> {role.lineManager}
        </p>
        <p className="">{role.salary}</p>
        <p className="mt-5">{role.role}</p>
        <RoleRequirements
          role={role.keyResponsibilities!}
          title="Key Responsibilities"
        />
        <RoleRequirements role={role.jobRequirement!} title="Qualifications" />
      </div>
      <ApplicationForm />
    </>
  );
};
