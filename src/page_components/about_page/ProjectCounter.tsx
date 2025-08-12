import React from "react";
import Image from "next/image";

export const ProjectCounter = () => {
  return (
    <>
      <div className="counter-area p-5">
        <div className="container">
          <div className="counter-wrap">
            <div className="row g-4">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <Image
                      src="assets/img/icon/senior-care.svg"
                      width={50}
                      height={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <span
                      className="counter"
                      data-count="+"
                      data-to="6560"
                      data-speed="3000"
                    >
                      6560
                    </span>
                    <h6 className="title">+ Projects Done </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <Image
                      src="assets/img/icon/happy.svg"
                      width={50}
                      height={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <span
                      className="counter"
                      data-count="+"
                      data-to="7320"
                      data-speed="3000"
                    >
                      7320
                    </span>
                    <h6 className="title">+ Happy Clients</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <Image
                      src="assets/img/icon/volunteer.svg"
                      width={50}
                      height={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <span
                      className="counter"
                      data-count="+"
                      data-to="1500"
                      data-speed="3000"
                    >
                      1500
                    </span>
                    <h6 className="title">+ Our Volunteer</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <Image
                      src="/assets/img/icon/award.svg"
                      width={50}
                      height={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <span
                      className="counter"
                      data-count="+"
                      data-to="50"
                      data-speed="3000"
                    >
                      50
                    </span>
                    <h6 className="title">+ Win Awards</h6>
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
