import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { NavSection, Footer } from "./common";
import { HelpAtHomeHero } from "../page_components/HelpAtHome_service";

import { respiteGroupTransportList, wellWheelServices } from "../utils/utils";

export const RespiteGroupTransport = () => {
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
                    <h3 className="mb-2">Respite or Group Transport</h3>
                    <p className="mb-3">
                      Perfect for families, care homes, or community
                      organizations — our group transport services provide safe,
                      coordinated travel for multiple passengers. Whether for
                      adult day programs, respite care, or group activities, our
                      <b> Respite or Group Transport</b> service provides safe,
                      accessible travel so everyone arrives together and on
                      time.
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
                    <h3 className="mb-3">Why Choose WellWheels?</h3>
                    {respiteGroupTransportList.map((item) => (
                      <>
                        <div className="mb-20">
                          <ul className="wellNest_home_care_li">
                            <li className="">{item}</li>
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
