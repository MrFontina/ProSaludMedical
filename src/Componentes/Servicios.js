import React from "react";
import { BsArrowRightCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { reveal } from "../Utility/animation.js";
const Servicios = () => {
  reveal();
  return (
    <div className="div-servicios">
      <div className="div-banner">
        <div>
          <h1 className="reveal2">Atención 24/7</h1>
        </div>
      </div>
      <div className="div-pres-servicios">
        <div className="pres">
          <h2>Membresía Pro Salud Medical</h2>
          <p>
            En Pro Salud Medical te ofrecemos una solucion integral al cuidado
            de tus empleados.
            <br />A traves e nuestra <span>membresía</span>, tus colaboradores
            contaran con acceso a nuestra amplia red de proveedores que brindan
            servicios de alta calidad.
            <br />
          </p>
          <p>
            Nuestros cuatro pilares se enfocan en el area de salud, asistencia
            legal y del hogar, poliza de accidentes y beneficios para el
            bienestar integral de tus colaboradores
          </p>
        </div>
        <div className="div-membresia">
          <div className="div-contrato">
            <h3>
              <span className="h3-span-1">¿Por que</span>
              <br />
              contratar nuestra
              <span className="h3-span-2">
                <br />
                membresía?
              </span>
            </h3>
            <ul>
              <li>
                <div>
                  <BsFillCheckCircleFill />
                </div>
                <p>
                  Impactas en el bienestar de la sociedad atraves de tus
                  colaboradores y sus familias.
                </p>
              </li>
              <li>
                <div>
                  <BsFillCheckCircleFill />
                </div>
                <p>
                  Eleva el compromiso y lealtad del empleado ante la empresa.
                </p>
              </li>
              <li>
                <div>
                  <BsFillCheckCircleFill />
                </div>
                <p>
                  Aumentas la productividad de ellos ya que se sienten
                  respaldados y sin preocupaciones.
                </p>
              </li>
              <li>
                <div>
                  <BsFillCheckCircleFill />
                </div>
                <p>Reduces costos ocasionados por la rotacion del personal.</p>
              </li>
              <li>
                <div>
                  <BsFillCheckCircleFill />
                </div>
                <p>
                  Facilita el reclutamiento de talento para nuevas vacantes.
                </p>
              </li>
            </ul>
          </div>
          <div className="div-secciones">
            <Link className="servicelink" to="/servicios/salud">
              <article className="reveal">
                <div>
                  <img src="../../Images/salud.png" alt="salud" />
                  <h4>Salud</h4>
                </div>
                <div className="arrowico">
                  <BsArrowRightCircleFill />
                </div>
              </article>
            </Link>
            <Link className="servicelink" to="/servicios/asistencias">
              <article className="reveal">
                {" "}
                <div>
                  <img src="../../Images/asistencia.jpg" alt="asistencias" />
                  <h4>Asistencias</h4>
                </div>
                <div className="arrowico">
                  <BsArrowRightCircleFill />{" "}
                </div>
              </article>
            </Link>
            <Link className="servicelink" to="/servicios/polizas">
              <article className="reveal">
                {" "}
                <div>
                  <img src="../../Images/poliza.png" alt="polizas" />
                  <h4>Póliza de Accidentes</h4>
                </div>
                <div className="arrowico">
                  <BsArrowRightCircleFill />{" "}
                </div>
              </article>
            </Link>
            <Link className="servicelink" to="/servicios/beneficios">
              <article className="reveal">
                {" "}
                <div>
                  <img src="../../Images/beneficios.jpg" alt="beneficios" />
                  <h4>Beneficios</h4>
                </div>
                <div className="arrowico">
                  <BsArrowRightCircleFill />{" "}
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
