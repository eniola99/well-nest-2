import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { History } from "./History";
import { CompanyOverview } from "./CompanyOverview";
import { MissionAbout } from "./MissionAbout";

export const AboutPageContent = () => {
  const router = useRouter();
  const { service } = router.query;

  const [activeSection, setActiveSection] = useState("company-overview");

  const categories = [
    { name: "Company Overview", slug: "company-overview" },
    { name: "Vision, Mission and Values", slug: "mission-about" },
    { name: "History", slug: "history" },
  ];

  const setToSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  let PageComponent: React.ElementType;

  switch (true) {
    case activeSection === "company-overview":
      PageComponent = CompanyOverview;
      break;
    case activeSection === "mission-about":
      PageComponent = MissionAbout;
      break;
    case activeSection === "history":
      PageComponent = History;
      break;
    default:
      PageComponent = CompanyOverview;
      break;
  }

  return (
    <>
      <div className="service-single py-120">
        <div className="container">
          <div className="service-single-wrap">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="service-sidebar">
                  <div className="widget">
                    <h4 className="title">About Us</h4>
                    <div className="category">
                      {categories
                        .filter((item) => item.slug !== service)
                        .map((service) => (
                          <>
                            <div
                              className="scroll_section"
                              onClick={() => setToSection(service.slug)}
                            >
                              {/* <Link href={`about/${service.slug}`}> */}
                              <i className="fa fa-angle-double-right"></i>
                              {service.name}
                              {/* </Link> */}
                            </div>
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
                  <div className="mb-30">
                    <Image
                      src="/assets/img/about/about-us.png"
                      height={600}
                      width={900}
                      alt="thumb"
                    />
                  </div>
                  <div className="content">
                    <PageComponent activeSection={activeSection} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
