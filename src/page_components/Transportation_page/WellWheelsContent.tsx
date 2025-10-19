import React from "react";
import Image from "next/image";
import Link from "next/link";
import { wellWheelServices } from "@/src/utils/utils";

export const WellWheelsContent = () => {
  return (
    <>
      <div className="event-single py-120">
        <div className="container">
          <div className="event-single-wrap">
            <div className="row g-4">
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
                  {/* <div className="mb-4">
                    <h3 className="mb-2">Who This Event Is For?</h3>
                    <p>
                      Ggenerators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a dictionary of over 200 Latin
                      words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                  </div>
                  <div className="event-map mt-5">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
                      //   style="border:0;"
                      //   allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div> */}
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
                      {/* </div>
                    <div className="event-single-info">
                      <div className="event-single-item">
                        <h5>Event Date</h5>
                        <p>
                          <i className="far fa-calendar-alt"></i>19 January 2025
                        </p>
                      </div>
                      <div className="event-single-item">
                        <h5>Event Time</h5>
                        <p>
                          <i className="far fa-clock"></i>08: 00 AM - 04:00 PM
                        </p>
                      </div>
                      <div className="event-single-item">
                        <h5>Event Location</h5>
                        <p>
                          <i className="far fa-map-marker-alt"></i>New York, USA
                        </p>
                      </div>
                      <div className="event-single-item">
                        <h5>Event Cost</h5>
                        <p>
                          <i className="far fa-usd-circle"></i>150
                        </p>
                      </div>
                      <Link href="#" className="theme-btn">
                        Book Now<i className="fas fa-arrow-right"></i>
                      </Link> */}
                    </div>
                  </div>
                  {/* <div className="widget">
                    <h4 className="title">Event Organizer</h4>
                    <div className="event-single-author">
                      <div className="author-info">
                        <Image
                          src="/assets/img/event/author.jpg"
                          width={200}
                          height={200}
                          alt=""
                        />
                        <h5>Richard M Bell</h5>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
