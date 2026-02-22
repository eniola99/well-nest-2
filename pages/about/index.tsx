import React from "react";
import Carousel from "react-multi-carousel";
import Link from "next/link";

import { Footer, NavSection } from "@/src/components/common";
import { AboutUs } from "@/src/page_components/about_page";

const index = () => {
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
      <>
        <NavSection />
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="main">
            <div className="hero-section">
              <div className="hero-slider">
                <div
                  className="about-hero-single"
                  style={{
                    backgroundImage: `url('${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/about_us_hero_page_nfkx9y.jpg')`,
                    minHeight: "700px",
                  }}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-lg-6">
                        <div className="hero-content">
                          <h1
                            className="hero-title text-white"
                            data-animation="fadeInRight"
                            data-delay=".50s"
                          >
                            Care That Honors Your Story
                          </h1>
                          <p
                            className="text-white mb-5 mt-3"
                            data-animation="fadeInLeft"
                            data-delay=".75s"
                          >
                            Redefining home support in Hamilton, Haldimand, and
                            Niagara through culturally- attuned care and
                            integrated mobility.
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
        </Carousel>
        <AboutUs />
        <Footer />
      </>
    </>
  );
};

export default index;
