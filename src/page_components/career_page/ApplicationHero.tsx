import React from "react";

interface ApplicationHeroProps {
  title: string;
}
export const ApplicationHero = ({ title }: ApplicationHeroProps) => {
  return (
    <>
      <div
        className="site-breadcrumb"
        // style="background: url(assets/img/breadcrumb/01.jpg)"
      >
        <div className="container">
          <h2 className="breadcrumb-title">{title}</h2>
        </div>
      </div>
    </>
  );
};
