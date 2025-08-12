import React from "react";
import Image from "next/image";

export const TeamMembers = () => {
  return (
    <>
      <div className="team-area py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">
                  <i className="fa fa-heart-circle-plus"></i> Our Volunteers
                </span>
                <h2 className="site-title">
                  Meet With Our Awesome <span>Volunteers</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                <div className="team-img">
                  <Image
                    src="/assets/img/team/01.jpg"
                    width={600}
                    height={600}
                    alt="thumb"
                  />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="fa-solid fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <a href="team.html">Rodrigues Christy</a>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".50s">
                <div className="team-img">
                  <Image
                    src="/assets/img/team/02.jpg"
                    width={600}
                    height={600}
                    alt="thumb"
                  />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="fa-solid fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <a href="team.html">Matthew Hong</a>
                  </h4>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".75s">
                <div className="team-img">
                  <Image
                    src="/assets/img/team/03.jpg"
                    width={600}
                    height={600}
                    alt="thumb"
                  />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="fa-solid fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <a href="team.html">Anita Bentley</a>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay="1s">
                <div className="team-img">
                  <Image
                    src="/assets/img/team/04.jpg"
                    width={600}
                    height={600}
                    alt="thumb"
                  />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="fa-solid fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <a href="team.html">Beverly Dyer</a>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
