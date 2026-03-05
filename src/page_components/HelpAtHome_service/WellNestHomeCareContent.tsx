import React from "react";
import { List, Table } from "reactstrap";
import Image from "next/image";

import { PricingPackages } from "./PricingPackages";

import { homeCarePackages } from "@/src/utils/utils";
import Link from "next/link";

export const WellNestHomeCareContent = () => {
  return (
    <>
      <div className="service-single py-80">
        <div className="">
          <div className="container">
            <h3 className="text-center mb-5">Our Philosophy</h3>
            <div className="row">
              <div className="col-lg-6">
                <div className="align-items-center">
                  <p className=" pb-40">
                    We’ve been in the rooms where support was needed --- but not
                    found. <br />
                    WellNest Home Care was built to be different. We create a
                    circle of support that <br /> understands your values and
                    speaks the “language of your home” through empathy, <br />
                    respect, and reliability. <br />{" "}
                    <p className="mt-4">
                      Care is not just about tasks. <br />
                      It’s about trust, familiarity, and feeling seen.
                    </p>
                  </p>
                </div>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <div className="">
                  <i className="heart-icon fa-brands fa-supportnow"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="service-single-wrap mt-3 mb-3"> */}
          <div className="container">
            <div className="text-center">
              <h2 className="site-title">Our Home Care Services</h2>
              <p className="mb-30 mt-3">
                Support designed around your life — not a rigid checklist.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="service-area2">
                  <div className="service-item" style={{ minHeight: "580px" }}>
                    <div className="service-img">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/personal_care_n45cog.jpg`}
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="service-info">
                      <div className="service-content">
                        <h4 className="service-title">Personal Support</h4>
                        <p className="mt-2">
                          Hands-on assistance that promotes comfort, dignity,
                          and independence.
                        </p>
                        <div className="mt-3">
                          <List type="unstyled">
                            <ul
                              style={{
                                marginLeft: "20px",
                                listStyleType: "disc",
                              }}
                            >
                              <li>Bathing and dressing support</li>
                              <li>Mobility and transfer assistance</li>
                              <li>Medication reminders and assistance</li>
                              <li>Daily routine support</li>
                              <li>Safety monitoring and reassurance</li>
                            </ul>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-area2">
                  <div className="service-item" style={{ minHeight: "580px" }}>
                    <div className="service-img">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/respite_eb4dzx.jpg`}
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="service-info">
                      <div className="service-content">
                        <h4 className="service-title">Respite Care</h4>
                        <p className="mt-2">
                          Caring for a loved one is meaningful — and demanding.
                          Our respite services give family caregivers the time
                          and space to rest, knowing their loved one is in
                          capable, compassionate hands.
                        </p>
                        <div className="mt-3">
                          <List type="unstyled">
                            <ul
                              style={{
                                marginLeft: "20px",
                                listStyleType: "disc",
                              }}
                            >
                              <li>In-home support while caregivers recharge</li>
                              <li>Short-term or ongoing respite</li>
                              <li>Flexible scheduling</li>
                            </ul>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-area2">
                  <div className="service-item" style={{ minHeight: "580px" }}>
                    <div className="service-img">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/companionship_ndun3f.jpg`}
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="service-info">
                      <div className="service-content">
                        <h4 className="service-title">Companionship</h4>

                        <p className="mt-2">
                          Loneliness affects health just as much as physical
                          needs.
                        </p>
                        <div className="mt-3">
                          <p>
                            Our caregivers provide meaningful presence through:
                          </p>
                          <List type="unstyled">
                            <ul
                              style={{
                                marginLeft: "20px",
                                listStyleType: "disc",
                              }}
                            >
                              <li>Conversation and social engagement</li>
                              <li>Shared activities and hobbies</li>
                              <li>
                                Emotional support and routine companionship
                              </li>
                            </ul>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-area2">
                  <div className="service-item" style={{ minHeight: "580px" }}>
                    <div className="service-img">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/housekeeping_pjqyb2.jpg`}
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="service-info">
                      <div className="service-content">
                        <h4 className="service-title">House Keeping</h4>
                        <p className="mt-2">
                          A clean, organized home supports safety and peace of
                          mind.
                        </p>
                        <div className="mt-3">
                          <List type="unstyled">
                            <ul
                              style={{
                                marginLeft: "20px",
                                listStyleType: "disc",
                              }}
                            >
                              <li>Light housekeeping</li>
                              <li>Laundry and bed changes</li>
                              <li>Kitchen clean-up</li>
                              <li>General tidying for safe living spaces</li>
                            </ul>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-area2">
                  <div className="service-item" style={{ minHeight: "580px" }}>
                    <div className="service-img">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/meal_preparation_t5vr7t.jpg`}
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="service-info">
                      <div className="service-content">
                        <h4 className="service-title">Meal Preparation</h4>
                        <p className="mt-2">
                          Nutrition that respects cultural preferences and
                          dietary needs.
                        </p>
                        <div className="mt-3">
                          <List type="unstyled">
                            <ul
                              style={{
                                marginLeft: "20px",
                                listStyleType: "disc",
                              }}
                            >
                              <li>Meal planning</li>
                              <li>Meal preparation</li>
                              <li>Support with special diets</li>
                              <li>Encouraging healthy routines</li>
                            </ul>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-area2">
                  <div className="service-item" style={{ minHeight: "580px" }}>
                    <div className="service-img">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/seasonal_support_oweaty.jpg`}
                        width={600}
                        height={600}
                        alt=""
                      />
                    </div>
                    <div className="service-info">
                      <div className="service-content">
                        <h4 className="service-title">Seasonal Support</h4>
                        <p className="mt-2">
                          Because safety doesn’t stop at the front door.
                        </p>
                        <div className="mt-3">
                          <List type="unstyled">
                            <ul
                              style={{
                                marginLeft: "20px",
                                listStyleType: "disc",
                              }}
                            >
                              <li>Spring and fall clean-ups</li>
                              <li>Yard maintenance and basic lawn care</li>
                              <li>Snow removal for safe access and mobility</li>
                            </ul>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="container">
            <PricingPackages
              packages={homeCarePackages}
              title="Our CARE Packages"
              subTitle="Need help deciding what is right for you?"
              actionText={[
                { essential: "Ideal for light, consistent support" },
                { enhanced: "For ongoing daily assistance" },
                { comprehensive: "For complex or evolving needs" },
              ]}
            />
            <div className=" py-80">
              <div className="site-heading text-center wow fadeInDown">
                <h2 className="site-title">Serving Our Local Communities</h2>
              </div>
              <div className="mt-4 text-center">
                <p>
                  We are a local business invested in the resilience of our
                  region, serving:
                </p>
              </div>
              <div className="mt-5">
                <Table bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th className="p-3">Region</th>
                      <th className="p-3">
                        {" "}
                        Communities we serve include but not limited to
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3">Hamilton</td>
                      <td className="p-3">
                        Ancaster, Hamilton Mountain, Hamilton Downtown, Dundas,
                        Stoney Creek, Waterdown, Glanbrook
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
            <div className="cta-area">
              <div className="container">
                <div className="cta-wrap rounded-5 w-100">
                  <div className="col-lg-7 mx-auto">
                    <div className="cta-content">
                      <h1>
                        Ready to Discuss a <br />
                        <span>Plan?</span>
                      </h1>
                      <p>
                        Navigating care can be complex, but you don&#39;t have
                        to do it alone. Contact our local team today to discuss
                        a plan that works for you or your family.
                      </p>
                      <Link href="/contact" className="theme-btn">
                        Contact Us Today
                      </Link>
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
