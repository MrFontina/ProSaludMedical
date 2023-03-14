import { React, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";

const Header = () => {
  const [burga, setburga] = useState(false);
  const toggleBurga = () => {
    if (burga) {
      setburga(false);
    } else {
      setburga(true);
    }
  };
  return (
    <Navbar collapseOnSelect expand="md" className="navBar-cont">
      <Container fluid className="cont">
        <Navbar.Brand href="#home">
          {" "}
          <Link to="/">
            <div className="navLeft"></div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <button
            onClick={toggleBurga}
            class={`hamburger hamburger--spin navbtn ${
              burga === true ? "is-active" : null
            }`}
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <Link to="/nosotros" className="navLink">
              Nosotros
            </Link>
            <Link to="/servicios" className="navLink">
              Servicios
            </Link>
            <Link to="/proveedores" className="navLink prove">
              <Button variant="success" className="botonProveedor">
                ¿Quieres ser proveedor?
              </Button>
            </Link>
            <Link to="/contacto" className="navLink">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
