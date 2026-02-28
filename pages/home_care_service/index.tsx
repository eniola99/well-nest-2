import React from "react";
import Carousel from "react-multi-carousel";
import Link from "next/link";

import { NavSection, Footer } from "@/src/components/common";
import { WellNestHomeCareContent } from "@/src/page_components/HelpAtHome_service";

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
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/homepage_homecare_services_yyr1n6.jpg')`,
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
                          Dependable, person-centered support that feels like
                          family.
                        </h1>
                        <div
                          className="hero-btn mt-5"
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
      <WellNestHomeCareContent />
      <Footer />
    </>
  );
};

export default index;
