/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { validateArrayFields, validateText } from "@/src/utils/common";
import React, { useEffect, useState, useCallback } from "react";
import {
  Form,
  FormGroup,
  Input,
  FormFeedback,
  Spinner,
  Label,
  Button,
} from "reactstrap";

import { ToastContainer, toast } from "react-toastify";

type IJobTemplate = {
  title?: string | undefined;
  type?: string | undefined;
  salary?: string | undefined;
  lineManager?: string | undefined;
  role?: string | undefined;
  keyResponsibilities?: string[] | undefined;
  jobRequirement?: string[] | undefined;
  additionalTraining?: string[] | undefined;
  joinUs?: string[] | undefined;
};

const JobTemplateForm = {
  title: "",
  type: "",
  salary: "",
  lineManager: "",
  role: "",
  keyResponsibilities: [],
  jobRequirement: [],
  additionalTraining: [],
  joinUs: [],
};
export const AddJobFormTemplate = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  // const [count, setCount] = useState<number>(1);
  const [keyResponsibilitiesInput, setkeyResponsibilitiesInput] =
    useState<string>();
  const [jobRequirementInput, setJobRequirementInput] = useState<string>();
  const [additionalTrainingInput, setAdditionalTrainingInput] =
    useState<string>();
  const [joinUsInput, setJoinUsInput] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [errors, setErrors] = useState<IJobTemplate>(JobTemplateForm);
  const [formData, setFormData] = useState<IJobTemplate>(JobTemplateForm);

  const handleChange = (value: string, attr: keyof IJobTemplate) => {
    const form = { ...formData };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (form as any)[attr] = value;
    setFormData(form);
  };

  const handleListChange = (value: string, attr: keyof IJobTemplate) => {
    setFormData((prevFormData) => {
      const currentArray = prevFormData[attr] as string[];
      const updatedArray = [...currentArray, value];
      return {
        ...prevFormData,
        [attr]: updatedArray,
      };
    });
    setkeyResponsibilitiesInput("");
    setJobRequirementInput("");
    setAdditionalTrainingInput("");
    setJoinUsInput("");
  };

  const handleDelete = (value: string, attr: keyof IJobTemplate) => {
    setFormData((prev) => {
      const currentArray = prev[attr] as string[];
      const newArray = currentArray.filter((item) => item !== value);

      return {
        ...prev,
        [attr]: newArray,
      };
    });
  };

  const validateFields = (field: IJobTemplate) => ({
    title: validateText(field.title || "", "Job Title"),
    type: validateText(field.type || "", "Job Type"),
    salary: validateText(field.salary || "", "Job Salary"),
    lineManager: validateText(field.lineManager || "", "Job Line Manager"),
    role: validateText(field.role || "", "Job Role"),
    jobRequirement: validateArrayFields(
      field.jobRequirement || [],
      "Job Requirement"
    ),
    keyResponsibilities: validateArrayFields(
      field.keyResponsibilities || [],
      "Job Key Responsibilities"
    ),
    additionalTraining: validateArrayFields(
      field.additionalTraining || [],
      "Job Additional Training"
    ),
    joinUs: validateArrayFields(field.joinUs || [], "Join Us"),
  });

  const handleSubmit = () => {
    setIsSubmitting(true);
    setErrors(validateFields(formData));
  };

  const initiateAddJobPosition = useCallback(async (formData: IJobTemplate) => {
    setIsloading(true);
    const response = await fetch("/api/well-wheels/create-job-posting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const initData = await response.json();
    console.log({ initData });
    if (initData.status === 200) {
      toast.success(initData.message);
      setIsloading(false);
      setFormData(JobTemplateForm);
    } else {
      toast.error("Failed to create job posting, Try again");
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    if (
      isSubmitting &&
      Object.values(errors).every((item) => item === undefined)
    ) {
      initiateAddJobPosition(formData);
    }
  }, [errors, formData, initiateAddJobPosition, isSubmitting]);

  return (
    <div className="mt-5">
      <ToastContainer />

      <Form>
        <FormGroup>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Label className="">Job Title</Label>
              <Input
                className={
                  errors?.title ? "shadow-none border" : "shadow-none border"
                }
                invalid={!!errors?.title}
                id="title"
                name="title"
                type="text"
                style={{ minWidth: "350px", padding: "10px" }}
                value={formData?.title || ""}
                onChange={(e) => handleChange(e.target.value, "title")}
              />
              <FormFeedback className="mb-3">{errors?.title}</FormFeedback>

              <Label className="mt-3">Job Type</Label>
              <Input
                className={
                  errors?.type ? "shadow-none border" : "shadow-none border"
                }
                invalid={!!errors?.type}
                id="type"
                name="type"
                type="text"
                style={{ minWidth: "350px", padding: "10px" }}
                value={formData?.type || ""}
                onChange={(e) => handleChange(e.target.value, "type")}
              />
              <FormFeedback className="mb-3">{errors?.type}</FormFeedback>

              <Label className="mt-3">Job Salary</Label>
              <Input
                className={
                  errors?.salary ? "shadow-none border" : "shadow-none border"
                }
                invalid={!!errors?.salary}
                id="salary"
                name="salary"
                type="text"
                style={{ minWidth: "350px", padding: "10px" }}
                value={formData?.salary || ""}
                onChange={(e) => handleChange(e.target.value, "salary")}
              />
              <FormFeedback className="mb-3">{errors?.salary}</FormFeedback>

              <Label className="mt-3">Line Manager</Label>
              <Input
                className={
                  errors?.lineManager
                    ? "shadow-none border"
                    : "shadow-none border"
                }
                invalid={!!errors?.lineManager}
                id="manager"
                name="manager"
                type="text"
                style={{ minWidth: "350px", padding: "10px" }}
                value={formData?.lineManager || ""}
                onChange={(e) => handleChange(e.target.value, "lineManager")}
              />
              <FormFeedback className="mb-3">
                {errors?.lineManager}
              </FormFeedback>

              <Label className="mt-3">Line Role</Label>
              <Input
                className={
                  errors?.role ? "shadow-none border" : "shadow-none border"
                }
                invalid={!!errors?.role}
                id="role"
                name="role"
                type="textarea"
                style={{ minWidth: "350px", padding: "10px" }}
                value={formData?.role || ""}
                onChange={(e) => handleChange(e.target.value, "role")}
              />
              <FormFeedback className="mb-3">{errors?.role}</FormFeedback>

              <div className="mt-3">
                <Label className="mt-3">Job Key Responsibilities</Label>
                {formData?.keyResponsibilities &&
                  formData?.keyResponsibilities?.length > 0 && (
                    <div className="border border-dotted ">
                      {(formData.keyResponsibilities || []).map(
                        (item, index) => (
                          <div key={index}>
                            <span className="">{item}</span>
                            <i
                              className="fa-solid fa-ban cursor_pointer"
                              onClick={() =>
                                handleDelete(item, "keyResponsibilities")
                              }
                            ></i>
                          </div>
                        )
                      )}
                    </div>
                  )}
                <div className="d-flex flex-column">
                  <Input
                    className={
                      errors?.keyResponsibilities ? "shadow-none border" : ""
                    }
                    invalid={!!errors?.keyResponsibilities}
                    name="role"
                    type="textarea"
                    style={{ minWidth: "350px", padding: "10px" }}
                    value={keyResponsibilitiesInput}
                    onChange={(e) =>
                      setkeyResponsibilitiesInput(e.target.value)
                    }
                  />
                  <FormFeedback className="mb-3">
                    {errors?.keyResponsibilities}
                  </FormFeedback>
                  <Button
                    color="success"
                    size="sm"
                    className="mt-2"
                    disabled={!keyResponsibilitiesInput}
                    onClick={() =>
                      handleListChange(
                        keyResponsibilitiesInput!,
                        "keyResponsibilities"
                      )
                    }
                  >
                    Add More
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="">
                <Label className="">Job Requirement</Label>
                {formData?.jobRequirement &&
                  formData?.jobRequirement?.length > 0 && (
                    <div className="border border-dotted ">
                      {(formData.jobRequirement || []).map((item, index) => (
                        <div key={index}>
                          <span className="me-3">{item}</span>
                          <i
                            className="fa-solid fa-ban cursor_pointer"
                            onClick={() => handleDelete(item, "jobRequirement")}
                          ></i>
                        </div>
                      ))}
                    </div>
                  )}
                <div className="d-flex flex-column">
                  <Input
                    className={
                      errors?.jobRequirement
                        ? "shadow-none border"
                        : "shadow-none border"
                    }
                    invalid={!!errors?.jobRequirement}
                    name="role"
                    type="textarea"
                    style={{ minWidth: "350px", padding: "10px" }}
                    value={jobRequirementInput}
                    onChange={(e) => setJobRequirementInput(e.target.value)}
                  />
                  <FormFeedback className="mb-3">
                    {errors?.jobRequirement}
                  </FormFeedback>
                  <Button
                    color="success"
                    size="sm"
                    className="mt-2"
                    disabled={!jobRequirementInput}
                    onClick={() =>
                      handleListChange(jobRequirementInput!, "jobRequirement")
                    }
                  >
                    Add More
                  </Button>
                </div>
              </div>

              <div className="mt-5">
                <Label className="">Job Additional Training</Label>
                {formData?.additionalTraining &&
                  formData?.additionalTraining?.length > 0 && (
                    <div className="border border-dotted ">
                      {(formData.additionalTraining || []).map(
                        (item, index) => (
                          <div key={index}>
                            <span className="me-3">{item}</span>
                            <i
                              className="fa-solid fa-ban cursor_pointer"
                              onClick={() =>
                                handleDelete(item, "additionalTraining")
                              }
                            ></i>
                          </div>
                        )
                      )}
                    </div>
                  )}
                <div className="d-flex flex-column">
                  <Input
                    className={
                      errors?.additionalTraining
                        ? "shadow-none border"
                        : "shadow-none border"
                    }
                    invalid={!!errors?.additionalTraining}
                    name="role"
                    type="textarea"
                    style={{ minWidth: "350px", padding: "10px" }}
                    value={additionalTrainingInput}
                    onChange={(e) => setAdditionalTrainingInput(e.target.value)}
                  />
                  <FormFeedback className="mb-3">
                    {errors?.additionalTraining}
                  </FormFeedback>
                  <Button
                    color="success"
                    size="sm"
                    className="mt-2"
                    disabled={!additionalTrainingInput}
                    onClick={() =>
                      handleListChange(
                        additionalTrainingInput!,
                        "additionalTraining"
                      )
                    }
                  >
                    Add More
                  </Button>
                </div>
              </div>

              <div className="mt-5">
                <Label className="">Why Join Us</Label>
                {formData?.joinUs && formData?.joinUs?.length > 0 && (
                  <div className="border border-dotted ">
                    {(formData.joinUs || []).map((item, index) => (
                      <div key={index}>
                        <span className="me-3">{item}</span>
                        <i
                          className="fa-solid fa-ban cursor_pointer"
                          onClick={() => handleDelete(item, "joinUs")}
                        ></i>
                      </div>
                    ))}
                  </div>
                )}
                <div className="d-flex flex-column">
                  <Input
                    className={
                      errors?.joinUs
                        ? "shadow-none border"
                        : "shadow-none border"
                    }
                    invalid={!!errors?.joinUs}
                    name="role"
                    type="textarea"
                    style={{ minWidth: "350px", padding: "10px" }}
                    value={joinUsInput}
                    onChange={(e) => setJoinUsInput(e.target.value)}
                  />
                  <FormFeedback className="mb-3">{errors?.joinUs}</FormFeedback>
                  <Button
                    color="success"
                    size="sm"
                    className="mt-2"
                    disabled={!joinUsInput}
                    onClick={() => handleListChange(joinUsInput!, "joinUs")}
                  >
                    Add More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FormGroup>
        <button
          type="button"
          onClick={handleSubmit}
          className="p-2 border-3 btn btn-success btn-block"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <span>
              Submit <i className="fas fa-arrow-right mx-2"></i>
            </span>
          )}
        </button>
      </Form>
    </div>
  );
};
