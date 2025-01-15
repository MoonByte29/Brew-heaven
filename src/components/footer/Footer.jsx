import React from "react";
import logo from "../../assets/brown-logo.png";
import "./Footer.css";
import Button2 from "../button/Button2";

function Footer() {
  return (
    <>
      <div className="footer">

        <div className="contact">
          <img src={logo} alt="" />
        </div>

        <div className="link">
          <p>
            <strong>ADDRESS:</strong> 28 White tower, Street Name New York City,
            USA
          </p>
          <p>
            <strong>TELEPHONE:</strong> +91 987 654 3210
          </p>
          <p>
            <strong>EMAIL:</strong> yourmain@gmail.com
          </p>
        </div>

        <div className="footerMenu">
          <h3>MENU</h3>
          <div className="link">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Testmonial</a>
            </li>
          </div>
        </div>

        <div className="account">
          <h3>ACCOUNT</h3>
          <div className="link">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Testmonial</a>
            </li>
          </div>
        </div>

        <div className="newsletter">
          <h3>NEWSLETTER</h3>
          <div className="link">
            <p>Subscribe by our newsletter and get update protidin.</p>
            <form action="#" className="mail">
              <input type="text" name="email" placeholder="Enter Your Mail" />
              <Button2 type="submit">Subscribe</Button2>
            </form>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          2021 All Rights Reserved By {''}
          <span>Free Html Templates{''}</span> Distributed By {''}<span>ThemeWagon</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
