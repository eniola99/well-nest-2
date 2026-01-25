import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Assessment = () => {
  return (
    <>
      <h2 className="site-title text-center  pt-100">Our Service</h2>
      <div className="mt-5 pb-100">
        <div className="choose-area">
          <div className="container">
            <div
              className="row g-4 align-items-center justify-content-between wow fadeInDown"
              data-wow-delay=".25s"
            >
              <div className="col-lg-6">
                <div className="site-heading mb-3">
                  <h2 className="site-title">
                    WellNest <span>Home Care </span>
                  </h2>
                </div>
                <span className="choose-subtitle">
                  Home is where dignity lives. Dependable, person-centered
                  support that feels like family.
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="choose-content wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <div className="choose-content-wrap">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="choose-item">
                          {/* <span className="count">01</span> */}
                          <div className="choose-item-icon">
                            {/* <i
                              className="fa-solid fa-hospital"
                              style={{
                                fontSize: "25px",
                                color: "white",
                                paddingTop: "5px",
                              }}
                            ></i> */}
                            <Image
                              src="assets/img/icon/money.svg"
                              alt=""
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="choose-item-info">
                            <h4>Personal support</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="choose-item">
                          {/* <span className="count">02</span> */}
                          <div className="choose-item-icon">
                            <Image
                              src="assets/img/icon/money.svg"
                              alt=""
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="choose-item-info">
                            <h4>Respite Care</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="choose-item">
                          {/* <span className="count">03</span> */}
                          <div className="choose-item-icon">
                            <Image
                              src="assets/img/icon/money.svg"
                              alt=""
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="choose-item-info">
                            <h4>Companionship</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="choose-item">
                          {/* <span className="count">04</span> */}
                          <div className="choose-item-icon">
                            <Image
                              src="assets/img/icon/money.svg"
                              alt=""
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="choose-item-info">
                            <h4>Housekeeping</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="choose-item">
                          {/* <span className="count">05</span> */}
                          <div className="choose-item-icon">
                            <Image
                              src="assets/img/icon/money.svg"
                              alt=""
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="choose-item-info">
                            <h4>Seasonal Support</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-btn mt-3"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
                    <Link href="/about" className="theme-btn">
                      learn more
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-2"></div> */}
              <div className="col-lg-6">
                <div
                  className="skill-img wow fadeInRight"
                  data-wow-delay=".25s"
                >
                  <Image
                    src="/assets/img/wellnest-home-care2.jpg"
                    width={800}
                    height={300}
                    alt="about img 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="skill-area py-100">
          <div className="container">
            <div className="skill-wrap">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <div
                    className="skill-content wow fadeInUp"
                    data-wow-delay=".25s"
                  >
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
                    style={{ width: "500px", height: "600px" }}
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
        </div> */}
      </div>
      <div className="video-area pt-50 mb-5">
        <div className="container py-100">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="video-info wow fadeInUp" data-wow-delay=".25s">
                <div className="site-heading mb-0">
                  <h2 className="site-title">Wellwheels</h2>
                  <p>
                    We provide a seamless transition from home to community.
                    Unlike standard transit, WellWheels offers &quot;Hand-to-
                    Hand&quot; support. Our drivers are trained in the same
                    empathy and cultural respect as our caregivers, ensuring you
                    never feel rushed or unsupported.
                  </p>
                  <ul className="mt-2" style={{ listStyle: "disc inside" }}>
                    <li>Non emergency medical transportation</li>
                    <li>Health and Wellness Support</li>
                    <li>Respite or Group transportation</li>
                    <li>
                      <strong>Coordinated Care:</strong> If you have a WellNest
                      caregiver, we sync with WellWheels for a stress-free day
                    </li>
                  </ul>
                </div>
                <div
                  className="hero-btn mt-5"
                  data-animation="fadeInUp"
                  data-delay="1s"
                >
                  <Link href="/about" className="theme-btn">
                    Book Your Journey
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <div className="image-content">
                <Image
                  src="/assets/img/wellwheels-1.jpg"
                  width={800}
                  height={450}
                  alt="wellwheels vehicle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
