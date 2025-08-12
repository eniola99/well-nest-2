import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <>
      <div className="about-area py-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                <div className="about-img">
                  <div className="row">
                    <div className="col-6">
                      <Image
                        src="/assets/img/aboutImg01.jpg"
                        width={400}
                        height={700}
                        alt="about img 1"
                      />
                      <div className="about-experience">
                        <p>Lincensed & insured</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="img-3">
                        <Image
                          src="/assets/img/aboutImg03.jpg"
                          width={400}
                          height={500}
                          alt="about img 3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right wow fadeInUp" data-wow-delay=".25s">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline">
                    <i className="fa-regular fa-house"></i>About Us
                  </span>
                  <h2 className="site-title">
                    We Are The Best and Expert <span>For Senior</span> Care
                  </h2>
                </div>
                <p className="about-text">
                  At WellNest, it means placing your needs at the heart of all
                  our actions and decisions so your experiences far exceed your
                  expectations.
                </p>
                <div className="about-content">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="about-item">
                        <div className="icon">
                          <Image
                            src="/assets/svg/team.svg"
                            width={100}
                            height={100}
                            alt="team svg"
                          />
                        </div>
                        <div className="content">
                          <h6>Our Experts Nurse</h6>
                          <p>24/7 availability</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-item">
                        <div className="icon">
                          <Image
                            src="/assets/svg/support-2.svg"
                            width={100}
                            height={100}
                            alt="support svg"
                          />
                        </div>
                        <div className="content">
                          <h6>24/7 Live Support</h6>
                          <p>24/7 availability</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/about" className="theme-btn">
                  Discover More<i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
