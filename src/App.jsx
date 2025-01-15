import React, { useState, useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order-now/Order";
import Background from "./components/background/Background";
import Hero from "./components/hero-section/Hero";
import About from "./components/about-section/About";
import Menu from "./components/menu-section/Menu";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact-section/Contact";
import Footer from "./components/footer/Footer";
// import "./App.css";

const App = () => {
  // State to manage the visibility of the order popup
  const [isOrderPopupVisible, setIsOrderPopupVisible] = useState(false);

  // Refs for smooth scrolling to sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to specific sections
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to toggle the visibility of the Order modal
  const toggleOrderPopup = () => {
    setIsOrderPopupVisible((prev) => !prev);
  };

  return (
    <div className="App">
      <Background />
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          heroRef,
          aboutRef,
          menuRef,
          testimonialRef,
          contactRef,
        }}
        onOrderClick={toggleOrderPopup} // Pass the function to handle "Order Now"
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={menuRef}>
        <Menu />
      </div>
      <div ref={testimonialRef}>
        <Testimonial />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />

      {/* Show the Order component when isOrderPopupVisible is true */}
      {isOrderPopupVisible && (
        <div className="order-popup-overlay">
          <Order onClose={toggleOrderPopup} /> {/* Pass close function */}
        </div>
      )}
    </div>
  );
};

export default App;
