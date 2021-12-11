import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [showCloseButton, setShowCloseButton] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        className={showCloseButton ? classes.navBar2 : classes.navBar1}
      >
        <Navbar.Brand href="#home" className="mx-3">
          <img src="logo.png" className="img-responsive" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none", marginRight: "1rem" }}
          onClick={() => setShowCloseButton(!showCloseButton)}
        >
          {showCloseButton ? (
            <FaTimes color="#00fa96" style={{ fontSize: "1.5rem" }} />
          ) : (
            <GiHamburgerMenu color="#00fa96" style={{ fontSize: "1.7rem" }} />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={showCloseButton ? classes.list2 : classes.list1}
            >
              Webdesign
            </Nav.Link>
            <Nav.Link
              href="#features"
              className={showCloseButton ? classes.list2 : classes.list1}
            >
              Zoekmachine optimalisatie(SEO)
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className={showCloseButton ? classes.list2 : classes.list1}
            >
              Google Ads
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className={showCloseButton ? classes.list2 : classes.list1}
            >
              Conversie optimalisatie(CRO)
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className={showCloseButton ? classes.list2 : classes.list1}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
