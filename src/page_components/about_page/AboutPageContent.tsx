import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const AboutPageContent = () => {
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
                  <p className="pb-3">
                    I’ve seen firsthand how navigating Ontario’s healthcare
                    system can feel overwhelming and impersonal. Long waitlists,
                    language barriers, and fragmented services often leave
                    families feeling unseen—caught between appointments,
                    providers, and processes that don’t always speak to who they
                    are or what truly matters to them. Through years of working
                    in Social Services, I witnessed how these gaps can deeply
                    affect seniors and their families, particularly when care
                    lacks cultural understanding or continuity.
                  </p>
                  <p className="pb-3">
                    That perspective became personal as I began supporting my
                    own aging parents. I came to understand that home is more
                    than a physical space. Home is familiarity, language, faith,
                    food, routines, and the traditions that ground us. When care
                    overlooks these elements, even the best services can feel
                    distant and disruptive.
                  </p>
                  <p className="pb-3">
                    WellNest was founded to be a bridge—between systems and
                    people, between care plans and lived experiences. We provide
                    support that goes beyond task lists, taking time to
                    understand each individual’s story, values, and preferences.
                    Our approach is relationship-driven and culturally attuned,
                    ensuring care feels coordinated, respectful, and rooted in
                    dignity rather than fragmented or transactional.
                  </p>
                  <p className="pb-3">
                    As a new and growing organization, WellNest is guided by
                    professional standards, ongoing caregiver training, and a
                    strong commitment to ethical, person-centered care. We work
                    collaboratively with families, caregivers, and community
                    partners so support feels consistent and aligned—never
                    rushed or impersonal.
                  </p>
                  <p>
                    Having proudly called Ontario home for nearly a decade, I am
                    deeply committed to serving our local communities. WellNest
                    supports families across Hamilton, Haldimand, and Niagara
                    with care that doesn’t simply manage schedules, but honors
                    life stories, preserves independence, and helps people age
                    in ways that feel familiar, connected, and whole.
                  </p>
                </p>
              </div>
            </div>
            <div className="service-area2">
              <div className="site-heading text-center">
                <h2 className="site-title">The WellNest Difference</h2>
              </div>
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="service-item" style={{ minHeight: "500px" }}>
                    <div className="service-img">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/pillar_1_nb19sj.jpg`}
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
                  <div className="service-item" style={{ minHeight: "500px" }}>
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
                  <div className="service-item" style={{ minHeight: "500px" }}>
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
              </div>
            </div>
            <div className="pt-100">
              <h4 className="text-center site-title">Community Impact</h4>
              <h3 className="mt-5">Strengthening Our Region</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p className=" pt-3">
                    <strong>
                      A Partner to the Niagara, Hamilton, and Haldimand
                      Healthcare System.
                    </strong>{" "}
                    <br /> WellNest is a local business invested in the
                    resilience of our community. We go beyond home visits to
                    support the regional health network by:
                  </p>
                  <div className="mt-5">
                    <ul className="" style={{ listStyle: "none" }}>
                      <li>
                        <strong>Relieving Hospital Pressure:</strong> Our
                        proactive care helps seniors stay safe at home, reducing
                        readmissions at local hospitals.
                      </li>
                      <li className="mt-3">
                        <strong>Bridging System Gaps:</strong> We act as a
                        critical link for families who find traditional systems
                        difficult to navigate.
                      </li>
                      <li className="mt-3">
                        <strong>Supporting the Local Economy:</strong> We are
                        proud to create specialized healthcare jobs for
                        passionate caregivers across our region.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p className="text-secondary text-center">
                    <div className="">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/service_area_map_akbxzt.png`}
                        width={550}
                        height={550}
                        alt="map"
                      />
                    </div>
                  </p>
                </div>
              </div>
              <div className="cta-area pt-80">
                <div className="container">
                  <div className="cta-wrap rounded-5 w-100">
                    <div className="col-lg-7 mx-auto">
                      <div className="cta-content">
                        <h1>Experience Care That Feels Like Family</h1>
                        <p>
                          Serving Hamilton, Stoney Creek, Caledonia, Cayuga, St.
                          Catharines, and across the Niagara Peninsula.
                        </p>
                        <Link href="/contact" className="theme-btn">
                          Book a Free Consultation
                        </Link>
                      </div>
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
