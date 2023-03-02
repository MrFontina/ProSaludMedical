import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="div-footer">
        <div className="footLeft">
          <p>Preguntas Frecuentes</p>
          <p>Aviso de Privacidad</p>
        </div>
        <div className="footRight">
          <p>Siguenos en:</p>
          <div className="redes">
            <a href="https://www.instagram.com/prosalud_medical/">
              <BsInstagram className="redIcon" />
              {/* <img src="../../Images/Instagram.png" alt="instagram" className="redIcon"></img> */}
            </a>
            <a href="https://www.facebook.com/Pro-Salud-Medical-102057139176033">
              <BsFacebook className="redIcon" />
              {/* <img src="../../Images/Facebook.png" alt="facebook" className="redIcon"></img> */}
            </a>
            <a href="https://www.linkedin.com/company/pro-salud-medical/">
              <BsLinkedin className="redIcon" />
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
