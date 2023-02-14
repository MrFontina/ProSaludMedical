import React from "react";
import "../Styles/Componentes/home.scss";
const Home = () => {
  return (
    <div class="container-home">
      <div class="banner">
        <div class="banner-presentacion">
          <h2>PRO SALUD MEDICAL</h2>
          <h3>El programa de asistencias mas completo de Mexico</h3>
          <p>Quieres brindarle a tus empleados los mejores beneficios?</p>
          <button class="banner-button">
            <a href=".">Conocer servicios</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
