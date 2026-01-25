import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-widget">
          <div className="container">
            <div className="footer-widget-wrap pt-100 pb-80">
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="footer-widget-box about-us">
                    <Link href="#" className="footer-logo">
                      <Image
                        src="/assets/img/wellnest-logo-with-name-WHITE.png"
                        height={500}
                        width={500}
                        alt="logo"
                      />
                    </Link>
                    <div className="mt-3">
                      <ul className="footer-contact">
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                          </div>
                          <div className="content">
                            <h6>Our Address</h6>
                            <p>25/AB Milford Road, New York, USA</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                          </div>
                          <div className="content">
                            <h6>Call Us</h6>
                            <Link href="tel:+21236547898">+2 123 654 7898</Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                          </div>
                          <div className="content">
                            <h6>Mail Us</h6>
                            <Link href="mailto:info@wellwheels.org">
                              info@wellwheels.org
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-2"></div>
                <div className="col-lg-3">
                  <div className="footer-widget-box">
                    <h4 className="footer-widget-title">Quick Links</h4>
                  </div>
                  <ul className="footer-list" style={{ listStyle: "none" }}>
                    <li>
                      <Link href="/about">
                        <i className="fa-solid fa-caret-right"></i>About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/home_care_service/help_home">
                        <i className="fa-solid fa-caret-right"></i>WellNest Home
                        Care
                      </Link>
                    </li>
                    <li>
                      <Link href="/well-wheels">
                        <i className="fa-solid fa-caret-right"></i>WellWheels
                      </Link>
                    </li>
                    <li>
                      <Link href="/career">
                        <i className="fa-solid fa-caret-right"></i>Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-solid fa-caret-right"></i>Land
                        Acknowledgement
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-2">
                  <div className="footer-widget-box list">
                    <ul className="footer-list" style={{ listStyle: "none" }}>
                      <li>
                        <Link href="/contact">
                          <i className="fa-solid fa-caret-right"></i>Contact Us
                          Care
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fa-solid fa-caret-right"></i>Privacy
                          Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fa-solid fa-caret-right"></i>Disclaimers
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fa-solid fa-caret-right"></i>Terms of
                          Use
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p className="copyright-text">
                  &copy; Copyright <span id="date"></span>
                  <Link href="#"> WellNest </Link> All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 align-self-center">
                <ul className="footer-social">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-x-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
