import React from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";

export const HeroSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="main">
          <div className="hero-section">
            <div className="hero-slider">
              <div
                className="hero-single"
                style={{
                  backgroundImage: "url('/assets/img/hero-slider-1.jpg')",
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6">
                      <div className="hero-content">
                        <h6
                          className="hero-sub-title"
                          data-animation="fadeInUp"
                          data-delay=".25s"
                        >
                          <i className="fa fa-heart-circle-plus"></i> Best
                          Elderly Care
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Care That <span>Understands. Support</span> That
                          Empowers.
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          At WellNest Health Group, we provide more than a
                          service—we provide a circle of support grounded in
                          cultural respect and lived experience.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          {/* <a href="about.html" className="theme-btn">
                        Book a Free Consultation<i className="fas fa-arrow-right"></i>
                      </a> */}
                          {/* <Link href="/contact" className="theme-btn2">
                            Book a Free Consultation
                            <i className="fas fa-arrow-right"></i>
                          </Link> */}
                          <Link href="/contact" className="theme-btn">
                            Book a Free Consultation
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                          {/* <a href="contact.html" className="theme-btn2">
                        Book a Free Consultation
                        <i className="fas fa-arrow-right"></i>
                      </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="hero-section">
            <div className="hero-slider">
              <div
                className="hero-single"
                style={{
                  backgroundImage: "url('/assets/img/hero-slider-3.jpg')",
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6">
                      <div className="hero-content">
                        <h6
                          className="hero-sub-title"
                          data-animation="fadeInUp"
                          data-delay=".25s"
                        >
                          <i className="fa fa-heart-circle-plus"></i> Best
                          Elderly Care
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Care That <span>Understands. Support</span> That
                          Empowers.
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          At WellNest Health Group, we provide more than a
                          service—we provide a circle of support grounded in
                          cultural respect and lived experience.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <Link href="/contact" className="theme-btn">
                            Book a Free Consultation
                            <i className="fas fa-arrow-right"></i>
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
        <div className="main">
          <div className="hero-section">
            <div className="hero-slider">
              <div
                className="hero-single"
                style={{
                  backgroundImage: "url('/assets/img/hero-slider-2.jpg')",
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6">
                      <div className="hero-content">
                        <h6
                          className="hero-sub-title"
                          data-animation="fadeInUp"
                          data-delay=".25s"
                        >
                          <i className="fa fa-heart-circle-plus"></i> Best
                          Elderly Care
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Care That <span>Understands. Support</span> That
                          Empowers.
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          At WellNest Health Group, we provide more than a
                          service—we provide a circle of support grounded in
                          cultural respect and lived experience.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <Link href="/contact" className="theme-btn">
                            Book a Free Consultation
                            <i className="fas fa-arrow-right"></i>
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
      </Carousel>
    </>
  );
};
