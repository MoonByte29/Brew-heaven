import React from "react";
import Button from "../button/Button"; // Assuming you have a Button component
import logo from "../../assets/brown-logo.png";
import "./Navbar.css";

const Navbar = ({ scrollToSection, refs, onOrderClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li onClick={() => scrollToSection(refs.heroRef)}>Home</li>
        <li onClick={() => scrollToSection(refs.aboutRef)}>About</li>
        <li onClick={() => scrollToSection(refs.menuRef)}>Menu</li>
        <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>
        {/* Trigger the Order modal */}
        <Button onClick={onOrderClick}>Order Now</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
