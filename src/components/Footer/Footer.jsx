import FooterLink from "./FooterLink";

import logo from "../../assets/logo.jpg";
import fb from "../../assets/fb.jpg";
import twitter from "../../assets/twitter.jpg";
import yt from "../../assets/yt.jpg";
import pinterest from "../../assets/pinterest.jpg";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />

          <div className="social-icons">
            <img src={fb} alt="fb" />
            <img src={twitter} alt="twitter" />
            <img src={yt} alt="yt" />
            <img src={pinterest} alt="pinterest" />
          </div>
        </div>

        
        <FooterLink
          links={[
            "About Us",
            "Our Pricing",
            "Our Gallery",
            "Appointment",
            "Privacy Policy",
          ]}
        />

        <FooterLink
          links={[
            "Orthology",
            "Neurology",
            "Dental Care",
            "Opthalmology",
            "Cardiology",
          ]}
        />

        <FooterLink
          links={[
            "About Us",
            "Our Pricing",
            "Our Gallery",
            "Appointment",
            "Privacy Policy",
          ]}
        />

      </div>

      <div className="footer-divider"></div>

      <p className="copyright">
        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
      </p>

    </footer>
  );
}

export default Footer;