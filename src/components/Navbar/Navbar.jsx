import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import Logowhite from "./image/logowhite.png";
// import Logoblack from "./image/logoblack.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [logoSrc, setLogoSrc] = useState(Logowhite);

  const toggleNav = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("open");
  };

  const closeNav = () => {
    setIsActive(false);
    document.body.classList.remove("open");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        // setLogoSrc(isScrolled ? Logoblack : Logowhite);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <div className={scrolled ? "overlay scrolled" : "overlay"}></div>
      <header className={scrolled ? "scrolled" : ""}>
        <a href="#" className="logo">
          {/* <img src={logoSrc} alt="Logo" /> */}
          <span>Uk</span>Kagnary
        </a>

        <div className="right-header">
          <ul className={`navlist ${isActive ? "active" : ""}`} onClick={closeNav}>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Education">Educations</a>
            </li>
            <li>
              <a href="#Skills">skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* <a href="#" className="btn">
            Let's chat <i className="bx bx-message-dots"></i>
          </a> */}
          <div className={`menu-icon ${isActive ? "active" : ""}`} onClick={toggleNav}>
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;