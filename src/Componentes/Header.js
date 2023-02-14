import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
<<<<<<< HEAD
      <div className="navLeft">
        <Link to='/'>
        <img class="logo" src="../../Images/logo2.png" alt="logo" />
        <h1>Pro Salud Medical</h1>
        </Link>       
      </div>
      <div className="navRight">
        <div className="links">
          <Link to='/nosotros' className="navLink">Nosotros</Link>
          <Link to='/servicios' className="navLink">Servicios</Link>
          <Link to='/proveedores' className="navLink">¿Quieres ser proovedor?</Link>
          <Link to='/contacto' className="navLink">Contacto</Link>
=======
      <div class="div-header">
        <div className="navLeft">
          <Link to="/">
            <img class="logo" src="../../Images/logo2.png" alt="logo" />
            <h1>Pro Salud Medical</h1>
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
            <Link to="/proveedores" className="navLink">
              ¿Quieres ser proovedor?
            </Link>
            <Link to="/contacto" className="navLink">
              Contacto
            </Link>
          </div>
>>>>>>> d8e4050fc903d3d4445b888f8df2e09481bd8b51
        </div>
      </div>
    </header>
  );
};

export default Header;
