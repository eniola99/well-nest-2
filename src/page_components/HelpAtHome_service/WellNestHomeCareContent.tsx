import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { PricingPackages } from "./PricingPackages";

import { homeCarePackages } from "@/src/utils/utils";

export const WellNestHomeCareContent = () => {
  const router = useRouter();
  const { service } = router.query;

  const services = [
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
                    <h4 className="title">Home Care Services</h4>
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
                    <h3 className="mb-20">Welcome to WellNest Home Care</h3>
                    <p className="mb-20">
                      Home is more than a place — it’s where comfort, dignity,
                      and independence live.
                    </p>
                    <p className="mb-20">
                      At <b>WellNest Home Care Inc</b>, we believe that everyone
                      deserves to feel safe, comfortable, and cared for — right
                      in the place they call home. Whether you or a loved one
                      needs daily support, companionship, or short-term
                      assistance, our trusted caregivers are here to help you
                      live with dignity, independence, and peace of mind.
                    </p>
                    <div className="mb-30">
                      <Image
                        src="/assets/img/service/single.jpg"
                        height={600}
                        width={900}
                        alt="thumb"
                      />
                    </div>
                    <p className="mb-20">
                      Whether you need daily care or occasional help, our team
                      provides dependable, person- centered support that feels
                      like family.
                    </p>
                  </div>
                </div>
                <div className="">
                  <h3 className="mb-20">Customized Care Plans</h3>
                  <p className="mb-20">
                    Every client’s needs are different — that’s why we start
                    with a <b>free consultation</b> to learn about your goals,
                    health needs, and family preferences. Together, we’ll design
                    a personalized plan that fits your lifestyle and budget,
                    whether for a few hours a week or around-the-clock care.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <PricingPackages
            packages={homeCarePackages}
            title="WellNest Home Care"
            subTitle="Care Packages/Membership"
            actionText="Book Now"
          />
        </div>
      </div>
    </>
  );
};
