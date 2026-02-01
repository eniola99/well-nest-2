import React from "react";
// import { useRouter } from "next/router";
import { List, Table } from "reactstrap";
import { PricingPackages } from "./PricingPackages";

import { homeCarePackages } from "@/src/utils/utils";
import Link from "next/link";

export const WellNestHomeCareContent = () => {
  // const router = useRouter();
  // const { service } = router.query;

  // const services = [
  //   { name: "Personal Care Services", slug: "personal-care-services" },
  //   { name: "Seasonal Home Support", slug: "seasonal-home-support" },
  // ];

  return (
    <>
      <div className="service-single py-120">
        <div className="container">
          <div className="container">
            <h3 className="title-about-story">Our Philosophy</h3>
            <div className="align-items-center">
              <p className=" pb-80">
                We’ve been in the rooms where support was needed --- but not
                found. <br />
                WellNest Home Care was built to be different. We create a circle
                of support that <br /> understands your values and speaks the
                “language of your home” through empathy, <br />
                respect, and reliability. <br />{" "}
                <p className="mt-4">
                  Care is not just about tasks. <br />
                  It’s about trust, familiarity, and feeling seen.
                </p>
              </p>
            </div>
          </div>
          <div
            className="service-single-wrap"
            style={{
              padding: "30px",
            }}
          >
            <div className="text-center">
              <h3>Our Home Care Services</h3>
              <p className="mb-30 mt-3">
                Support designed around your life — not a rigid checklist.
              </p>
            </div>
            <div className="row g-3">
              <div className="col-lg-4 col-md-6">
                <div className="contact-form-wrap">
                  <h4>Personal Support</h4>
                  <p className="mt-2">
                    Hands-on assistance that promotes comfort, dignity, and
                    independence.
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
              <div className="col-lg-4 col-md-6">
                <div className="contact-form-wrap">
                  <h4>Respite Care</h4>
                  <p className="mt-2">
                    Caring for a loved one is meaningful — and demanding. Our
                    respite services give family caregivers the time and space
                    to rest, knowing their loved one is in capable,
                    compassionate hands.
                  </p>
                  <div className="mt-3">
                    <List type="unstyled">
                      <ul
                        style={{
                          marginLeft: "20px",
                          listStyleType: "disc",
                        }}
                      >
                        <li>Short-term or ongoing respite</li>
                        <li>In-home support while caregivers recharge</li>
                        <li>Flexible scheduling</li>
                      </ul>
                    </List>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-form-wrap">
                  <h4>Companionship</h4>
                  <p className="mt-2">
                    Loneliness affects health just as much as physical needs.
                  </p>
                  <div className="mt-3">
                    <p>Our caregivers provide meaningful presence through:</p>
                    <List type="unstyled">
                      <ul
                        style={{
                          marginLeft: "20px",
                          listStyleType: "disc",
                        }}
                      >
                        <li>Conversation and social engagement</li>
                        <li>Shared activities and hobbies</li>
                        <li>Emotional support and routine companionship</li>
                      </ul>
                    </List>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-form-wrap">
                  <h4>Housekeeping</h4>
                  <p className="mt-2">
                    A clean, organized home supports safety and peace of mind.
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
              <div className="col-lg-4 col-md-6">
                <div className="contact-form-wrap">
                  <h4>Meal Preparation</h4>
                  <p className="mt-2">
                    Nutrition that respects cultural preferences and dietary
                    needs.
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
              <div className="col-lg-4 col-md-6">
                <div className="contact-form-wrap">
                  <h4>Seasonal Support</h4>
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
            {/* <div className="row">
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
            </div> */}
          </div>
          <PricingPackages
            packages={homeCarePackages}
            title="Our CARE Packages"
            subTitle="Flexible options that grow with your needs"
            actionText={[
              { essential: "Ideal for light, consistent support" },
              { enhanced: "For ongoing daily assistance" },
              { comprehensive: "For complex or evolving needs" },
            ]}
          />
          <div className=" py-100">
            <div className="site-heading text-center wow fadeInDown">
              <h2 className="site-title">
                Serving Our Local <br />
                <span>Communitiess</span>
              </h2>
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
                      Navigating care can be complex, but you don&#39;t have to
                      do it alone. Contact our local team today to discuss a
                      plan that works for you or your family.
                    </p>
                    <Link href="/contact" className="theme-btn">
                      Contact Us Today
                      {/* <i className="fas fa-arrow-right"></i> */}
                    </Link>
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
