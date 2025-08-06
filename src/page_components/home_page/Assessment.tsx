import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Assessment = () => {
  return (
    <>
      <div className="skill-area py-100">
        <div className="container">
          <div className="skill-wrap">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div
                  className="skill-content wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <span className="site-title-tagline">
                    <i className="fa fa-heart-circle-plus"></i> Care Assessment
                  </span>
                  <h2 className="site-title">
                    Let’s start your free <span>In‑Home</span> Care Assessment
                    today
                  </h2>
                  <p className="skill-text">
                    WellNest helps families with dignified care from familiar
                    faces.
                  </p>
                  <div className="skill-progress">
                    <div className="progress-item">
                      <h5>
                        Best Quality Service{" "}
                        <span className="percent">85%</span>
                      </h5>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <h5>
                        Our Experience <span className="percent">90%</span>
                      </h5>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <h5>
                        Senior Care <span className="percent">80%</span>
                      </h5>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/home_care_service/live_in"
                    className="theme-btn mt-5"
                  >
                    Start Your Assessment<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="skill-img wow fadeInRight"
                  data-wow-delay=".25s"
                >
                  <Image
                    src="/assets/img/assessment/01.jpg"
                    width={500}
                    height={600}
                    alt="about img 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
