import React from "react";
interface BenefitMap {
  [key: string]: string[];
}
interface PricingPackagesProps {
  title: string;
  subTitle: string;
  actionText?: {
    essential?: string;
    enhanced?: string;
    comprehensive?: string;
  }[];
  packages: {
    text: string[];
    tooltip: string[];
    benefits: {
      essential?: string[];
      enhanced?: string[];
      comprehensive?: string[];
    }[];
    packagesSubText?: {
      essential?: string[];
      enhanced?: string[];
      comprehensive?: string[];
    }[];
  }[];
}

export const PricingPackages = ({
  packages,
  title,
  subTitle,
  actionText,
}: PricingPackagesProps) => {
  return (
    <>
      <div className="home-care-packages">
        <div className="d-flex justify-content-center align-items-center flex-column mb-50">
          <h3 className="">{title}</h3>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="service-area2">
              <div className="service-item-sub">
                <h2 className="text-white">{subTitle}</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-item active">
              <div className="pricing-amount">
                <p className="mb-3">
                  <strong>Fully Customizable Plans</strong>
                </p>
                <span>
                  Every family’s needs are different. Your care package can be
                  customized based on
                </span>
              </div>
              <div className="pricing-feature">
                <ul
                  style={{
                    listStyle: "none",
                  }}
                >
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Level of personal care required
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Frequency of visits
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Transportation needs
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Personal preferences
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Family involvement
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <span>
                  We build the plan with you, not for you. All packages can be
                  adjusted based on hours, frequency, and level of assistance.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-item active">
              <div className="pricing-amount">
                <p className="mb-3">
                  <strong>How It Works</strong>
                </p>
                <div className="mb-3">
                  <h5>Step 1</h5>
                  <span className="">
                    Consultation: We learn about your needs and priorities.
                  </span>
                </div>
                <div className="mb-3">
                  <h5>Step 2</h5>
                  <span className="">
                    Personalized Plan: We recommend a customized care package —
                    home care, transport, or both.
                  </span>
                </div>
                <div className="mb-3">
                  <h5>Step 3</h5>
                  <span className="">
                    Seamless Coordination: Our team manages scheduling and
                    communication.
                  </span>
                </div>
                <div className="mb-3">
                  <h5>Step 4</h5>
                  <span className="">
                    Ongoing Review: Care evolves as needs change.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
