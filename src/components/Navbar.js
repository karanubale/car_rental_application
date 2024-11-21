import React from 'react';
import '../styles/Navbar.css';
import contactImage from '../images/contact.png';
import down from "../images/download.png";
import profile from "../images/profile.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img
                    src="https://s3-alpha-sig.figma.com/img/c50d/bfaa/bfb571c0bb9d27b31f47b87385029090?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRl5ZPBv9ZOglzk2AJGWVe56Pl-Szl41wG-GjOLJs-Uoi21uF9~fhYTDoCC6Vfqi6wDfPKbc4ogBgGq2dI9AXwGvzri2Bk-bnEUcHbo3Cf6aVAjHUHvLuLQG7DA76hpA6grTAQoK8SLiPzq0lt1BYVZ~Cdsg6EW9-rZ4S1S9swHRlfqkm~dIhr9c7yspAG22nATIF4TQTX6pOttZaVeu2fvBztd05GuVVNvg9zFQlvMHZmFeaC-W0DwLZ2ISVry5LOv00nrPFOdwtgyye~zPgTvEyyGPCbLMYN891gsxR-uxSpqOIFLhMEf-y1hkRfPYL~i-dI-Av5SdMeRlkeVDLA__"
                    
                    alt="Yatri Logo"
                />
            </div>
            <div className="navbar-contact">
                <img src={contactImage} alt="Contact" />
            </div>
            <div className="navbar-user">
                <div className="navbar-item down">
                    <img src={down} alt="Download App" />
                    <p>Download app</p>
                </div>
                <div className="navbar-item profile">
                    <img src={profile} alt="Profile" />
                    <p>Hi, Ravi</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
