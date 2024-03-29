import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="div-footer">
        <div className="footLeft">
          <Link to="/faq" className="navLink">
            Preguntas Frecuentes
          </Link>
          <Link to="/avisodeprivacidad" className="navLink">
            Aviso de Privacidad
          </Link>
        </div>
        <div className="footRight">
          <p>Siguenos en:</p>
          <div className="redes">
            <a href="https://www.instagram.com/prosalud_medical/">
              <AiFillInstagram className="redIcon" />
              {/* <img src="../../Images/Instagram.png" alt="instagram" className="redIcon"></img> */}
            </a>
            <a href="https://www.facebook.com/Pro-Salud-Medical-102057139176033">
              <FaFacebookF className="redIcon" />
              {/* <img src="../../Images/Facebook.png" alt="facebook" className="redIcon"></img> */}
            </a>
            <a href="https://www.linkedin.com/company/pro-salud-medical/">
              <TiSocialLinkedin className="redIcon" />
            </a>
            <a href="https://www.tiktok.com/@prosalmedic">
              <FaTiktok className="redIcon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
