import React from "react";
import Image from "next/image";
import Link from "next/link";

export const TransporationContent = () => {
  console.log("line 5");
  return (
    <>
      <div className="event-single py-120">
        <div className="container">
          <div className="event-single-wrap">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="event-details">
                  <Image
                    src="/assets/img/event/single.jpg"
                    width={900}
                    height={600}
                    alt=""
                  />
                  <div className="my-4">
                    <h3 className="mb-2">About The Event</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isnt anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="mb-2">Where The Event?</h3>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
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
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="event-sidebar">
                  <div className="widget">
                    <div className="header">
                      <h4 className="title">Event Information</h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted the readable content.
                      </p>
                    </div>
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
                      </Link>
                    </div>
                  </div>
                  <div className="widget">
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
