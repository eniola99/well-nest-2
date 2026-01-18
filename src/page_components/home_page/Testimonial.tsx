import React from "react";
import Image from "next/image";

export const Testimonial = () => {
  return (
    <div className="container py-50">
      <h2 className="site-title text-center">
        We strive for quality and <span> continuous improvement.</span>
      </h2>
      <h5 className="text-center mt-5">
        Our Value Statement (The CARE Standard){" "}
      </h5>

      <div className="feature-area pt-5">
        <div className="container">
          <div className="feature-wrapper">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div
                  className="feature-item bg-1 wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  {/* <span className="count">01</span> */}
                  <div className="feature-icon">
                    <Image
                      src="/assets/img/icon/nurse.svg"
                      width={50}
                      height={50}
                      alt="nurse icon"
                    />
                  </div>
                  <div className="feature-content">
                    <h4>Compassion</h4>
                    <p>We lead with kindness and empathy.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="feature-item bg-2 wow fadeInUp"
                  data-wow-delay=".50s"
                >
                  {/* <span className="count">02</span> */}
                  <div className="feature-icon">
                    <Image
                      src="/assets/img/icon/institute.svg"
                      width={50}
                      height={50}
                      alt="institute icon"
                    />
                  </div>
                  <div className="feature-content">
                    <h4>Accountability</h4>
                    <p>We act with honesty and integrity</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="feature-item bg-3 wow fadeInUp"
                  data-wow-delay=".75s"
                >
                  {/* <span className="count">03</span> */}
                  <div className="feature-icon">
                    <Image
                      src="/assets/img/icon/support.svg"
                      width={50}
                      height={50}
                      alt="support icon"
                    />
                  </div>
                  <div className="feature-content">
                    <h4>Respect</h4>
                    <p>We honor dignity, diversity, and independence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
