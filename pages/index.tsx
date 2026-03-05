import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import { Homepage } from "@/src/components";
import styles from "@/styles/Home.module.css";
import { NavSection } from "@/src/components/common";

export default function Home() {
  const router = useRouter();
  const [ShowSlideOut, setShowSlideOut] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "WellNest Home Care", path: "/home_care_service" },
    { name: "WellWheels", path: "/well-wheels" },
    { name: "Careers", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <>
      <Homepage />
    </>
  );
}
