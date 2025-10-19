import React from "react";
import Link from "next/link";

interface SubSectionProps {
  text: string;
  subText: string;
  actionText: string;
}
export const SubSection = ({ text, subText, actionText }: SubSectionProps) => {
  return (
    <>
      <div className="mx-2 section-link">
        <div className="d-flex flex-column mt-2">
          <h3 className="mb-2">{text}</h3>
          <p className="mb-20">
            <i>{subText}</i>
          </p>
        </div>
        <div className="nav-right-sub-section">
          <div className="nav-btn">
            <Link href="/contact" className="theme-btn">
              {actionText}
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
