import React from "react";
import { CareerJobListing } from "./CareerJobListing";
import { CareerBenefits } from "./CareerBenefits";

export const CareerPageDisclaimer = () => {
  return (
    <>
      <div className="terms-area py-80">
        <div className="container">
          <div className="mb-5">
            <div className="">
              <CareerJobListing />
            </div>
            <h3 className="text-center">Why work with us</h3>
            <p className="text-center mt-3">
              We believe that to provide the best care for our community, we
              must first care for our team
            </p>
            <div className="container mt-4 mb-5">
              <CareerBenefits />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="service-area2">
                  <div className="service-item">
                    <h3 className="text-center pt-3 mb-4">
                      Application Process
                    </h3>
                    <div className="container mt-4 mb-5">
                      <ul className="list-unstyled ">
                        <li className="mb-2">
                          <strong>Step 1: </strong>
                          Application – Submit your resume. Please include the
                          position of interest in your subject title.
                        </li>
                        <li className="mb-2">
                          <strong>Step 2: </strong>
                          Screening – Our team will review your application and
                          may follow up for an initial phone screening
                        </li>
                        <li className="mb-2">
                          <strong>Step 3: </strong>Interview – Meet with our
                          team to discuss the role, your qualifications, and how
                          you fit within our culture.
                        </li>
                        <li className="mb-2">
                          <strong>Step 4: </strong>
                          Verification – Completion of a thorough background and
                          reference check.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-area2">
                  <div className="service-item" style={{ minHeight: "410px" }}>
                    <h3 className="text-center pt-3 mb-4">Disclaimer</h3>
                    <p className="">
                      WellNest Health Group is an equal opportunity employer
                      committed to diversity and inclusion in the workplace.
                    </p>
                    <p className="pt-3">
                      We DO NOT require an application fee at any stage of our
                      hiring process. If you come across any request for payment
                      during your application with us, please consider it
                      suspicious and DO NOT proceed with any payment. Your
                      safety and trust are important to us. To apply for a
                      position, please complete the submission form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
