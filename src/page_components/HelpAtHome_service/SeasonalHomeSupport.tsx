import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { SeasonalHomeSupportList } from "@/src/utils/utils";
import { SubSection } from "@/src/components/common";

export const SeasonalHomeSupport = () => {
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
                      <h3 className="mb-20">Seasonal Home Support</h3>
                      <p className="mb-20">
                        At WellNest, care doesn’t end inside the home — we help
                        clients enjoy every season safely and stress-free.
                        <br />
                        Our Seasonal <b>Home Support Services </b>ensure your
                        home remains comfortable, accessible, and
                        well-maintained year-round. and respectful.
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
                        <h3 className="mb-3">We offer:</h3>
                        {SeasonalHomeSupportList.map((item) => (
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
                      <p className="mt-3">
                        These services can be booked individually or bundled
                        with personal care plans to create a seamless,
                        worry-free support package.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <HelpAtHomeForm /> */}
            </div>
          </div>
          <SubSection
            text="Ready to get started?"
            subText="Call us today or fill out our contact form to book a free in-home consultation and discover how
WellNest can help you or your loved one live well — at home."
            actionText="Start My Care Plan"
          />
        </div>
      </div>
    </>
  );
};
