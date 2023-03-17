import { React, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { IoIosArrowDropdownCircle } from "react-icons/io";

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
            <Dropdown as={ButtonGroup} class="dropdown-div">
              <Link to="/servicios" className="navLink link2">
                Servicios
              </Link>
              <Dropdown.Toggle split id="dropdown-split-center">
                <IoIosArrowDropdownCircle className="dropdown-btn" />
              </Dropdown.Toggle>

              <Dropdown.Menu class="drop-menu">
                <Dropdown.Item id="ditem">
                  <Link to="/servicios/salud" class="drop-link">
                    Salud
                  </Link>{" "}
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link to="/servicios/asistencias" class="drop-link">
                    Asistencias
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link to="/servicios/polizas" class="drop-link">
                    Polizas de accidentes
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link to="/servicios/beneficios" class="drop-link">
                    Beneficios
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
