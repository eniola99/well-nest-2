import Link from "next/link";
import React from "react";

export const Payment = () => {
  return (
    <>
      <div className="pricing-area bg pt-80 pb-120">
        <div className="container pb-30">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">
                  <i className="fa fa-heart-circle-plus"></i> Pricing Plan
                </span>
                <h2 className="site-title">
                  Lets Check Our Pricing <span>Plan For You</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4 g-lg-5">
            <div className="col-md-6 col-lg-4">
              <div className="pricing-item wow fadeInUp" data-wow-delay=".25s">
                <div className="pricing-header">
                  <h5>Basic</h5>
                </div>
                <div className="pricing-amount">
                  <strong>$359</strong>
                  <span className="pricing-amount-type">/Monthly</span>
                </div>
                <div className="pricing-btn">
                  <Link href="#" className="theme-btn">
                    Purchase Now <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="pricing-feature">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i>Best Quality Care
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Unlimited
                      Transportation
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Emergency Call
                      System
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Meals Facilities
                    </li>
                    <li>
                      <i className="fas fa-xmark-circle not-include"></i>Laundry
                      Servicing
                    </li>
                    <li>
                      <i className="fas fa-xmark-circle not-include"></i>24/7
                      Live Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="pricing-item active wow fadeInUp"
                data-wow-delay=".50s"
              >
                <div className="pricing-header">
                  <h5>Standard</h5>
                </div>
                <div className="pricing-amount">
                  <strong>$559</strong>
                  <span className="pricing-amount-type">/Monthly</span>
                </div>
                <div className="pricing-btn">
                  <Link href="#" className="theme-btn">
                    Purchase Now <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="pricing-feature">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i>Best Quality Care
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Unlimited
                      Transportation
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Emergency Call
                      System
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Meals Facilities
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Laundry Servicing
                    </li>
                    <li>
                      <i className="fas fa-xmark-circle not-include"></i>24/7
                      Live Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pricing-item wow fadeInUp" data-wow-delay=".75s">
                <div className="pricing-header">
                  <h5>Premium</h5>
                </div>
                <div className="pricing-amount">
                  <strong>$959</strong>
                  <span className="pricing-amount-type">/Monthly</span>
                </div>
                <div className="pricing-btn">
                  <Link href="#" className="theme-btn">
                    Purchase Now <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="pricing-feature">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i>Best Quality Care
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Unlimited
                      Transportation
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Emergency Call
                      System
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Meals Facilities
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Laundry Servicing
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>24/7 Live Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
