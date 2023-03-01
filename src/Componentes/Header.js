import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';




const Header = () => {

  

  return (
    <>

<Navbar className="navBar" expand="lg">
      <Container >
      <div className="navLeft">
        <Navbar.Brand>
        <Link to="/">
                <img className="logo" src="../../Images/logo3.png" alt="logo" />
              </Link>
        </Navbar.Brand>
        </div>
        <div className="navRight">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <div className="links">
          <Link to="/nosotros" className="navLink">
                    Nosotros
                  </Link>
                  <Link to="/servicios" className="navLink">
                    Servicios
                  </Link>
                  <Link to="/proveedores" className="navLink">
                  <Button variant="success" className="botonProveedor">¿Quieres ser proveedor?</Button>                    
                  </Link>
                  <Link to="/contacto" className="navLink">
                    Contacto
                  </Link>
             </div>
            
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>


      {/* <Navbar expand="lg" className="navBar">
        <Container>
          <div className="navLeft">
            <Navbar.Brand>
              <Link to="/">
                <img className="logo" src="../../Images/logo3.png" alt="logo" />
              </Link>
            </Navbar.Brand>
          </div>
          <div className="navRight">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="links">
                  <Link to="/nosotros" className="navLink">
                    Nosotros
                  </Link>
                  <Link to="/servicios" className="navLink">
                    Servicios
                  </Link>
                  <Link to="/proveedores" className="navLink">
                  <Button variant="success" className="botonProveedor">¿Quieres ser proveedor?</Button>                    
                  </Link>
                  <Link to="/contacto" className="navLink">
                    Contacto
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar> */}
    </>

    
  );
};

export default Header;
