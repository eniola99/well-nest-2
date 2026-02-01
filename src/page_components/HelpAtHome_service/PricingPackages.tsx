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
          <h4>{subTitle}</h4>
        </div>
        <div className="row g-4 g-lg-5">
          {packages[0].text.map((plan, index) => {
            const benefits = packages[0].benefits[0] as BenefitMap;
            const planKey = packages[0].tooltip[index].toLowerCase();
            const planBenefits = benefits[planKey];

            return (
              <div className="col-md-6 col-lg-4" key={index}>
                <>
                  <div
                    className="pricing-item active wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="pricing-amount">
                      <p className="mb-3">
                        <strong>{plan}</strong>
                      </p>
                      {actionText && (
                        <span>
                          {actionText.map((action, i) => {
                            return (
                              <span key={i}>
                                {action[planKey as keyof typeof action]}
                              </span>
                            );
                          })}
                        </span>
                      )}
                    </div>
                    <div className="pricing-feature">
                      <ul
                        style={{
                          listStyle: "none",
                        }}
                      >
                        {planBenefits.map((benefit, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle"></i>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
