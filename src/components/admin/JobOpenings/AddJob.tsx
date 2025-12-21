import React from "react";

type IAddJob = {
  handleCreate: () => void;
};

export const AddJob = ({ handleCreate }: IAddJob) => {
  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", cursor: "pointer" }}
        onClick={handleCreate}
      >
        <div className="card-body d-flex align-items-center justify-content-center">
          <i className="fa-solid fa-plus" style={{ fontSize: "50px" }}></i>
        </div>
      </div>
    </>
  );
};
