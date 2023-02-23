import React from "react";
import { BsArrowRightCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

const Servicios = () => {
  return (
    <div className="div-servicios">
      <div className="div-banner">
        <div>
          <h1>Atencion 24/7</h1>
        </div>
      </div>
      <div className="div-pres-servicios">
        <div className="pres">
          <h2>Membresia Pro Salud Medical</h2>
          <p>
            En Pro Salud Medical te ofrecemos una solucion integral al cuidado
            de tus empleados.
            <br />A traves e nuestra <span>membresia</span>, tus colaboradores
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
                membresia?
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
            <article>
              <div>
                <img src="../../images/salud.png" alt="salud" />
                <h4>Salud</h4>
              </div>
              <a href=".">
                <BsArrowRightCircleFill />
              </a>
            </article>
            <article>
              <div>
                <img src="../../images/asistencia.jpg" alt="asistencias" />
                <h4>Asistencias</h4>
              </div>
              <a href=".">
                <BsArrowRightCircleFill />{" "}
              </a>
            </article>
            <article>
              <div>
                <img src="../../images/poliza.png" alt="polizas" />
                <h4>Poliza de Accidentes</h4>
              </div>
              <a href=".">
                <BsArrowRightCircleFill />{" "}
              </a>
            </article>
            <article>
              <div>
                <img src="../../images/beneficios.jpg" alt="beneficios" />
                <h4>Beneficios</h4>
              </div>
              <a href=".">
                <BsArrowRightCircleFill />{" "}
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
