import React from "react";
import Link from "next/link";

export const About = () => {
  return (
    <>
      <div className="container mt-100">
        <div className="container g-4 row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3 className="mb-3">A Circle of Empthy</h3>
            <p className="" style={{ fontSize: "18px" }}>
              We’ve been in the rooms where support was needed but not found. We
              build a circle of support that understands your values and speaks
              the &apos;language of your home&apos;—through empathy, respect,
              and reliability
            </p>
            <Link href="/about" className="theme-btn mt-4">
              learn more about our story
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12">
            <div className="vertical-divider"></div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="d-flex flex-column">
              <h3 className="mb-4 text-center">Question ?</h3>
              <p
                className="text-center text-white"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "var(--theme-color)",
                }}
              >
                <i className="fa-solid fa-phone-volume mx-2"></i>
                Number
              </p>
              <p
                className="text-center text-white mt-3"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "var(--theme-color)",
                }}
              >
                <i className="fa-solid fa-envelope mx-2"></i>
                <strong>
                  <Link
                    href="mailto:support@wellnestgroup.org"
                    style={{ color: "white" }}
                  >
                    support@wellnestgroup.org
                  </Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="horizontal-divider"></div>
      </div>
    </>
  );
};
