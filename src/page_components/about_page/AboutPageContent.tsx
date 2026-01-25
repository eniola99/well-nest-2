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
      <div className="service-single py-80">
        <div className="container">
          <div className="service-single-wrap">
            <div className="container">
              <h3 className="title-about-story">Our Story</h3>
              <div className="align-items-center">
                <p
                  className="text-secondary pb-100"
                  style={{ fontSize: "16px" }}
                >
                  I’ve seen firsthand how the complexities of the healthcare
                  system—long waitlists, language barriers, and impersonal
                  services—can leave families feeling invisible. After years of
                  working in Social Services, and now navigating the journey of
                  aging parents within my own family, I realized that
                  &#39;home&#39; is more than just a place; it is a connection
                  to our roots and traditions. I founded WellNest to be a
                  bridge. Having called Ontario home for nearly a decade, I am
                  committed to ensuring that our neighbors in Hamilton,
                  Haldimand, and Niagara have access to care that doesn&#39;t
                  just manage a schedule—but honors a life story.
                </p>
              </div>
            </div>
            <div className="service-area2">
              <div className="site-heading text-center">
                <h2 className="site-title">The WellNest Difference</h2>
              </div>
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div
                    className="service-item wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="service-img">
                      <Image
                        src="/assets/img/honecare.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="service-info">
                      <div className="service-content">
                        <h4 className="service-title">
                          <a href="service-single.html">
                            Relationship-Based Care
                          </a>
                        </h4>
                        <p className="service-text">
                          We don’t just send a provider, we introduce a
                          companion. Our caregivers are trained to understand
                          the cultural nuances and traditions that make your
                          house a home, building trust that feels like an
                          extension of your family.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="service-item wow fadeInUp"
                    data-wow-delay=".50s"
                  >
                    <div className="service-img">
                      <Image
                        src="/assets/img/wellnest-comp.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="service-info">
                      <div className="service-content">
                        <h4 className="service-title">
                          <a href="service-single.html">
                            Seamless Coordination with WellWheels
                          </a>
                        </h4>
                        <p className="service-text">
                          We’ve integrated transport and care into one holistic
                          model. By reducing the stress of coordinating multiple
                          providers, families benefit from a single, reliable
                          point of contact for both mobility and daily support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="service-item wow fadeInUp"
                    data-wow-delay=".75s"
                  >
                    <div className="service-img">
                      <Image
                        src="/assets/img/homecare-image.jpg"
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="service-info">
                      <div className="service-content">
                        <h4 className="service-title">
                          <a href="service-single.html">
                            A Personal, Dignified Connection
                          </a>
                        </h4>
                        <p className="service-text">
                          We prioritize language- matching and inclusive values.
                          By pairing clients with caregivers who respect their
                          cultural preferences, we ensure care remains
                          reassuring and deeply personal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-4 col-lg-4">
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
                              <i className="fa fa-angle-double-right"></i>
                              {service.name}
                             
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
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
