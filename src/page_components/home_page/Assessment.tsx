import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Assessment = () => {
  return (
    <>
      <div className="service-section-our  mt-5 pb-50">
        <h2 className="text-center pt-5">Our Services</h2>

        <div className="container mt-5">
          <div className="row g-3">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="service-area2">
                <div
                  className="service-item"
                  style={{ border: "2px solid var(--theme-color)" }}
                >
                  <div className="service-info">
                    <div className="service-content">
                      <h4 className=" mb-3">WellNest Home Care</h4>
                      <span className="">
                        Home is more than a place — it’s where comfort, dignity,
                        and independence live. At{" "}
                        <strong>WellNest Home Care</strong>, we believe that
                        everyone deserves to feel safe, comfortable, and cared
                        for — right in the place they call home. Whether you or
                        a loved one needs daily support, companionship, or
                        short-term assistance, our trusted caregivers are here
                        to help you live with dignity, independence, and peace
                        of mind
                      </span>
                    </div>
                  </div>
                  <div className="service-img mt-3 mb-3">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/homepage_homecare_services_yyr1n6.jpg`}
                      width={650}
                      height={350}
                      alt="wellwheels vehicle"
                    />
                  </div>
                  <div className="service-content">
                    <span className="">
                      Whether you need daily care or occasional help, our team
                      provides dependable, person-centered support that feels
                      like family.
                    </span>
                  </div>
                  <div className="choose-content wow fadeInUp">
                    <div className="choose-content-wrap">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="choose-item">
                            <div className="d-flex align-items-center">
                              <i className="me-2 fa-solid fa-check"></i>
                              <h5>Personal support</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="choose-item">
                            <div className="d-flex align-items-center">
                              <i className="me-2 fa-solid fa-check"></i>
                              <h5>Respite Care</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="choose-item">
                            <div className="d-flex align-items-center">
                              <i className="me-2 fa-solid fa-check"></i>
                              <h5>Companionship</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="choose-item">
                            <div className="d-flex align-items-center">
                              <i className="me-2 fa-solid fa-check"></i>
                              <h5>Housekeeping</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="choose-item">
                            <div className="d-flex align-items-center">
                              <i className="me-2 fa-solid fa-check"></i>
                              <h5>Seasonal Support</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hero-btn mb-3">
                        <Link
                          href="/home_care_service"
                          className="theme-btn mt-5"
                        >
                          learn more
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="service-area2">
                <div
                  className="service-item"
                  style={{ border: "2px solid var(--color-dark)" }}
                >
                  <div className="service-info">
                    <div className="service-content">
                      <h4 className="mb-3">Wellwheels</h4>
                    </div>
                  </div>
                  <p>
                    We support safe and comfortable transitions from home to
                    community. Unlike standard transit services, WellWheels
                    provides door-to-door assistance, with drivers trained to
                    offer the same empathy, professionalism, and cultural
                    awareness reflected across our care team — so clients feel
                    supported every step of the way.
                  </p>
                  <div className="service-img mt-3 mb-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/wellwheels_heropage_efqdyu.jpg`}
                      width={650}
                      height={350}
                      alt="wellwheels vehicle"
                    />
                  </div>
                  <div className="d-flex flex-column mb-5">
                    <div className="d-flex align-items-center">
                      <i className="me-3 fa-solid fa-check"></i>
                      <p>Non emergency medical transportation</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="me-3 fa-solid fa-check"></i>
                      <p>Health and Wellness Support</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="me-3 fa-solid fa-check"></i>
                      <p>Respite or Group transportation</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="me-3 fa-solid fa-check"></i>
                      <p>
                        <strong>Coordinated Care:</strong> If you have a
                        WellNest caregiver, we sync with WellWheels for a
                        stress-free day
                      </p>
                    </div>
                  </div>
                  <div className="hero-btn mb-4">
                    <Link href="/well-wheels" className="theme-btn">
                      Learn More
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="service-area2">
                  <div className="service-item" style={{ minHeight: "400px" }}>
                    <h3 className="text-center">
                      Flexible Care. Seamlessly Connected.
                    </h3>
                    <p className="mt-3 p-3">
                      Whether you need support at home, reliable transportation,
                      or both — our care packages are designed around your life,
                      not a fixed template. Managing care can feel overwhelming
                      — especially when coordinating multiple services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="service-area2">
                  <div className="service-item">
                    <h5>
                      Our bundled care options combine: WellNest Home Care and
                      WellWheels.
                    </h5>
                    <div className=" package-home">
                      <div className="d-flex align-items-center pt-3">
                        <i className="me-2 fa-solid fa-check"></i>
                        <p>One coordinated plan</p>
                      </div>
                      <div className="d-flex align-items-center pt-3">
                        <i className="me-2 fa-solid fa-check"></i>
                        <p>Consistent communication</p>
                      </div>
                      <div className="d-flex align-items-center pt-3">
                        <i className="me-2 fa-solid fa-check"></i>
                        <p>Fewer providers to manage</p>
                      </div>
                      <div className="d-flex align-items-center pt-3">
                        <i className="me-2 fa-solid fa-check"></i>
                        <p>Greater independence</p>
                      </div>
                      <div className="d-flex align-items-center pt-3 pb-3">
                        <i className="me-2 fa-solid fa-check"></i>
                        <p>Peace of mind for families</p>
                      </div>
                    </div>
                    <div className="hero-btn mb-3">
                      <Link href="/contact" className="theme-btn">
                        Book A Free consultation
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
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
