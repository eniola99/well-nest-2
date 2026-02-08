import React from "react";

export const CareerBenefits = () => {
  const benefitsText = [
    {
      text: "Flexible Scheduling",
      subText: "We offer schedules that respect your work-life balance.",
      icon: "fa-brands fa-google-scholar",
    },
    {
      text: "Supportive Culture",
      subText:
        "We value, celebrate, and support our caregivers every step of the way.",
      icon: "fa-solid fa-percent",
    },
    {
      text: "Growth Opportunities",
      subText:
        "Benefit from unique cross-training opportunities with our sister company, WellWheels (non-emergency medical transport).",
      icon: "fa-solid fa-money-bill",
    },
    {
      text: "Purpose-Driven Work",
      subText:
        "Engage in meaningful work that truly makes a difference in the lives of our neighbors.",
      icon: "fa-solid fa-database",
    },
    {
      text: "Paid Training",
      subText:
        "Access to paid orientation and ongoing professional development.",
      icon: "fa-solid fa-handshake-angle",
    },
  ];
  return (
    <>
      <div className="terms-area py-50 cursor-pointer">
        <div className="mx-5">
          <div className=" mt-5">
            <div className="row">
              {benefitsText.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="benefit-card">
                    <i className={`${item.icon} text-white me-2`}></i>
                    <span className="text-white">{item.text}</span>
                    <div className="reveal-content">
                      <p>{item.subText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
