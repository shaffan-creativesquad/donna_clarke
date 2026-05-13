import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    setMenuState(false);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
    scrollToSection(id);
  };

  const menuClick = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <>
      <header className="new-header">
        <div className="new-header-container">
          
          {/* Logo Section */}
          <div className="new-header-logo-section">
            <div className="new-header-logo-box">
              <span className="font-playfair">DC</span>
            </div>
            <div className="new-header-logo-text">
              <h1 className="font-playfair">DONNA CLARKE</h1>
              <p className="font-raleway">THE OLYMPIAN SPORTS MOM</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="new-header-nav d-none d-lg-flex">
                        <ul className="new-header-nav-list font-raleway">
              <li><Link to="/" className={window.location.pathname === "/" ? "active-link" : ""} onClick={() => setMenuState(false)}>ABOUT</Link></li>
              <li><Link to="/how-i-got-here" className={window.location.pathname === "/how-i-got-here" ? "active-link" : ""} onClick={() => setMenuState(false)}>HOW I GOT HERE</Link></li>
              <li><Link to="/services" className={window.location.pathname === "/services" ? "active-link" : ""} onClick={() => setMenuState(false)}>SERVICES</Link></li>
              <li><Link to="/hall-of-champions" className={window.location.pathname === "/hall-of-champions" ? "active-link" : ""} onClick={() => setMenuState(false)}>HALL OF CHAMPIONS</Link></li>
              <li><Link to="/speaking" className={window.location.pathname === "/speaking" ? "active-link" : ""} onClick={() => setMenuState(false)}>SPEAKING</Link></li>
              <li><Link to="/enquire" className={window.location.pathname === "/enquire" ? "active-link" : ""} onClick={() => setMenuState(false)}>ENQUIRE</Link></li>
            </ul>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="new-header-action">
            <Link to="/enquire" className="new-header-btn font-raleway d-none d-lg-block text-decoration-none text-center" style={{ lineHeight: 'normal', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              WORK WITH DONNA
            </Link>
            <label value="menu-toggle" onClick={menuClick} className="responsive-menu-btn d-lg-none d-inline">
              <img loading="lazy" src="/images/icons/hamburger-menu.png" className="img-fluid menu-btn" alt="menu" />
            </label>
          </div>

        </div>

        {/* Mobile Navigation */}
        <nav className="responsive-popup-menu w-100" style={{ display: menuState ? "block" : "none" }}>
          <div className="py-3 d-lg-none">
                        <ul className="resp-nav-list w-100 gap-4 pl-4 font-raleway">
              <li><Link to="/" className={window.location.pathname === "/" ? "active-link" : ""} onClick={() => setMenuState(false)}>ABOUT</Link></li>
              <li><Link to="/how-i-got-here" className={window.location.pathname === "/how-i-got-here" ? "active-link" : ""} onClick={() => setMenuState(false)}>HOW I GOT HERE</Link></li>
              <li><Link to="/services" className={window.location.pathname === "/services" ? "active-link" : ""} onClick={() => setMenuState(false)}>SERVICES</Link></li>
              <li><Link to="/hall-of-champions" className={window.location.pathname === "/hall-of-champions" ? "active-link" : ""} onClick={() => setMenuState(false)}>HALL OF CHAMPIONS</Link></li>
              <li><Link to="/speaking" className={window.location.pathname === "/speaking" ? "active-link" : ""} onClick={() => setMenuState(false)}>SPEAKING</Link></li>
              <li><Link to="/enquire" className={window.location.pathname === "/enquire" ? "active-link" : ""} onClick={() => setMenuState(false)}>ENQUIRE</Link></li>
            </ul>
            <div className="nav-buttton flex-wrap d-flex gap-4 justify-content-start ps-4 mt-3">
              <Link to="/enquire" className="new-header-btn font-raleway text-decoration-none text-center" style={{ lineHeight: 'normal', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setMenuState(false)}>
                WORK WITH DONNA
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;