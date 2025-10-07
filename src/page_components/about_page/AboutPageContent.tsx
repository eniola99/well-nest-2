import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const AboutPageContent = () => {
  const router = useRouter();
  const { service } = router.query;

  const categories = [
    { name: "Company Overview", slug: "company-overview-about" },
    { name: "Vision, Mission and Values", slug: "mission-about" },
    { name: "History", slug: "why-we-care" },
  ];

  const helpWith = [
    "C – Compassion: We lead with kindness and empathy.",
    "A – Accountability: We act with honesty and integrity.",
    "R – Respect: We honor dignity, diversity, and independence.",
    "E – Excellence: We strive for quality and continuous improvement.",
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                              onClick={() => scrollToSection(service.slug)}
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
                    <div className="" id="company-overview-about">
                      <h3 className="mb-20">Company Overview</h3>
                      <p className="mb-20">
                        WellNest Care Group is a trusted provider of
                        community-based services designed to help individuals
                        live with dignity, independence, and connection. Our
                        organization operates through two complementary service
                        arms: <b>WellNest Home Care</b> and <b>WellWheels</b>.
                      </p>
                      <p className="mb-20">
                        At <b>WellNest Home Care</b>, we believe that everyone
                        deserves to feel safe, supported, and cared for in the
                        place they know best — their own home. Our team provides
                        compassionate, personalized care that helps seniors and
                        individuals with unique needs live with dignity and
                        independence, while giving families the peace of mind
                        that their loved ones are in good hands.
                      </p>
                      <p className="mb-20">
                        We also know that wellness is more than care at home —
                        it’s about staying connected and being able to get where
                        you need to go. That’s why we created <b>WellWheels</b>,
                        our accessible transportation service. From medical
                        appointments to community activities, <b>WellWheels</b>{" "}
                        makes sure that getting around is safe, comfortable, and
                        stress-free.
                      </p>
                      <p className="mb-20">
                        Together, <b>WellNest Home Care</b> and{" "}
                        <b>WellWheels</b> form a circle of support that meets
                        both daily living and mobility needs. We don’t just
                        provide services — we build trusted relationships,
                        treating every client and family like part of our own.
                      </p>
                      <p className="mb-20">
                        Our promise is simple:{" "}
                        <i>
                          to make life easier, safer, and more meaningful for
                          those we serve, every single day.
                        </i>
                      </p>
                    </div>
                    <div className=" mt-5" id="mission-about">
                      <h3 className="mb-20">Mission</h3>
                      <p className="mb-20">
                        Providing compassionate, reliable home care that
                        supports clients and their family caregivers, helping
                        them live safely and independently at home.
                      </p>
                    </div>
                    <div className="" id="vision-about">
                      <h3 className="mb-20">Vision</h3>
                      <p className="mb-20">
                        To redefine home care in Ontario by providing trusted,
                        compassionate, and innovative services that empower
                        individuals to live with dignity, independence, and
                        connection in the place they call home.
                      </p>

                      <div className="mb-3">
                        <h3 className="mb-3">Value Statement (CARE)</h3>
                        <div className="row">
                          {helpWith.map((item) => (
                            <>
                              <p className="mb-20">
                                <i className="fa-solid fa-check-double mx-2"></i>
                                <b>{item}</b>
                              </p>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-5" id="why-we-care">
                      <h3 className="mb-20">History</h3>
                      <p className="mb-20">
                        At <b>WellNest Health Group</b>, care is more than a
                        service—it’s a commitment grounded in both purpose and
                        experience.
                      </p>
                      <p className="mb-20">
                        After years of working in the developmental services
                        sector, I’ve had the privilege of supporting individuals
                        with disabilities through many of life’s transitions.
                        One of the most complex—and often overlooked—has been
                        aging. I’ve seen firsthand how long waitlists, language
                        barriers, and a lack of personalized care options can
                        leave people and families feeling stuck, unsupported, or
                        invisible.
                      </p>
                      <p className="mb-20">
                        At the same time, like many, I’m also part of a family
                        that’s beginning to navigate the realities of aging
                        parents. That experience has deepened my belief that
                        people deserve to grow older with grace, comfort, and
                        respect—ideally, in their own homes and on their own
                        terms.
                      </p>

                      <p className="mb-20">That’s why I started WellNest.</p>
                      <p className="mb-20">
                        Our goal isn’t just to provide services—it’s to build a
                        circle of support that feels right. One that understands
                        cultural values, communicates clearly, and steps in with
                        empathy and reliability. Whether it’s a caregiver who
                        speaks your language or a driver who helps you into your
                        seat without rushing, we focus on the human moments that
                        make all the difference.
                      </p>
                      <p className="mb-20">
                        We care because we’ve been in the rooms where support
                        was needed and not available. We’ve sat at the table
                        with families making hard decisions. And we believe that
                        when care is done right, it can be empowering—not
                        overwhelming.
                      </p>
                      <p className="mb-20">
                        WellNest is built on that belief. And we’re proud to
                        serve our community with care that’s not only
                        professional—but deeply personal.
                      </p>
                      {/* <div className="my-4 ">
                        <div className="mb-3">
                          <h3 className="mb-3">We Help You With:</h3>
                          <div className="row">
                            {helpWith.map((item) => (
                              <>
                                <div className="col-md-6 mb-20">
                                  <p className="mb-20">
                                    <i className="fa-solid fa-check-double mx-2"></i>
                                    {item}
                                  </p>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </div> */}
                    </div>
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
