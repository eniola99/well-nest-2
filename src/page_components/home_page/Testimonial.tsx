import React from "react";
import Image from "next/image";

export const Testimonial = () => {
  return (
    <div className="container pt-3">
      <h2 className="text-center">Our Value Statement (The CARE Standard) </h2>

      <div className="feature-area pt-5">
        <div className="container">
          <div className="feature-wrapper">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="feature-item bg-1">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="feature-icon">
                      <i
                        className="fa-solid fa-heart"
                        style={{
                          fontSize: "30px",
                          marginLeft: "6px",
                          marginTop: "20px",
                          color: "black",
                        }}
                      ></i>
                    </div>
                    <h4 className="mx-4">Compassion</h4>
                  </div>
                  <div className="feature-content">
                    <p>We lead with kindness and empathy.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="feature-item bg-2 ">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="feature-icon">
                      <i
                        className="fa-solid fa-scale-balanced"
                        style={{
                          fontSize: "30px",
                          marginLeft: "6px",
                          marginTop: "20px",
                          color: "black",
                        }}
                      ></i>
                    </div>
                    <h4 className="mx-4">Accountability</h4>
                  </div>
                  <div className="feature-content">
                    <p>We act with honesty and integrity</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="feature-item bg-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="feature-icon">
                      <i
                        className="fa-solid fa-heart-pulse"
                        style={{
                          fontSize: "30px",
                          marginLeft: "6px",
                          marginTop: "20px",
                          color: "black",
                        }}
                      ></i>
                    </div>
                    <h4 className="mx-4">Respect</h4>
                  </div>
                  <div className="feature-content">
                    <p>We honor dignity, diversity, and independence.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="feature-item bg-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="feature-icon">
                      <i
                        className="fa-solid fa-heart-circle-check"
                        style={{
                          fontSize: "30px",
                          marginLeft: "6px",
                          marginTop: "20px",
                          color: "black",
                        }}
                      ></i>
                    </div>
                    <h4 className="mx-4">Excellence</h4>
                  </div>
                  <div className="feature-content">
                    <p>We strive for quality and continuous improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
