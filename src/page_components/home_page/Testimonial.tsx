import React from "react";

export const Testimonial = () => {
  return (
    <>
      <div className="event-area event-bg py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">
                  <i className="fa fa-heart-circle-plus"></i> Stories
                </span>
                <h2 className="text-white">
                  Our Awsome <span>Senior</span> Stories
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="stories-item wow fadeInUp" data-wow-delay=".25s">
                <div className="stories-img">
                  <img src="assets/img/stories/01.jpg" alt="" />
                </div>
                <div className="stories-content">
                  <h4>
                    <a href="#">Mickel Stories</a>
                  </h4>
                  <p>
                    There are many variations of passages available but the
                    majority have suffered.
                  </p>
                  <a href="#" className="theme-btn">
                    Read More<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="stories-item wow fadeInUp" data-wow-delay=".50s">
                <div className="stories-img">
                  <img src="assets/img/stories/02.jpg" alt="" />
                </div>
                <div className="stories-content">
                  <h4>
                    <a href="#">Marva Nez Stories</a>
                  </h4>
                  <p>
                    There are many variations of passages available but the
                    majority have suffered.
                  </p>
                  <a href="#" className="theme-btn">
                    Read More<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="stories-item wow fadeInUp" data-wow-delay=".75s">
                <div className="stories-img">
                  <img src="assets/img/stories/03.jpg" alt="" />
                </div>
                <div className="stories-content">
                  <h4>
                    <a href="#">Zachary Posey Stories</a>
                  </h4>
                  <p>
                    There are many variations of passages available but the
                    majority have suffered.
                  </p>
                  <a href="#" className="theme-btn">
                    Read More<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
