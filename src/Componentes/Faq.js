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
              Los más destacados son asistencia médica, asistencia funeraria,
              apoyo a maternidad y póliza de accidentes personales, entre otros.
            </p>
          </div>
          <div className="faq-front">
            <h2>¿Qué servicios manejamos?</h2>
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
              Si, mediante un trámite donde se ajustará el precio acorde a la
              cantidad de miembros a afiliar a la cobertura
            </p>
          </div>
          <div className="faq-front">
            <h2>¿Se puede hacer membresía familiar?</h2>
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
              El tiempo de respuesta para una asistencia es aproximadamente de
              1(un) día hábil
            </p>
          </div>
          <div className="faq-front">
            <h2>¿Cuál es el tiempo de respuesta?</h2>
            <MdOutlineExpandMore className="arrow-ico" />
          </div>
        </article>
      </div>
    </div>
  );
};

export default faq;
