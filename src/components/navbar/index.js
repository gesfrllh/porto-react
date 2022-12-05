import React from "react";
import { Nav, NavMenu, NavMenuLinks } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavMenuLinks
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </NavMenuLinks>
          <NavMenuLinks
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </NavMenuLinks>
          <NavMenuLinks
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </NavMenuLinks>
          <NavMenuLinks
            to="portofolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portofolio
          </NavMenuLinks>
          <NavMenuLinks
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
          >
            Home
          </NavMenuLinks>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
