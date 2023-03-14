import React from "react";
import { reveal } from "../Utility/animation";


const Nosotros = () => {
  reveal();
  return (
    <div className="contenedor-nosotros">
      <div className="nosotros-left">
        <div className="nosotros-card">
          <div className="card-left">
            <img src="../../Images/flecha.png" alt=""></img>
          </div>

          <div className="card-content">
            <h5>Misión</h5>
            <p>
              Crear un valor agregado a nuestros clientes y socios comerciales
              ofreciendo soluciones médicas integrales e innovadoras a precios
              accesibles.
            </p>
          </div>
        </div>
        <div className="nosotros-card">
          <div className="card-left">
            <img src="../../Images/ojo.png" alt=""></img>
          </div>
          <div className="card-content">
            <h5>Visión</h5>
            <p>
              Lograr un posicionamiento top en el mercado de servicios de
              asistencias y salud a través de una red de profesionales
              comprometidos a brindar la mejor experiencia a nuestros clientes
              con tecnología y expertise.
            </p>
          </div>
        </div>
        <div className="nosotros-card">
          <div className="card-left">
            <img src="../../Images/valores.png" alt=""></img>
          </div>
          <div className="card-content">
            <h5>Valores</h5>
            <p>
              Accesibilidad - Excelencia -Colaboración Responsabilidad -
              Innovación - Confianza
            </p>
          </div>
        </div>
      </div>
      <div className="nosotros-right">
        <img
          src="../../Images/mediconosotros.png"
          alt=""
          className="doctorNosotros"
        ></img>
      </div>
    </div>
  );
};

export default Nosotros;
