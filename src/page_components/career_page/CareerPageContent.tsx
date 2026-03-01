import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";

import { CareerPageDisclaimer } from "./CareerPageDisclaimer";

import { Footer } from "@/src/components/common";

export const CareerPageContent = () => {
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
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDINARY_URI}/career_hero_page_sdmjkx.jpg)`,
                  minHeight: "700px",
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6">
                      <div className="hero-content">
                        <h1 className="hero-title">Careers</h1>
                        {/* <p
                          className="text-white mb-5 mt-3"
                          data-animation="fadeInLeft"
                          data-delay=".75s"
                        >
                          A diverse group of compassionate healthcare
                          professionals collaborating in a supportive
                          environment.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <CareerPageDisclaimer />
      <Footer />
    </>
  );
};
