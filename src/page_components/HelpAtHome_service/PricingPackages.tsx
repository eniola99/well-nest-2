import React from "react";
import Link from "next/link";

interface PricingPackagesProps {
  title: string;
  subTitle: string;
  actionText: string;
  packages: {
    text: string[];
    tooltip: string[];
    benefits: {
      companion?: string[];
      essential?: string[];
      comprehensive?: string[];
      basic?: string[];
      independence?: string[];
    }[];
  }[];
}
interface BenefitMap {
  [key: string]: string[];
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
        <div className="d-flex justify-content-center align-items-center flex-column mb-100">
          <h2 className="">{title}</h2>
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
                    <div className="pricing-header">
                      <h5>{packages[0].tooltip[index]}</h5>
                    </div>
                    <div className="pricing-amount">
                      <strong>{plan}</strong>
                    </div>
                    <div className="pricing-btn">
                      <Link href="#" className="theme-btn">
                        {actionText} <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="pricing-feature">
                      <ul>
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
