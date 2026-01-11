import React, { useState, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker";
import { Form, FormGroup, Input, FormFeedback, Spinner } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import { validateText } from "../utils/common";

import "react-datepicker/dist/react-datepicker.css";

type BookRideType = {
  fullName?: string | undefined;
  email?: string | undefined;
  number?: string | undefined;
  tripDateAndTime?: Date;
  destination?: string | undefined;
  pickUpAddress?: string | undefined;
  information?: string | undefined;
};

const bookRideForm = {
  fullName: "",
  email: "",
  number: "",
  tripDateAndTime: undefined,
  destination: "",
  pickUpAddress: "",
};

export const BookRide = () => {
  const [formData, setFormData] = useState<Partial<BookRideType>>(bookRideForm);
  const [error, setError] = useState<BookRideType>(bookRideForm);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleChange = (
    value: string | Date | undefined,
    attr: keyof BookRideType
  ) => {
    const form = { ...formData };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (form as any)[attr] = value;
    setFormData(form);
  };

  const checkDate = (val: Date | undefined) => {
    if (isNaN(new Date(val!).getDate())) {
      return undefined;
    }
    return val;
  };

  const validateFields = (fields: BookRideType) => ({
    fullName: validateText(fields?.fullName || "", "Full Name") || undefined,
    email: validateText(fields?.email || "", "Email") || undefined,
    number: validateText(fields?.number || "", "Phone Number") || undefined,
    tripDateAndTime: checkDate(fields.tripDateAndTime),
    destination:
      validateText(fields?.destination || "", "Destination") || undefined,
    pickUpAddress:
      validateText(fields?.pickUpAddress || "", "Pick up address") || undefined,
  });

  const handleSubmit = () => {
    setError(validateFields(formData));
    setIsSubmitting(true);
  };

  const initiateBookRide = useCallback(async (formData: BookRideType) => {
    setIsloading(true);
    const response = await fetch("/api/well-wheels/create-booking", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const initData = await response.json();
    console.log({ initData });
    if (initData.status === 200) {
      toast.success(initData.message);
      setIsloading(false);
      setFormData(bookRideForm);
      setIsSubmitting(false);
    } else {
      toast.error("Failed to book an appointment, Try again");
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    if (
      Object.keys(error).includes("tripDateAndTime") &&
      error.tripDateAndTime !== undefined
    ) {
      const { tripDateAndTime, ...removeKey } = error;
      if (
        isSubmitting &&
        removeKey &&
        Object.values(removeKey).every((item) => item === undefined)
      ) {
        initiateBookRide(formData);
      }
    }
  }, [isSubmitting, error, initiateBookRide, formData]);

  console.log({ formData });

  return (
    <>
      <ToastContainer />
      <Form>
        <FormGroup>
          <Input
            className={
              error?.fullName
                ? "shadow-none border p-3"
                : "shadow-none border p-3 mb-3"
            }
            invalid={!!error?.fullName}
            placeholder="Full Name"
            type="text"
            value={formData?.fullName || ""}
            onChange={(e) => handleChange(e.target.value, "fullName")}
          />
          <FormFeedback className="mb-3">{error?.fullName}</FormFeedback>
          <Input
            className={
              error?.email
                ? "shadow-none border p-3"
                : "shadow-none border p-3 mb-3"
            }
            invalid={!!error?.email}
            placeholder="Email"
            type="text"
            value={formData?.email || ""}
            onChange={(e) => handleChange(e.target.value, "email")}
          />
          <FormFeedback className="mb-3">{error?.email}</FormFeedback>
          <Input
            className={
              error?.number
                ? "shadow-none border p-3"
                : "shadow-none border p-3 mb-3"
            }
            invalid={!!error?.number}
            placeholder="Phone Number"
            type="text"
            value={formData?.number || ""}
            onChange={(e) => handleChange(e.target.value, "number")}
          />
          <FormFeedback className="mb-3">{error?.number}</FormFeedback>
        </FormGroup>
        <div className={error?.tripDateAndTime ? "d-flex" : "d-flex mb-3"}>
          <DatePicker
            dateFormat="yyyy/MM/dd HH:mm"
            className="form-control p-3 shadow-none border"
            placeholderText="Trip Date And Time"
            selected={formData?.tripDateAndTime || null}
            onChange={(date) => handleChange(date as Date, "tripDateAndTime")}
            showTimeInput
            timeInputLabel="Pick up Time"
            isClearable
            minDate={new Date()}
            minTime={
              formData?.tripDateAndTime &&
              formData.tripDateAndTime.toDateString() ===
                new Date().toDateString()
                ? new Date()
                : new Date(new Date().setHours(0, 0, 0, 0))
            }
          />
        </div>
        <div className="mb-3">
          {isSubmitting && error?.tripDateAndTime === undefined && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              Trip Date and Time is required
            </span>
          )}
        </div>
        <FormGroup>
          <Input
            className={
              error?.pickUpAddress
                ? "shadow-none border p-3"
                : "shadow-none border p-3 mb-3"
            }
            invalid={!!error?.pickUpAddress}
            placeholder="Pick up Address"
            type="text"
            value={formData?.pickUpAddress || ""}
            onChange={(e) => handleChange(e.target.value, "pickUpAddress")}
          />
          <FormFeedback className="mb-3">{error?.pickUpAddress}</FormFeedback>
          <Input
            className={
              error?.destination
                ? "shadow-none border p-3"
                : "shadow-none border p-3 mb-3"
            }
            invalid={!!error?.destination}
            placeholder="Destination"
            type="text"
            value={formData?.destination || ""}
            onChange={(e) => handleChange(e.target.value, "destination")}
          />
          <FormFeedback className="mb-3">{error?.destination}</FormFeedback>
          <Input
            className={
              error?.information
                ? "shadow-none border p-3"
                : "shadow-none border p-3 mb-3"
            }
            invalid={!!error?.information}
            placeholder="Additional Information"
            type="text"
            value={formData?.information || ""}
            onChange={(e) => handleChange(e.target.value, "information")}
          />
          <FormFeedback className="mb-3">{error?.information}</FormFeedback>
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
              Book a Ride <i className="fas fa-arrow-right mx-2"></i>
            </span>
          )}
        </button>
      </Form>
    </>
  );
};
