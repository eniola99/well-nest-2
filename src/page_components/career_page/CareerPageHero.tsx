import React from "react";

interface CareerPageHeroProps {
  title: string;
  sub_text: string;
}
export const CareerPageHero = ({ title, sub_text }: CareerPageHeroProps) => {
  return (
    <>
      <div
        className="site-breadcrumb"
        // style="background: url(assets/img/breadcrumb/01.jpg)"
      >
        <div className="container">
          <h2 className="breadcrumb-title">{title}</h2>
          <h6 className="text-white">{sub_text}</h6>
        </div>
      </div>
    </>
  );
};
