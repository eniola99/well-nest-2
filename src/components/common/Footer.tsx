import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "WellNest Home Care", path: "/home_care_service/help_home" },
    { name: "WellWheels", path: "/well-wheels" },
    { name: "Careers", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <>
      <footer className="footer-area">
        <div
          className="footer-shape"
          style={{ backgroundImage: "url(../public/assets/img/shape/01.png)" }}
        ></div>
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
                            <p>
                              23, Richard William Drive, Caledonia, ON N3W 0C5
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                          </div>
                          <div className="content">
                            <h6>Call Us</h6>
                            <Link href="tel:+(+289)-523-0738">
                              (+289)-523-0738
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                          </div>
                          <div className="content">
                            <h6>Email Us</h6>
                            <Link href="mailto:care@wellnestgroup.org">
                              care@wellnestgroup.org
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-3">
                  <div className="footer-widget-box">
                    <h4 className="footer-widget-title">Quick Links</h4>
                  </div>
                  <ul className="footer-list" style={{ listStyle: "none" }}>
                    {links.map((link) => (
                      <li key={link.path}>
                        <Link href={link.path}>
                          <i className="fa-solid fa-caret-right"></i>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-2">
                  <div className="footer-widget-box">
                    <h4 className="footer-widget-title">Our Policies</h4>
                  </div>
                  <ul className="footer-list" style={{ listStyle: "none" }}>
                    <li>
                      <Link href="/privacy-policy">
                        <i className="fa-solid fa-caret-right"></i>
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
