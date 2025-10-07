import React from "react";
import Link from "next/link";

export const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrap">
            <div className="header-top-left">
              <div className="header-top-list">
                <ul>
                  <li>
                    <Link href="mailto:info@wellwheels.org">
                      <i className="far fa-envelopes"></i>
                      info@wellwheels.org
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+21236547898">
                      <i className="fa fa-phone-volume"></i> +2 123 654 7898
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-alarm-clock"></i> Sun - Fri (08AM -
                      10PM)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              {/* Comment out login and language switch option */}

              {/* <div className="header-top-list">
                <a href="login.html">
                  <i className="far fa-sign-in"></i> Login
                </a>
              </div> */}

              {/* <div className="header-top-lang">
                <div className="dropdown">
                  <a
                    href="#"
                    className="top-lang dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fal fa-globe"></i> Eng
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="header-top-social">
                <span>Follow Us: </span>
                <Link href="#">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-x-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
