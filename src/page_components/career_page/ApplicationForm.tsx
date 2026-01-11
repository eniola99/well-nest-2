/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState, ChangeEvent, useEffect, useCallback } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  FormFeedback,
  Spinner,
} from "reactstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { RootState } from "@/src/slice/store";
import {
  validateText,
  validateEmail,
  validateBoolean,
} from "@/src/utils/common";

interface FormType {
  name?: string;
  contact?: string;
  email?: string;
  position?: string;
  status?: boolean;
  cprCertification?: boolean;
  foodCertification?: boolean;
  validVulnerable?: boolean;
  accessVehicle?: boolean;
  infractionFree?: boolean;
  resume?: FileList | File;
}
export const ApplicationForm = () => {
  const [form, setForm] = useState<FormType>();
  const [uploadedFile, setUploadedFile] = useState<FileList | File>();
  const [formErrors, setFormErrors] = useState<Partial<FormType | null>>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const { role } = useSelector((state: RootState) => state.jobs);

  const handleChange = (
    value: string | HTMLInputElement | boolean,
    attr: string
  ) => {
    const data = { ...form };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data as any)[attr] = value;
    setForm(data);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      for (const file of files) {
        setUploadedFile(file);
      }
    }
  };

  useEffect(() => {
    if (uploadedFile) {
      const newForm = {
        ...form,
        resume: uploadedFile,
      };
      setForm(newForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadedFile]);

  const validateFields = (fields: typeof form) => ({
    name: validateText(fields?.name || "", "Name"),
    contact: validateText(fields?.contact || "", "Contact"),
    email: validateEmail(fields?.email || ""),
    status: validateBoolean(fields?.status, "Valid response"),
    cprCertification: validateBoolean(
      fields?.cprCertification,
      "Valid response"
    ),
    foodCertification: validateBoolean(
      fields?.foodCertification,
      "Valid response"
    ),
    validVulnerable: validateBoolean(fields?.validVulnerable, "Valid response"),
    accessVehicle: validateBoolean(fields?.accessVehicle, "Valid response"),
    infractionFree: validateBoolean(fields?.infractionFree, "Valid response"),
    resume: !fields?.resume ? "Please upload your resume" : undefined,
  });

  const handleSubmit = (form: FormType | undefined) => {
    setFormErrors(validateFields(form));
    setIsSubmitting(true);
  };
  console.log({ form, uploadedFile });

  const sendApplication = useCallback(async (form: FormType) => {
    setIsloading(true);
    const formData = new FormData();

    // Append text fields
    formData.append("name", form.name);
    formData.append("contact", form.contact);
    formData.append("email", form.email);
    formData.append("position", role.title);
    formData.append("status", form.status);
    formData.append("cprCertification", form.cprCertification);
    formData.append("foodCertification", form.foodCertification);
    formData.append("validVulnerable", form.validVulnerable);
    formData.append("accessVehicle", form.accessVehicle);
    formData.append("infractionFree", form.infractionFree);
    if (form.resume instanceof File) {
      formData.append("resume", form.resume, form.resume.name);
    }

    const response = await fetch("/api/careers/jobs/apply", {
      method: "POST",
      body: formData,
    });

    const initData = await response.json();
    console.log({ initData });
    if (initData.status === 200) {
      toast.success(initData.message);
      setIsloading(false);
      setForm(undefined);
    } else {
      toast.error("Failed to send application, Try again");
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    if (
      isSubmitting &&
      Object.values(formErrors).every((item) => item === undefined)
    ) {
      sendApplication(form);
    }
  }, [formErrors, isSubmitting, sendApplication, form]);

  return (
    <>
      <div className="container mb-5">
        <h4 className="text-center">Application Form</h4>
        <div className="mt-3">
          <div className="mt-2">
            <Form>
              <div className="contact-information">
                <span>
                  <strong>Contact Information</strong>
                </span>
                <FormGroup floating>
                  <Input
                    invalid={formErrors?.name}
                    name="name"
                    placeholder="Name"
                    type="text"
                    autoComplete="off"
                    value={form?.name}
                    onChange={(e) => handleChange(e.target.value, "name")}
                  />
                  <Label for="exampleEmail">Name</Label>
                  {formErrors?.name && (
                    <FormFeedback>{formErrors?.name}</FormFeedback>
                  )}
                </FormGroup>{" "}
                <FormGroup floating>
                  <Input
                    invalid={formErrors?.email}
                    name="email"
                    placeholder="Email"
                    type="email"
                    autoComplete="off"
                    className="application_button"
                    value={form?.email}
                    onChange={(e) => handleChange(e.target.value, "email")}
                  />
                  <Label className="application_button">Email</Label>
                  {formErrors?.email && (
                    <FormFeedback>{formErrors?.email}</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup floating>
                  <Input
                    invalid={formErrors?.contact}
                    name="number"
                    placeholder="Contact Number"
                    type="text"
                    autoComplete="off"
                    className="application_button"
                    value={form?.contact}
                    onChange={(e) => handleChange(e.target.value, "contact")}
                  />
                  <Label className="application_button">Contact Number</Label>
                  {formErrors?.contact && (
                    <FormFeedback>{formErrors?.contact}</FormFeedback>
                  )}
                </FormGroup>{" "}
                <FormGroup floating>
                  <Input
                    name="text"
                    placeholder="Position Applied For"
                    type="text"
                    autoComplete="off"
                    value={role.title}
                  />
                  <Label className="">Position Applied For</Label>
                </FormGroup>{" "}
              </div>

              <div className="status mt-4">
                <span>
                  <strong>Status</strong>
                </span>
                <div>
                  <Label className="me-3">
                    Are you legally eligible to work in Canada
                  </Label>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.status}
                      type="checkbox"
                      checked={form?.status}
                      onChange={() => handleChange(true, "status")}
                    />
                    <Label check>Yes</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.status}
                      type="checkbox"
                      checked={form?.status === false}
                      onChange={() => handleChange(false, "status")}
                    />
                    <Label check>No</Label>
                    <br />
                    {formErrors?.status && (
                      <label className="text-danger">
                        <small>{formErrors?.status}</small>
                      </label>
                    )}
                  </FormGroup>
                </div>
              </div>

              <div className="status mt-3">
                <span>
                  <strong>Additional Certification and Information</strong>
                </span>
                <div>
                  <Label className="me-5">
                    Current First Aid and CPR certification <br />
                  </Label>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.cprCertification}
                      type="checkbox"
                      checked={form?.cprCertification}
                      onChange={() => handleChange(true, "cprCertification")}
                    />
                    <Label check>Yes</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.cprCertification}
                      type="checkbox"
                      checked={form?.cprCertification === false}
                      onChange={() => handleChange(false, "cprCertification")}
                    />
                    <Label check>No</Label>
                    <br />
                    {formErrors?.cprCertification && (
                      <label className="text-danger">
                        <small>{formErrors?.cprCertification}</small>
                      </label>
                    )}
                  </FormGroup>
                </div>
                <div>
                  <Label className="me-5">
                    Valid Food Handler’s Certificate
                  </Label>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.foodCertification}
                      type="checkbox"
                      checked={form?.foodCertification}
                      onChange={() => handleChange(true, "foodCertification")}
                    />
                    <Label check>Yes</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.foodCertification}
                      type="checkbox"
                      checked={form?.foodCertification === false}
                      onChange={() => handleChange(false, "foodCertification")}
                    />
                    <Label check>No</Label>
                    <br />
                    {formErrors?.foodCertification && (
                      <label className="text-danger">
                        <small>{formErrors?.foodCertification}</small>
                      </label>
                    )}
                  </FormGroup>
                </div>
                <div>
                  <Label className="me-5">
                    Valid Vulnerable Sector Search issued in the last 3 months
                  </Label>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.validVulnerable}
                      type="checkbox"
                      checked={form?.validVulnerable}
                      onChange={() => handleChange(true, "validVulnerable")}
                    />
                    <Label check>Yes</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.validVulnerable}
                      type="checkbox"
                      checked={form?.validVulnerable === false}
                      onChange={() => handleChange(false, "validVulnerable")}
                    />
                    <Label check>No</Label>
                    <br />
                    {formErrors?.validVulnerable && (
                      <label className="text-danger">
                        <small>{formErrors?.validVulnerable}</small>
                      </label>
                    )}
                  </FormGroup>
                </div>
                <div>
                  <Label className="me-5">
                    Do you have access to a reliable vehicle ?
                  </Label>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.accessVehicle}
                      type="checkbox"
                      checked={form?.accessVehicle}
                      onChange={() => handleChange(true, "accessVehicle")}
                    />
                    <Label check>Yes</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.accessVehicle}
                      type="checkbox"
                      checked={form?.accessVehicle === false}
                      onChange={() => handleChange(false, "accessVehicle")}
                    />
                    <Label check>No</Label>
                    <br />
                    {formErrors?.accessVehicle && (
                      <label className="text-danger">
                        <small>{formErrors?.accessVehicle}</small>
                      </label>
                    )}
                  </FormGroup>
                </div>
                <div>
                  <Label className="me-5">
                    Are you able to provide a clean driver’s abstract that is
                    free of infractions?
                  </Label>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.infractionFree}
                      type="checkbox"
                      checked={form?.infractionFree}
                      onChange={() => handleChange(true, "infractionFree")}
                    />
                    <Label check>Yes</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      invalid={formErrors?.infractionFree}
                      type="checkbox"
                      checked={form?.infractionFree === false}
                      onChange={() => handleChange(false, "infractionFree")}
                    />
                    <Label check>No</Label>
                    <br />
                    {formErrors?.infractionFree && (
                      <label className="text-danger">
                        <small>{formErrors?.infractionFree}</small>
                      </label>
                    )}
                  </FormGroup>
                </div>
              </div>

              <div className="mt-3">
                <span>
                  <strong>Upload your resume</strong>
                </span>
                <div className="">
                  <FormGroup className="mt-3">
                    <Input
                      invalid={formErrors?.resume}
                      name="file"
                      type="file"
                      accept=".pdf,.doc"
                      onChange={handleFileChange}
                    />
                    <FormText>
                      Acceptable file formats: PDF, DOC, DOCX.
                    </FormText>
                    {formErrors?.resume && (
                      <FormFeedback>
                        <small>{formErrors?.resume}</small>
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="mt-5">
          <span className="fst-italic">
            Wellnest Health Group strives for equal opportunities and diversity
            in the workplace. We are committed to an inclusive, barrier-free
            recruitment and selection processes. If you are contacted for a job
            opportunity, please let us know of any accommodations needed to
            ensure you have access to a fair and equitable process. Wellnest
            Health Group thanks all applicants but only those selected for an
            interview will be contacted.
          </span>
        </div>
        <div className="mt-3">
          <Button
            color="success"
            onClick={() => handleSubmit(form)}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "Submit"}
          </Button>
        </div>
      </div>
    </>
  );
};
