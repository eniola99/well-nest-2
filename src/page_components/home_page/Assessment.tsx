import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Assessment = () => {
  return (
    <>
      <div className="">
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
                      <i className="fa fa-heart-circle-plus"></i> WellNest Home
                      Care
                    </span>
                    <h2 className="site-title">
                      WellNest <span>Home</span> Care
                    </h2>
                    <p className="skill-text">
                      Home is where dignity lives. Dependable, person-centered
                      support that feels like family.
                    </p>
                    <div className="skill-progress">
                      <div className="progress-item">
                        <h5>Personal support </h5>
                      </div>
                      <div className="progress-item">
                        <h5>Respite Care</h5>
                      </div>
                      <div className="progress-item">
                        <h5>Companionship</h5>
                      </div>
                      <div className="progress-item">
                        <h5>Housekeeping</h5>
                      </div>
                      <div className="progress-item">
                        <h5>Seasonal Support</h5>
                      </div>
                    </div>
                    <Link
                      href="/home_care_service/live_in"
                      className="theme-btn mt-5"
                    >
                      Learn More<i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="skill-img wow fadeInRight"
                    data-wow-delay=".25s"
                  >
                    <Image
                      src="/assets/img/wellnest-home-care2.jpg"
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
        <div className="skill-area py-100">
          <div className="container">
            <div className="skill-wrap">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <div
                    className="skill-img wow fadeInRight"
                    data-wow-delay=".25s"
                  >
                    <Image
                      src="/assets/img/wellnest-home-care2.jpg"
                      width={500}
                      height={600}
                      alt="about img 1"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="skill-content wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <span className="site-title-tagline">
                      <i className="fa fa-heart-circle-plus"></i> WellNest Home
                      Care
                    </span>
                    <h2 className="site-title">
                      WellNest <span>Home</span> Care
                    </h2>
                    <p className="skill-text">
                      Home is where dignity lives. Dependable, person-centered
                      support that feels like family.
                    </p>
                    <div className="skill-progress">
                      <div className="progress-item">
                        <h5>Personal support </h5>
                      </div>
                      <div className="progress-item">
                        <h5>Respite Care</h5>
                      </div>
                      <div className="progress-item">
                        <h5>Companionship</h5>
                      </div>
                      <div className="progress-item">
                        <h5>Housekeeping</h5>
                      </div>
                      <div className="progress-item">
                        <h5>Seasonal Support</h5>
                      </div>
                    </div>
                    <Link
                      href="/home_care_service/live_in"
                      className="theme-btn mt-5"
                    >
                      Learn More<i className="fas fa-arrow-right"></i>
                    </Link>
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
