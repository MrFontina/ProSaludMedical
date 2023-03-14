import React from "react";
import ReviewList from "./ReviewList";

import { reveal } from "../Utility/animation.js";

const Home = () => {
  reveal();

  return (
    <div class="container-home">
      <div class="banner">
        <div class="banner-bg">
          <div class="banner-presentacion reveal2">
            <h2>PRO SALUD MEDICAL</h2>
            <h3>El programa de asistencias mas completo de Mexico</h3>
            <p>¿Quieres brindarle a tus empleados los mejores beneficios?</p>
            <button class="banner-button">
              <a href=".">Conocer servicios</a>
            </button>
          </div>
        </div>
      </div>
      <div class="div-presentacion">
        <p>
          <span>
            Tu bienestar personal y el de tus colaboradores es importante para
            nosotros,
          </span>
          <br /> por eso hemos reunido a los mejores profesionales del campo de
          la salud y servicios complementarios que les permitira sentirse
          respaldados ante cualquier eventualidad
        </p>
      </div>
      <div class="div-proveedores">
        <h2>Nuestra Red de Proveedores</h2>
        <section>
          <article class="reveal">
            <img alt="" src="../../Images/medicos_grupo.png" />
            <p>Mas de 5000 proveedores de salud en todo el pais</p>
          </article>
          <article class="reveal">
            <img alt="" src="../../Images/hospital.jpg" />
            <p>Convenio con mas de 300 hospitales</p>
          </article>
          <article class="reveal">
            <img alt="" src="../../Images/analisis.jpg" />
            <p>Asociados a mas de 200 laboratorios y gabinetes</p>
          </article>
          <article class="reveal">
            <img alt="" src="../../Images/Urologia.png" />
            <p>Red medica con mas de 3000 profesionales</p>
          </article>
          <article class="reveal">
            <img alt="" src="../../Images/dentista.png" />
            <p>Servicios odontologicos</p>
          </article>
          <article class="reveal">
            <img alt="" src="../../Images/vial.jpg" />
            <p>Variedad de oficios</p>
          </article>
        </section>
      </div>
      <div className="div-afiliados">
        <ReviewList />
      </div>
      <div className="div-app">
        <div class="div-mockup">
          <img
            class="mockup reveal"
            src="../../Images/appmockup.png"
            alt="app"
          />
        </div>
        <div class="app-info">
          <h2>PRO SALUD MEDICAL</h2>
          <p>
            Descarga nuestra aplicacion y descubre todo lo que puedes hacer.
          </p>
          <div className="app-img">
            <img src="../../Images/googleapp.png" alt="googleapp" />
            <img src="../../Images/appleapp.png" alt="appleeapp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
