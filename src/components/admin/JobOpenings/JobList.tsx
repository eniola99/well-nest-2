import React, { useState } from "react";
import { Table } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import { IJobTemplate } from "@/src/utils/utils";
import { EditJobPost } from "./EditJobPost";

interface JobOpeningCardProps {
  jobList?: IJobTemplate[] | undefined;
}
export const JobList = ({ jobList }: JobOpeningCardProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<IJobTemplate | undefined>(
    undefined
  );
  const handleClick = (id: string, action: string) => {
    const selected = jobList?.find((job) => job._id === id) || undefined;
    if (action === "edit") {
      setModalOpen(true);
      setSelectedJob(selected);
    } else if (action === "delete") {
      console.log("Delete job with id:", id);
      const modifyJob = async () => {
        const response = await fetch(`/api/well-wheels/${id}`, {
          method: "DELETE",
        });
        const result = await response.json();
        if (result.success) {
          toast.success("Job deleted successfully");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          return;
        }
      };
      modifyJob();
    }
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setSelectedJob(undefined);
  };
  return (
    <>
      <ToastContainer />

      <EditJobPost
        toggleModal={toggleModal}
        modal={modalOpen}
        selectedJob={selectedJob}
      />

      <Table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Job Salary</th>
            <th>Job Type</th>
            <th>Line Manager</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobList?.map((job, index) => (
            <>
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.salary}</td>
                <td>{job.type}</td>
                <td>{job.lineManager}</td>
                <td>
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={() => handleClick(job._id!, "edit")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleClick(job._id!, "delete")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </>
  );
};
