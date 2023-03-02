import React from "react";
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
              <img
                src="../../Images/Instagram.png"
                alt="instagram"
                className="redIcon"
              ></img>
            </a>
            <a href="https://www.facebook.com/Pro-Salud-Medical-102057139176033">
              <img
                src="../../Images/Facebook.png"
                alt="facebook"
                className="redIcon"
              ></img>
            </a>
            <a href="https://www.linkedin.com/company/pro-salud-medical/">
              <img
                src="../../Images/LinkedIn.png"
                alt="linkedin"
                className="redIcon"
              ></img>
            </a>
            <a href="https://www.tiktok.com/@prosalmedic">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
