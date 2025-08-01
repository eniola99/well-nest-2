import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { SidePopup } from "@/src/components/common";

export const Navbar = () => {
  const [ShowSlideOut, setShowSlideOut] = useState<boolean>(false);

  return (
    <>
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <a className="navbar-brand">
              <Image
                src="/assets/img/logo.png"
                width={100}
                height={100}
                alt="logo"
              />
            </a>
            <div className="mobile-menu-right">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
                onClick={() => setShowSlideOut(true)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <SidePopup
              ShowSlideOut={ShowSlideOut}
              setShowSlideOut={setShowSlideOut}
            />

            <div
              className="offcanvas offcanvas-start"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <a className="offcanvas-brand" id="offcanvasNavbarLabel">
                  <Image
                    src="/assets/img/logo.png"
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i className="far fa-xmark"></i>
                </button>
              </div>
              <div className="offcanvas-body gap-xl-4">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Home Care Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Transportation Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Membership Plans
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      About Us
                    </Link>
                  </li>
                </ul>

                <div className="nav-right">
                  <div className="nav-btn">
                    <a href="contact.html" className="theme-btn">
                      Lets Talk<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
