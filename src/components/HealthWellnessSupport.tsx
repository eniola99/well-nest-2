import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { NavSection, Footer } from "./common";
import { HelpAtHomeHero } from "../page_components/HelpAtHome_service";
import { PricingPackages } from "../page_components/HelpAtHome_service";
import { BookRide } from "./BookRide";

import {
  healthWellnessSupportList,
  wellWheelServices,
  wellWheelPackages,
} from "../utils/utils";

export const HealthWellnessSupport = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Health And Wellness Support" />
      <div className="event-single py-120">
        <div className="container">
          <div className="event-single-wrap">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="widget">
                    <div className="header">
                      <h4 className="title">WellWheels Service</h4>
                      <div className="category">
                        {wellWheelServices
                          .filter((item) => item.slug !== slug)
                          .map((service) => (
                            <>
                              <Link href={`/well-wheels/${service.slug}`}>
                                <i className="fa fa-angle-double-right"></i>
                                {service.name}
                              </Link>
                            </>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="title">Book a Ride</h4>
                    <div className="event-single-author">
                      <BookRide />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="event-details">
                  <div className="my-4">
                    <h3 className="mb-2">Health and Wellness Support</h3>
                    <p className="mb-3">
                      Your care doesn’t stop at the doctor’s office — and
                      neither do we.
                    </p>
                    <p>
                      We go beyond transportation, Our{" "}
                      <b>Health and Wellness Support</b>, make it easier to
                      manage our clients’ health logistics (medical and
                      wellness) from home with convenience and care.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <Image
                        src="/assets/img/event/01.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <Image
                        src="/assets/img/event/02.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-3 mt-3">
                    <h3 className="mb-3">We Offer:</h3>
                    {healthWellnessSupportList.map((item) => (
                      <>
                        <div className="mb-20">
                          <ul className="wellNest_home_care_li">
                            <li className="">
                              <b>{item.key}:</b> {item.Value}
                            </li>
                          </ul>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PricingPackages
            packages={wellWheelPackages}
            title="WellWheels"
            subTitle="Care Packages/Membership"
            actionText="Book Now"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
