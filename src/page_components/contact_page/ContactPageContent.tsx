import React from "react";
import Image from "next/image";

export const ContactPageContent = () => {
  return (
    <div className="contact-area py-120">
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="content">
                  <h5>Office Address</h5>
                  <p>25/B Milford, New York, USA</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="content">
                  <h5>Call Us</h5>
                  <p>+2 123 4565 789</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="content">
                  <h5>Email Us</h5>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-alarm-clock"></i>
                </div>
                <div className="content">
                  <h5>Open Time</h5>
                  <p>Mon - Sat (10.00AM - 05.30PM)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrap">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="contact-form">
                <div className="contact-form-header">
                  <h2>Get In Touch</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page randomised
                    words which dont look even slightly when looking at its
                    layout.{" "}
                  </p>
                </div>
                <div className="form-message"></div>
                <form
                  method="post"
                  action="/senocare/assets/php/contact.php"
                  id="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="form-icon">
                          <i className="fa-solid fa-user-tie"></i>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="form-icon">
                          <i className="fa-solid fa-envelope"></i>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-icon">
                      <i className="fa-solid fa-pen"></i>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Your Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-icon">
                      <i className="far fa-comment-lines"></i>
                      <textarea
                        name="message"
                        cols={30}
                        rows={5}
                        className="form-control"
                        placeholder="Write Your Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="theme-btn">
                    Send Message <i className="far fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-img">
                <Image
                  src="/assets/img/contact/01.jpg"
                  width={800}
                  height={885}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
