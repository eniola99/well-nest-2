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
          <a
            href="index.html"
            className="offcanvas-brand"
            id="offcanvasNavbarLabel"
          >
            <Image
              src="/assets/img/wellnest-logo-with-name.png"
              height={500}
              width={500}
              alt="logo"
            />
          </a>
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
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/home_care_service/help_home"
                    >
                      Help at Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/home_care_service/nurse_home"
                    >
                      Nurse at Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/home_care_service/live_in"
                    >
                      Live-in Care
                    </Link>
                  </li>
                </ul>
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
          </div>
        )}
      </div>
    </>
  );
};
