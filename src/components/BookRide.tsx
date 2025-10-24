/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Form, FormGroup, Input } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

type BookRideType = {
  fullName: string;
  email: string;
  number: string;
  tripDateAndTime: Date | null;
  pickUpTime: Date | null;
  destination: string;
  pickUpAddress: string;
  information: string;
};

export const BookRide = () => {
  const [formData, setFormData] = useState<Partial<BookRideType> | null>(null);

  const handleChange = (
    value: string | Date | null,
    attr: keyof BookRideType
  ) => {
    const form = { ...formData };
    (form as any)[attr] = value;
    setFormData(form);
  };

  console.log({ formData });
  return (
    <>
      <Form>
        <FormGroup>
          <Input
            className="shadow-none border p-3 mb-3"
            placeholder="Full Name"
            type="text"
            value={formData?.fullName || ""}
            onChange={(e) => handleChange(e.target.value, "fullName")}
          />
          <Input
            className="shadow-none border p-3 mb-3"
            placeholder="Email"
            type="text"
          />
          <Input
            className="shadow-none border p-3 mb-3"
            placeholder="Phone Number"
            type="text"
          />
        </FormGroup>
        <div className="d-flex mb-3">
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
        <FormGroup>
          <Input
            className="shadow-none border p-3 mb-3"
            placeholder="Pick up Address"
            type="text"
          />
          <Input
            className="shadow-none border p-3 mb-3"
            placeholder="Destination"
            type="text"
          />
          <Input
            className="shadow-none border p-3 mb-3"
            placeholder="Additional Information"
            type="text"
          />
        </FormGroup>
        <div className="nav-btn">
          <button
            type="button"
            className="p-2 border-3 btn btn-success btn-block"
          >
            Book a Ride
            <i className="fas fa-arrow-right mx-2"></i>
          </button>
        </div>
      </Form>
    </>
  );
};
