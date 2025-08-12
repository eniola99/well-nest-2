import Link from "next/link";
import React from "react";

interface HelpAtHomeProps {
  title: string;
}
export const HelpAtHomeHero = ({ title }: HelpAtHomeProps) => {
  return (
    <>
      <div
        className="site-breadcrumb"
        // style="background: url(assets/img/breadcrumb/01.jpg)"
      >
        <div className="container">
          <h2 className="breadcrumb-title">{title}</h2>
          <ul className="breadcrumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <i className="fa fa-angle-double-right"></i> */}

            <li className="active">{title}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
