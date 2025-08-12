import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useWindowSize } from "@/src/hooks";

interface SidePopupProps {
  ShowSlideOut: boolean;
  setShowSlideOut: (value: boolean) => void;
}

export const SidePopup = ({
  ShowSlideOut,
  setShowSlideOut,
}: SidePopupProps) => {
  const { width } = useWindowSize();

  const services = [
    { name: "Help at Home", slug: "help-at-home" },
    { name: "Nurse at Home", slug: "nurse-at-home" },
    { name: "Live-in Care", slug: "live-in-care" },
  ];

  return (
    <>
      <div
        className={
          ShowSlideOut
            ? "offcanvas offcanvas-start show"
            : "offcanvas offcanvas-start"
        }
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <Link href="/" className="offcanvas-brand" id="offcanvasNavbarLabel">
            <Image
              src="/assets/img/wellnest-logo-with-name.png"
              height={500}
              width={500}
              alt="logo"
            />
          </Link>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setShowSlideOut(false)}
          >
            <i className="fa fa-xmark"></i>
          </button>
        </div>
        {ShowSlideOut && width <= 768 && (
          <div className="offcanvas-body gap-xl-4">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Home Care Services
                </Link>
                <ul className="dropdown-menu fade-down">
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
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/transportation">
                  Transportation Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/subscription">
                  Membership Plans
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
