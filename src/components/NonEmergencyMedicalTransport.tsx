import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { NavSection, Footer } from "./common";
import { HelpAtHomeHero } from "../page_components/HelpAtHome_service";
import { wellWheelServices, wellWheelServicesList } from "../utils/utils";

export const NonEmergencyMedicalTransport = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <NavSection />
      <HelpAtHomeHero title="Non Emergency Medical Transport" />
      <div className="event-single py-120">
        <div className="container">
          <div className="event-single-wrap">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="event-details">
                  <div className="my-4">
                    <h3 className="mb-2">
                      Non-Emergency Medical Transportation
                    </h3>
                    <p className="mb-3">
                      We understand the importance of timely and stress-free
                      transportation to healthcare appointments
                    </p>
                    <p>
                      We provide door-to-door and door-through-door
                      transportation for individuals who require reliable,
                      assisted travel, ensuring clients are never left to manage
                      alone.
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
                    <h3 className="mb-3">
                      Our medical transport services include:
                    </h3>
                    {wellWheelServicesList.map((item) => (
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
