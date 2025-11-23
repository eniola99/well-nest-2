import React from "react";

export const CareerBenefits = () => {
  const benefitsText = [
    {
      text: "Scolarships",
      subText: "",
      icon: "fa-brands fa-google-scholar",
    },
    {
      text: "Employee Discounts",
      subText: "",
      icon: "fa-solid fa-percent",
    },
    {
      text: "Benefits",
      subText: "",
      icon: "fa-solid fa-handshake-angle",
    },
    {
      text: "Paid Orientation",
      subText: "",
      icon: "fa-solid fa-money-bill",
    },
    {
      text: "Training and Development Opportinuties",
      subText: "",
      icon: "fa-solid fa-database",
    },
    {
      text: "Employee Assistance Program",
      subText: "",
      icon: "fa-solid fa-clipboard-question",
    },
    {
      text: "Mobile Devices (for field staff)",
      subText: "",
      icon: "fa-solid fa-mobile-retro",
    },
    {
      text: "Mileage compensation (for staff field)",
      subText: "",
      icon: "fa-solid fa-car",
    },
  ];
  return (
    <>
      <div className="terms-area py-50 cursor-pointer">
        <div className="mx-5">
          <h4 className="text-center">Benefits of Working at WellNest</h4>
          <div className=" mt-5">
            <div className="row">
              {benefitsText.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                  <div className="benefit-card">
                    <i className={`${item.icon} text-white me-2`}></i>
                    <span className="text-white">{item.text}</span>
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
