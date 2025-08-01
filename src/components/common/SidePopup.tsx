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
              src="/assets/img/logo.png"
              height={100}
              width={100}
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
          </div>
        )}
      </div>
    </>
  );
};
