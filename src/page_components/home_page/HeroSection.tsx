import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="main">
      <div className="hero-section">
        <div
          className="hero-single"
          style={{
            backgroundImage: "url('/assets/img/hero_bg.png')",
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
                    <i className="fa fa-heart-circle-plus"></i> Best Elderly
                    Care
                  </h6>
                  <h1
                    className="hero-title"
                    data-animation="fadeInRight"
                    data-delay=".50s"
                  >
                    Live in care & <span>your family</span> will love
                  </h1>
                  <p data-animation="fadeInLeft" data-delay=".75s">
                    WellNest Home Health Care has been helping people live
                    better at home, offering a full range of home health care
                    services including personal care, homemaking, nursing,
                    occupational therapy, physiotherapy, and many more care
                    services.
                  </p>
                  <div
                    className="hero-btn"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
                    <a href="about.html" className="theme-btn">
                      About More<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="hero-img">
                  <Link
                    className="play-btn popup-youtube"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                  <Image
                    src="/assets/img/01.jpg"
                    width={550}
                    height={600}
                    alt="hero imgage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
