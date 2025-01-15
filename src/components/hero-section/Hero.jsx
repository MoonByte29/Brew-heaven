import { useState, useEffect } from "react";
import logo from '../../assets/cup-logo.png'

import bg from "../../assets/bg2.jpg";
import cup from "../../assets/cup.png";
import "./Hero.css";

const Hero = () => {
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = document.querySelector(".hero").offsetHeight;
      const newScaleFactor = Math.min(1, Math.max(0.7, 1 - scrollPosition / (heroHeight * 2)));
      setScaleFactor(newScaleFactor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="hero"
        style={{
          background: ` linear-gradient(45deg ,rgba(0, 0, 0, 0.219),rgba(165, 42, 42, 0.29),rgba(255, 255, 255, 0.192)),url(${bg})`,
          backgroundSize: "1550px",
          // objectFit:'contain',
          backgroundPosition: "center",
          position: "relative",
          height: "600px",
          width: "100%",
        }}
      >
        <h2
          style={{
            position: "absolute",
            top: "45%",
            left: "20%",
            fontSize: "68px",
            color: "var(--light-cream)",
            textShadow: "2px 2px black",
          }}
        >
          BREW HEAVEN
        </h2>

        <p
          style={{
            width:'500px',
            position: "relative",
            top: "57%",
            left: "20%",
            fontSize: "15px",
            color: "var(--light-cream)",
            textShadow: "1px 1px black",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, Eos
          assumenda ipsam quod veniam quos earum ex! Tempore corrupti soluta
          nobis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptas?
        </p>
        <div
          className="cup"
          style={{
            transform: `scale(${scaleFactor})`,
          }}
        >
          <img src={logo} alt="" style={{
            width: "100px",
            height: "100px",
            position:'absolute',
            right:'21%',
            top:'450px  ',
            zIndex:2,
          }}/>
          <img src={cup} alt="cup" style={{
            position:"absolute"
          }} />
        </div>
      </div>
    </>
  );
};

export default Hero;
