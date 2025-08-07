import Link from "next/link";
import React from "react";

export const HelpAtHomeHero = () => {
  return (
    <>
      <div
        className="site-breadcrumb"
        // style="background: url(assets/img/breadcrumb/01.jpg)"
      >
        <div className="container">
          <h2 className="breadcrumb-title">Help At Home</h2>
          <ul className="breadcrumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <i className="fa fa-angle-double-right"></i> */}

            <li className="active">Help At Home</li>
          </ul>
        </div>
      </div>
    </>
  );
};
