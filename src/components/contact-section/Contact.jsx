import React from "react";
import "./Contact.css";
import Button2 from "../button/Button2";
import Lottie from "react-lottie";
import animationData from "../../lotties/Contact-lottie.json";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  return (
    <>
      <div className="contact-page" id="contact">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-icons">
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
          <form className="details">
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Enter Email" />
            <input type="number" placeholder="Enter Contact No" />
            <textarea placeholder="Enter Message" />
            <div className="contact-btn">
              <div className="social">
                <a href="" className="social-icon" id="ig">
                <FaInstagram />
                </a>
                <a href="" className="social-icon" id="fb">
                  <FaFacebook />
                </a>
                <a href="" className="social-icon" id="tw">
                  <FaXTwitter />
                </a>
                <a href="" className="social-icon" id="wa">
                  <FaWhatsapp />
                </a>
              </div>
              <div className="send">
                <Button2>Send</Button2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
