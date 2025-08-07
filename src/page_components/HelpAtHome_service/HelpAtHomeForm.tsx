import React from "react";

export const HelpAtHomeForm = () => {
  const locationSelect = [
    "WellNest Barrie",
    "WellNest Bancroft Clinic",
    "WellNest Belleville",
    "WellNest Brantford",
    "WellNest Burlington",
    "WellNest Calgary",
  ];
  return (
    <>
      <div className="mt-5">
        <div className="service-sidebar">
          <div className="widget">
            <div className=" d-flex justify-content-center">
              <h3 className="mb-20">Order Services Page Today</h3>
            </div>
            <p className="mb-20 d-flex justify-content-center">
              Trusted home care support is right around the corner. Lets get
              started today for a better tomorrow.
            </p>
            <h4 className="title mt-5">Lets Get Started</h4>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <h5>
                  Are you looking for home support for yourself or a loved one?
                </h5>
                <div className="d-flex mt-3">
                  <div className="form-check me-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="framework"
                      value="myself"
                      id="myselfCheck"
                    />
                    <label className="form-check-label" htmlFor="myselfCheck">
                      Myself
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="framework"
                      value="lovedOnes"
                      id="lovedOnesCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="lovedOnesCheck"
                    >
                      Loved Ones
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h5>
                  Which location is closest to where this person requires home
                  care?
                </h5>
                <div className="mt-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    {locationSelect.map((item, index) => (
                      <div key={index}>
                        <option>{item}</option>
                      </div>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <h5>How quickly do you wish to have homecare services?</h5>
                <div className="d-flex mt-3">
                  <div className="form-check me-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="framework1"
                      value="asSoonAsPossible"
                      id="asSoonAsPossible"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="asSoonAsPossible"
                    >
                      As Soon As Possible
                    </label>
                  </div>
                  <div className="form-check me-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="framework1"
                      value="thisWeek"
                      id="thisWeek"
                    />
                    <label className="form-check-label" htmlFor="thisWeek">
                      This Week
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="framework1"
                      value="thisMonth"
                      id="thisMonth"
                    />
                    <label className="form-check-label" htmlFor="thisMonth">
                      This Month
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h5>About You:</h5>
                <form className="d-flex flex-column mt-3">
                  <div className="d-flex">
                    <div className="form-group me-3">
                      <input
                        type="text"
                        className="form-control"
                        id="yourName"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="form-group me-3">
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="mt-4">
                <h5>Best way to reach me:</h5>
                <div className="d-flex mt-3">
                  <div className="form-check me-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="framework3"
                      value="phone"
                      id="phone"
                    />
                    <label className="form-check-label" htmlFor="phone">
                      Phone
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="framework3"
                      value="email"
                      id="email"
                    />
                    <label className="form-check-label" htmlFor="email">
                      Email
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h5>Tell us about your needs:</h5>
                <div
                  className="form-group me-3 mt-3"
                  style={{ minWidth: "350px" }}
                >
                  <textarea
                    className="form-control"
                    id="comment"
                    rows={3}
                    placeholder="Comments"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
