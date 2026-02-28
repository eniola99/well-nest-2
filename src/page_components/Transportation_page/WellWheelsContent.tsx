import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Table } from "reactstrap";

export const WellWheelsContent = () => {
  return (
    <>
      <div className="event-single py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <h3 className="title-about-story-wellwheels">
                  The WellWheels Difference: &quot;Hand-to-Hand&quot; Support
                </h3>
                <div className="align-items-center">
                  <p
                    className="text-secondary p-3"
                    style={{ fontStyle: "italic" }}
                  >
                    Standard transit often leaves seniors at the curb. We
                    believe mobility should be dignified and stress-free.
                    <ul className="mx-4 mt-2" style={{ listStyle: "none" }}>
                      <li>
                        <i className="fas fa-check-circle me-2"></i>
                        Trained with Empathy: Our drivers are trained in the
                        same cultural respect and empathy as our caregivers,
                        ensuring you never feel rushed.
                      </li>
                      <li>
                        <i className="fas fa-check-circle me-2"></i>
                        Cultural Nuance: We understand the &quot;language of
                        your home&quot; and bring that respect into every trip.
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
            </div>
            {/* <div className="col-lg-2"></div> */}
            <div className="col-lg-6">
              <div className="">
                <Image
                  className="wellwheels-image"
                  src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/wellwheels_heropage_efqdyu.jpg`}
                  width={450}
                  height={280}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="py-80">
            <h3 className="text-center">
              Our Specialized Transportation Services
            </h3>
            <p className="text-center mt-4">
              We provide non-emergency medical and social transportation across
              the Niagara, Hamilton, and Haldimand regions.
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
                      If you have a WellNest caregiver, we sync with WellWheels
                      for a stress-free day.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <h3 className="">
                  Transportation packages can be scheduled weekly, monthly, or
                  as needed
                </h3>
                <p className=" mt-4">Our bundled packages allow you to</p>
                <div className="pt-3">
                  <Table bordered hover responsive size="sm">
                    <tbody>
                      <tr>
                        <td className="p-3">
                          Coordinate caregiver visits with medical appointments
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Ensure someone is present before and after transport
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Reduce missed appointments</td>
                      </tr>
                      <tr>
                        <td className="p-3">Maintain routine and stability</td>
                      </tr>
                      <tr>
                        <td className="p-3">Simplify billing and scheduling</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap" style={{ minHeight: "550px" }}>
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
          <div className="pt-5">
            <h4 className="text-center">Example of Bundled Scenarios </h4>
            <div className="row g-2 pt-5">
              <div className="col-lg-4">
                <div className="service-item-bud">
                  <h4 className="">
                    Recovery Support <br />
                    Package
                  </h4>
                  <div className="pt-3">
                    <span className="">
                      Home care during recovery + scheduled follow-up transport.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-item-bud">
                  <h4 className="">
                    Aging in Place <br />
                    Package
                  </h4>
                  <div className="pt-3">
                    <span>
                      Weekly personal care + recurring medical transport.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-item-bud">
                  <h4 className="">
                    Aging in Place <br />
                    Package
                  </h4>
                  <div className="pt-3">
                    <span>
                      Weekly personal care + recurring medical transport.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-btn pt-3">
            <Link href="/contact" className="theme-btn2">
              Book a free Consultation
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
