import React from "react";
import Image from "next/image";
import Link from "next/link";
import { wellWheelServices } from "@/src/utils/utils";
import { PricingPackages } from "../HelpAtHome_service";

import { wellWheelPackages } from "@/src/utils/utils";
import { BookRide } from "@/src/components";
import { Table } from "reactstrap";

export const WellWheelsContent = () => {
  return (
    <>
      <div className="event-single py-120">
        <div className="container">
          <div className="event-single-wrap">
            <div className="">
              <h3 className="title-about-story-wellwheels">
                The WellWheels Difference: &quot;Hand-to-Hand&quot; Support
              </h3>
              <div className="align-items-center">
                <p
                  className="text-secondary p-3"
                  style={{ fontStyle: "italic" }}
                >
                  Standard transit often leaves seniors at the curb. We believe
                  mobility should be dignified and stress-free.
                  <ul className="mx-4 mt-2" style={{ listStyle: "none" }}>
                    <li>
                      <i className="fas fa-check-circle me-2"></i>
                      Trained with Empathy: Our drivers are trained in the same
                      cultural respect and empathy as our caregivers, ensuring
                      you never feel rushed.
                    </li>
                    <li>
                      <i className="fas fa-check-circle me-2"></i>
                      Cultural Nuance: We understand the &quot;language of your
                      home&quot; and bring that respect into every trip.
                    </li>
                    <li>
                      <i className="fas fa-check-circle me-2"></i>
                      Safe &amp; Reliable: We provide a seamless transition,
                      ensuring you are supported from your front door to your
                      final destination.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="py-80">
              <h3 className="text-center">
                Our Specialized Transportation Services
              </h3>
              <p className="text-center mt-4">
                We provide non-emergency medical and social transportation
                across the Niagara, Hamilton, and Haldimand regions.
              </p>
              <div className="mt-5">
                <Table bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th className="p-3">Service Type</th>
                      <th className="p-3">What’s Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3">Non-Emergency Medical Transport</td>
                      <td className="p-3">
                        Safe travel to doctor appointments, dialysis, or therapy
                        sessions.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Health and Wellness Support</td>
                      <td className="p-3">
                        Transportation to fitness centers, social clubs, or
                        wellness programs.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Respite &amp; Group Transport</td>
                      <td className="p-3">
                        Coordinated travel for small groups or families needing
                        specialized assistance.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Coordinated Care Sync</td>
                      <td className="p-3">
                        <strong>Our Signature Feature: </strong>
                        If you have a WellNest caregiver, we sync with
                        WellWheels for a stress-free day.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="contact-form-wrap">
                  <h3 className="">
                    Integrated Care: The WellNest &amp; WellWheels Synergy
                  </h3>
                  <p className=" mt-4">
                    We’ve integrated transport and care into one holistic model.
                    By reducing the stress of coordinating multiple providers,
                    families benefit from a single, reliable point of contact
                    for both mobility and daily support.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-form-wrap">
                  <h3 className="">Where We Drive</h3>
                  <p className=" mt-2 mb-3">
                    We serve our neighbors across the region, ensuring no one is
                    left isolated due to lack of specialized transport.
                  </p>
                  <Table bordered hover responsive size="sm">
                    <thead>
                      <tr>
                        <th className="p-3">Region</th>
                        <th className="p-3">Communities Served</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">Hamilton</td>
                        <td className="p-3">
                          Ancaster, Dundas, Stoney Creek, Waterdown, Glanbrook
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Haldimand</td>
                        <td className="p-3">
                          Caledonia, Cayuga, Dunnville, Hagersville, Jarvis
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Niagara</td>
                        <td className="p-3">
                          Grimsby, Smithville, St. Catharines, Welland, Niagara
                          Falls
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="cta-area pt-80">
              <div className="container">
                <div className="cta-wrap rounded-5 w-100">
                  <div className="col-lg-7 mx-auto">
                    <div className="cta-content">
                      <h1>Schedule Your Transport</h1>
                      <p>
                        Navigating health appointments can be complex, but you
                        don&#39;t have to do it alone.
                      </p>
                      <Link href="/contact" className="theme-btn">
                        Request a WellWheels Consultation
                        {/* <i className="fas fa-arrow-right"></i> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row g-4">
              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="widget">
                    <div className="header">
                      <h4 className="title">WellWheels Service</h4>
                      <div className="category">
                        {wellWheelServices.map((service) => (
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
                    <h3 className="mb-2">Welcome to WellWheels</h3>
                    <p>
                      <b>
                        At WellWheels, we believe independence begins with
                        access{" "}
                      </b>
                      and everyone deserves access to safe, reliable, and
                      compassionate transportation— especially when mobility,
                      health, or age make travel more challenging.
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
                  <div className="mb-4">
                    <p>
                      We provide{" "}
                      <b>
                        non-emergency medical and wellness transport services
                      </b>{" "}
                      that help individuals stay independent, active, and
                      connected to their communities. Whether you’re heading to
                      a medical appointment, visiting family, or running
                      errands, <b>WellWheels</b> ensures that every trip is
                      backed by professionalism, empathy, and a commitment to
                      client safety.
                    </p>
                  </div>
                  <div className="my-4">
                    <h3 className="mb-20 mt-5">Need Help Choosing a Plan?</h3>
                    <p>
                      If you’re unsure which service or membership plan fits
                      your needs, we’re here to help. Our team can create a{" "}
                      <b>customized package</b> that combines rides, deliveries,
                      and personal support — all designed around your schedule
                      and goals.
                    </p>
                    <p className="mb-3 mt-3">
                      Call or message us to book your next trip.
                    </p>
                    <p className="mb-3">
                      Let WellWheels take you where you need to go — safely,
                      comfortably, and with care.
                    </p>
                    <p>
                      <i>WellWheels — Because every journey deserves dignity</i>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <PricingPackages
            packages={wellWheelPackages}
            title="WellWheels"
            subTitle="Care Packages/Membership"
            // actionText="Book Now"
          /> */}
        </div>
      </div>
    </>
  );
};
