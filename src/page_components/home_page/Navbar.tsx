import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { SidePopup } from "@/src/components/common";

export const Navbar = () => {
  const router = useRouter();
  const [ShowSlideOut, setShowSlideOut] = useState<boolean>(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "WellNest Home Care", path: "/home_care_service" },
    { name: "WellWheels", path: "/well-wheels" },
    { name: "Careers", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];

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
                <ul className="navbar-nav justify-content-center grow">
                  {routes.map((route) => (
                    <>
                      <li className="nav-item" key={route.path}>
                        <Link
                          className={`nav-link ${router.pathname === route.path ? "active" : ""}`}
                          href={route.path}
                        >
                          {route.name}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
