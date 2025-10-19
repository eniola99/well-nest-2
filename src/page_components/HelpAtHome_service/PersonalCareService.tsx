import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { PersonalCareServiceList } from "@/src/utils/utils";
import { SubSection } from "@/src/components/common";

export const PersonalCareService = () => {
  const router = useRouter();
  const { service } = router.query;

  const services = [
    { name: "WellNest Home Care", slug: "" },
    { name: "Personal Care Services", slug: "personal-care-services" },
    { name: "Seasonal Home Support", slug: "seasonal-home-support" },
  ];

  return (
    <>
      <div className="service-single py-120">
        <div className="container">
          <div className="service-single-wrap">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="service-sidebar">
                  <div className="widget">
                    <h4 className="title">WellNest Home Care</h4>
                    <div className="category">
                      {services
                        .filter((item) => item.slug !== service)
                        .map((service) => (
                          <>
                            <Link href={`/home_care_service/${service.slug}`}>
                              <i className="fa fa-angle-double-right"></i>
                              {service.name}
                            </Link>
                          </>
                        ))}
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="title">Ask A Question</h4>
                    <div className="service-downloa">
                      <span className="">
                        Have a question about Personal Home Care? We are Here to
                        help.
                      </span>
                      <h3 className="mb-3 mt-3">
                        Call Us:
                        <br />
                        <a href="tel:+905470-4000">(905) 470-4000</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="service-details">
                  <div className="content">
                    <div className="">
                      <h3 className="mb-20">Personal Care Services</h3>
                      <p className="mb-20">
                        Our personal care services are designed to support
                        everyday well-being — delivered by compassionate
                        caregivers who treat clients like family.
                        <br />
                        We take time to understand each person’s preferences,
                        routines, and cultural values to make care feel natural
                        and respectful.
                      </p>
                      <div className="mb-30">
                        <Image
                          src="/assets/img/service/single.jpg"
                          height={600}
                          width={900}
                          alt="thumb"
                        />
                      </div>
                      <div className="mb-3">
                        <h3 className="mb-3">
                          Our personal care services include:
                        </h3>
                        {PersonalCareServiceList.map((item) => (
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
                      {/* <div className="mt-4">
                      <h3 className="mb-3">Remarkable Moments</h3>
                      <p>
                        Good things are happening everyday at ParaMed. Whether
                        it’s a brief encounter or a life changing event, we do
                        everything we can to bring a remarkable moment into the
                        homes of Canadians across the country daily.
                      </p>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <HelpAtHomeForm /> */}
            </div>
          </div>
        </div>
        <SubSection
          text="Need help deciding what’s right for you?"
          subText="Our team will guide you through available services and membership
          plans, ensuring you get the right level of support at the right time."
          actionText="Start My Care Plan"
        />
      </div>
    </>
  );
};
