import React, { useEffect } from "react";

interface MissionAboutProps {
  activeSection: string;
}
export const MissionAbout = ({ activeSection }: MissionAboutProps) => {
  useEffect(() => {
    const setToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    setToSection(activeSection);
  }, [activeSection]);

  const helpWith = [
    "C – Compassion: We lead with kindness and empathy.",
    "A – Accountability: We act with honesty and integrity.",
    "R – Respect: We honor dignity, diversity, and independence.",
    "E – Excellence: We strive for quality and continuous improvement.",
  ];
  return (
    <>
      <div className="" id="mission-about">
        <h3 className="mb-20">Mission</h3>
        <p className="mb-20">
          Providing compassionate, reliable home care that supports clients and
          their family caregivers, helping them live safely and independently at
          home.
        </p>
        <h3 className="mb-20">Vision</h3>
        <p className="mb-20">
          To redefine home care in Ontario by providing trusted, compassionate,
          and innovative services that empower individuals to live with dignity,
          independence, and connection in the place they call home.
        </p>

        <div className="mb-3">
          <h3 className="mb-3">Value Statement (CARE)</h3>
          <div className="row">
            {helpWith.map((item) => (
              <>
                <p className="mb-20">
                  <i className="fa-solid fa-check-double mx-2"></i>
                  <b>{item}</b>
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
