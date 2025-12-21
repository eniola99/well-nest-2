import React, { useState } from "react";
import { JobOpeningCard } from "./JobOpeningCard";
import { AddJob } from "./AddJob";
import { AddJobContent } from "./AddJobContent";
import { JobOpeningList } from "./JobOpeningList";

interface JobOpeningContentProps {
  activeTab?: {
    name: string;
  };
}
type IAddJob = {
  handleCreate: () => void;
};

export const JobOpeningContent = ({ activeTab }: JobOpeningContentProps) => {
  const [add, setAdd] = useState<boolean>(false);
  const handleCreate = () => {
    setAdd(true);
  };

  const DefaultRender = ({ handleCreate }: IAddJob) => {
    return (
      <>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row">
            <JobOpeningCard activeTab={activeTab} />
            <AddJob handleCreate={handleCreate} />
          </div>
          <div className="mt-5">
            <JobOpeningList />
          </div>
        </div>
      </>
    );
  };

  const AddToJobOpening = () => {
    return (
      <>
        <div className="d-flex flex-column">
          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setAdd(!add)}
          >
            <i className="fa-solid fa-backward me-2"></i>
            <span>Go back</span>
          </div>
          <div className="container">
            <AddJobContent />
          </div>
        </div>
      </>
    );
  };

  let PageComponent: React.ElementType;

  switch (true) {
    case add:
      PageComponent = AddToJobOpening;
      break;
    case !add:
      PageComponent = DefaultRender;
      break;
    default:
      PageComponent = DefaultRender;
      break;
  }

  return (
    <>
      <div className="d-flex">
        <PageComponent handleCreate={handleCreate} />
      </div>
    </>
  );
};
