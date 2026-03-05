import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";

import { useWindowSize } from "@/src/hooks";

export const Navbar = () => {
  const { width } = useWindowSize();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "WellNest Home Care", path: "/home_care_service" },
    { name: "WellWheels", path: "/well-wheels" },
    { name: "Careers", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];

  const NavOptions = () => {
    return (
      <>
        {routes.map((route) => (
          <Nav key={route.path} className="">
            <Link href={route.path}>
              <NavbarText active={router.pathname === route.path}>
                {route.name}
              </NavbarText>
            </Link>
          </Nav>
        ))}
      </>
    );
  };

  return (
    <>
      {/* className={`nav-link ${router.pathname === route.path ? "active" : ""}`} */}
      <ReactstrapNavbar fixed="top" container>
        <NavbarBrand href="/">
          {" "}
          <Image
            src="/assets/img/wellnest-logo-with-name.png"
            width={500}
            height={500}
            alt="logo"
          />
        </NavbarBrand>
        {width < 769 ? (
          <>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <NavOptions />
            </Collapse>
          </>
        ) : (
          <NavOptions />
        )}
      </ReactstrapNavbar>
    </>
  );
};
