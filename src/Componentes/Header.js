import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="div-header">
        <div className="navLeft">
          <Link to="/">
            <img className="logo" src="../../Images/logo3.png" alt="logo" />
            {/* <h1>Pro Salud Medical</h1> */}
          </Link>
        </div>
        <div className="navRight">
          <div className="links">
            <Link to="/nosotros" className="navLink">
              Nosotros
            </Link>
            <Link to="/servicios" className="navLink">
              Servicios
            </Link>
            <Link to="/proveedores" className="navLink proveedor">
              ¿Quieres ser proveedor?
            </Link>
            <Link to="/contacto" className="navLink">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
