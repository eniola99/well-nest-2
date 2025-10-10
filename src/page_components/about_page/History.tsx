import React, { useEffect } from "react";

interface HistoryProps {
  activeSection: string;
}
export const History = ({ activeSection }: HistoryProps) => {
  useEffect(() => {
    const setToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    setToSection(activeSection);
  }, [activeSection]);

  return (
    <>
      <div className="mt-5" id="history">
        <h3 className="mb-20">History</h3>
        <p className="mb-20">
          At <b>WellNest Health Group</b>, care is more than a service—it’s a
          commitment grounded in both purpose and experience.
        </p>
        <p className="mb-20">
          After years of working in the developmental services sector, I’ve had
          the privilege of supporting individuals with disabilities through many
          of life’s transitions. One of the most complex—and often
          overlooked—has been aging. I’ve seen firsthand how long waitlists,
          language barriers, and a lack of personalized care options can leave
          people and families feeling stuck, unsupported, or invisible.
        </p>
        <p className="mb-20">
          At the same time, like many, I’m also part of a family that’s
          beginning to navigate the realities of aging parents. That experience
          has deepened my belief that people deserve to grow older with grace,
          comfort, and respect—ideally, in their own homes and on their own
          terms.
        </p>

        <p className="mb-20">That’s why I started WellNest.</p>
        <p className="mb-20">
          Our goal isn’t just to provide services—it’s to build a circle of
          support that feels right. One that understands cultural values,
          communicates clearly, and steps in with empathy and reliability.
          Whether it’s a caregiver who speaks your language or a driver who
          helps you into your seat without rushing, we focus on the human
          moments that make all the difference.
        </p>
        <p className="mb-20">
          We care because we’ve been in the rooms where support was needed and
          not available. We’ve sat at the table with families making hard
          decisions. And we believe that when care is done right, it can be
          empowering—not overwhelming.
        </p>
        <p className="mb-20">
          WellNest is built on that belief. And we’re proud to serve our
          community with care that’s not only professional—but deeply personal.
        </p>
        {/* <div className="my-4 ">
                        <div className="mb-3">
                          <h3 className="mb-3">We Help You With:</h3>
                          <div className="row">
                            {helpWith.map((item) => (
                              <>
                                <div className="col-md-6 mb-20">
                                  <p className="mb-20">
                                    <i className="fa-solid fa-check-double mx-2"></i>
                                    {item}
                                  </p>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </div> */}
      </div>
    </>
  );
};
