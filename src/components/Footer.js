import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://s3-alpha-sig.figma.com/img/c50d/bfaa/bfb571c0bb9d27b31f47b87385029090?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRl5ZPBv9ZOglzk2AJGWVe56Pl-Szl41wG-GjOLJs-Uoi21uF9~fhYTDoCC6Vfqi6wDfPKbc4ogBgGq2dI9AXwGvzri2Bk-bnEUcHbo3Cf6aVAjHUHvLuLQG7DA76hpA6grTAQoK8SLiPzq0lt1BYVZ~Cdsg6EW9-rZ4S1S9swHRlfqkm~dIhr9c7yspAG22nATIF4TQTX6pOttZaVeu2fvBztd05GuVVNvg9zFQlvMHZmFeaC-W0DwLZ2ISVry5LOv00nrPFOdwtgyye~zPgTvEyyGPCbLMYN891gsxR-uxSpqOIFLhMEf-y1hkRfPYL~i-dI-Av5SdMeRlkeVDLA__" width="200px" height="65px" alt="" />
        </div>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
        <div className="footer-newsletter">
          <div className="newsletter-input">
          <p >Newsletter</p>
            <input type="email" placeholder="Email" />
            <button>&rarr;</button>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>All Copyrights are reserved by YATRI CABS</p>
      </div>
    </footer>
  );
};

export default Footer;
