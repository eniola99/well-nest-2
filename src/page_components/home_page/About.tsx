import React from "react";
import Link from "next/link";

export const About = () => {
  return (
    <>
      {/* <div className="about-area py-100">
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
                <Link href="/about" className="theme-btn">
                  Discover More<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="service-area2 py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">
                  <i className="fa fa-heart-circle-plus"></i>About Us
                </span>
                <h2 className="site-title">
                  We Believe Everyone Deserves <span> Quality Care</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="cta-area py-100 ">
        <div className="container">
          <div className="cta-wrap rounded-5 w-100">
            <div className="col-lg-7 mx-auto">
              <div className="cta-content">
                <h2 className="site-title-center">
                  We Believe Everyone Deserves <span> Quality Care</span>
                </h2>
                <p>
                  We’ve been in the rooms where support was needed but not
                  found. We build a circle of support that understands your
                  values and speaks the &apos;language of your
                  home&apos;—through empathy, respect, and reliability
                </p>
                <Link href="/about" className="theme-btn">
                  learn more about our story
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
