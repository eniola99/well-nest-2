import React, { useEffect } from "react";

interface CompanyOverviewProps {
  activeSection: string;
}

export const CompanyOverview = ({ activeSection }: CompanyOverviewProps) => {
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
      <div className="" id="company-overview">
        <h3 className="mb-20">Company Overview</h3>
        <p className="mb-20">
          WellNest Care Group is a trusted provider of community-based services
          designed to help individuals live with dignity, independence, and
          connection. Our organization operates through two complementary
          service arms: <b>WellNest Home Care</b> and <b>WellWheels</b>.
        </p>
        <p className="mb-20">
          At <b>WellNest Home Care</b>, we believe that everyone deserves to
          feel safe, supported, and cared for in the place they know best —
          their own home. Our team provides compassionate, personalized care
          that helps seniors and individuals with unique needs live with dignity
          and independence, while giving families the peace of mind that their
          loved ones are in good hands.
        </p>
        <p className="mb-20">
          We also know that wellness is more than care at home — it’s about
          staying connected and being able to get where you need to go. That’s
          why we created <b>WellWheels</b>, our accessible transportation
          service. From medical appointments to community activities,{" "}
          <b>WellWheels</b> makes sure that getting around is safe, comfortable,
          and stress-free.
        </p>
        <p className="mb-20">
          Together, <b>WellNest Home Care</b> and <b>WellWheels</b> form a
          circle of support that meets both daily living and mobility needs. We
          don’t just provide services — we build trusted relationships, treating
          every client and family like part of our own.
        </p>
        <p className="mb-20">
          Our promise is simple:{" "}
          <i>
            to make life easier, safer, and more meaningful for those we serve,
            every single day.
          </i>
        </p>
      </div>
    </>
  );
};
