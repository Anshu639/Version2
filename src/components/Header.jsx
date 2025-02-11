import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FaCaretDown } from "react-icons/fi";

import "./css/Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const dropdownItems = [
    {
      title: "Hands-On Training & Certification Courses",
      link: "/events/training",
    },
    {
      title: "Competitions (Academic & Non-Academic)",
      link: "/events/competitions",
    },
    { title: "Themed Events & Tech Fairs", link: "/events/techfairs" },
    { title: "Workshops & Expert-Led Sessions", link: "/events/workshops" },
    { title: "Publishing (Books & Newsletters)", link: "/events/publishing" },
    { title: "Summer & Winter Camps", link: "/events/camps" },
    {
      title: "Community Engagement & Networking Initiatives",
      link: "/events/community",
    },
  ];

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Book Store"
          />
        </div>
        <button
          className={`hamburger ${isOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          style={{ color: isOpen ? "white" : "black" }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className={`nav-container ${isOpen ? "open" : ""}`}>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item" onClick={toggleDropdown}>
                <Link to="/events" className="nav-links">
                  Events &nbsp;
                  <i className="fas fa-caret-down" />
                </Link>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    {dropdownItems.map((item, index) => (
                      <li key={index} className="nav-sub-item">
                        <Link
                          to={item.link}
                          className="nav-links"
                          onClick={toggleMenu}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/whyus" onClick={toggleMenu}>
                  Why Us?
                </Link>
              </li>
              <li>
                <Link to="/contactUs" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <button className="sign-in-btn">
            <Link className="btn-clr" to="/login">
              Sign In
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
}
