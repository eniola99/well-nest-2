import React from "react";

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
                    <a href="mailto:info@example.com">
                      <i className="far fa-envelopes"></i>
                      info@example.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+21236547898">
                      <i className="fa fa-phone-volume"></i> +2 123 654 7898
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-alarm-clock"></i> Sun - Fri (08AM -
                      10PM)
                    </a>
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
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
