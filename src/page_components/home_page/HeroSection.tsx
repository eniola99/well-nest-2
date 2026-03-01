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
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/hero-slider-1_ooagwq.jpg)`,
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6">
                      <div className="hero-content">
                        <h1 className="hero-title">
                          Care That Understands. Support That Empowers.
                        </h1>
                        <p>
                          At WellNest Health Group, we provide more than a
                          service—we provide a circle of support grounded in
                          cultural respect and lived experience.
                        </p>
                        <div className="hero-btn">
                          <Link href="/about" className="theme-btn">
                            Book a free Consultation
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
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/hero-slider-2_hnnhh7.jpg)`,
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6">
                      <div className="hero-content">
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Our Mission
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          To transform the aging experience in Ontario by
                          providing integrated, culturally-attuned care that
                          honors individual heritage, fosters belonging, and
                          empowers seniors to live with dignity on their own
                          terms.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <Link href="/about" className="theme-btn">
                            learn more about our story
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
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/hero-slider-3_pzcfxv.jpg)`,
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6">
                      <div className="hero-content">
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Our Vision
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          A future where aging feels supported, familiar, and
                          respected—so people can live fully, safely, and on
                          their own terms.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <Link href="/about" className="theme-btn">
                            learn more about our story
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
