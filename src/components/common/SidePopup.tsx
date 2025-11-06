import React from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

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
            <ul className="navbar-nav justify-content-end grow">
              <li className="nav-item">
                {router.pathname !== "/" && (
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link href="/home_care_service" className="nav-link">
                  WellNest Home Care
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/well-wheels">
                  WellWheels
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
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
