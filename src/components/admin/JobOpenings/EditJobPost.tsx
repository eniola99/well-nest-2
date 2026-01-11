import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { AddJobFormTemplate } from "./AddJobFormTemplate";

import { IJobTemplate } from "@/src/utils/utils";

interface EditJobPostProps {
  toggleModal: () => void;
  modal?: boolean;
  selectedJob?: IJobTemplate | undefined;
}
export const EditJobPost = ({
  toggleModal,
  modal,
  selectedJob,
}: EditJobPostProps) => {
  const isEdit = true;
  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} centered size="xl">
        <ModalHeader toggle={toggleModal}>
          {selectedJob ? `Edit Job: ${selectedJob.title} ` : "Edit Job"}
        </ModalHeader>
        <ModalBody>
          <AddJobFormTemplate
            jobEntity={selectedJob}
            toggleModal={toggleModal}
            isEdit={isEdit}
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};
