import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { SidePopup } from "@/src/components/common";

export const Navbar = () => {
  const router = useRouter();
  const [ShowSlideOut, setShowSlideOut] = useState<boolean>(false);

  return (
    <>
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <a className="navbar-brand">
              <Image
                src="/assets/img/wellnest-logo-with-name.png"
                width={500}
                height={500}
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
              <div className="offcanvas-body gap-xl-4">
                <ul className="navbar-nav justify-content-center flex-grow-1">
                  {router.pathname !== "/" && (
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Home
                      </Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <Link className="nav-link" href="/home_care_service">
                      WellNest Home Care
                    </Link>
                  </li>
                  {/* <ul className="dropdown-menu fade-down">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            className="dropdown-item"
                            href={`/home_care_service/${service.slug}`}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul> */}
                  <li className="nav-item">
                    <Link className="nav-link" href="/well-wheels">
                      WellWheels
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" href="/subscription">
                      Subscription Plans
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      About Us
                    </Link>
                  </li>
                </ul>

                <div className="nav-right">
                  <div className="nav-btn">
                    <Link href="/contact" className="theme-btn">
                      {`Let's Talk`}
                      <i className="fas fa-arrow-right"></i>
                    </Link>
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
