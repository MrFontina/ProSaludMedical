import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
const faq = () => {
  return (
    <div>
      <div className="titleMembresia">
        <h4 class="breadcrumb">Preguntas frecuentes</h4>
        <h2 class="title-faq">Preguntas frecuentes</h2>
      </div>
      <div className="div-faq">
        <article class="faq-container">
          <div class="faq-text">
            <p class="faq-res">
              Los mas destacados son asistencia medica, asistencia funeraria,
              apoyo a maternidad y poliza de accidentes personales, entre otros.
            </p>
          </div>
          <div className="faq-front">
            <h2>¿Que servicios manejamos?</h2>
            <MdOutlineExpandMore className="arrow-ico" />
          </div>
        </article>
        <article class="faq-container">
          <div class="faq-text">
            <p class="faq-res">
              La membresia se maneja para una sola persona, es decir, el
              titular; en caso de solicitar un cambio a membresia familiar
              tendrian acceso los participantes
            </p>
          </div>
          <div className="faq-front">
            <h2>¿La membresia es de uso particular?</h2>
            <MdOutlineExpandMore className="arrow-ico" />
          </div>
        </article>
        <article class="faq-container">
          <div class="faq-text">
            <p class="faq-res">
              Si mediante un tramite y un ajuste en el precio dependiendo de los
              familiares que la utilizaran
            </p>
          </div>
          <div className="faq-front">
            <h2>¿Se puede hacer membresia familiar?</h2>
            <MdOutlineExpandMore className="arrow-ico" />
          </div>
        </article>
        <article class="faq-container">
          <div class="faq-text">
            <p class="faq-res">
              Comunicandose al numero de CC en el cual un ejecutivo se encargara
              de agendarle el servicio
            </p>
          </div>
          <div className="faq-front">
            <h2>¿Como solicitar una asistencia?</h2>
            <MdOutlineExpandMore className="arrow-ico" />
          </div>
        </article>
        <article class="faq-container">
          <div class="faq-text">
            <p class="faq-res">
              El tiempo de respuesta para una asistencia es aproximadaamente de
              1(un) dia habil
            </p>
          </div>
          <div className="faq-front">
            <h2>¿Cual es el tiempo de respuesta?</h2>
            <MdOutlineExpandMore className="arrow-ico" />
          </div>
        </article>
      </div>
    </div>
  );
};

export default faq;
