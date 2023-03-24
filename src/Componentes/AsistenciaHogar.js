import React from "react";
import ComponenteAsistencias from "./ComponenteAsistencias";

function AsistenciaHogar() {
  return (
    <>
      <ComponenteAsistencias
        img={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/Images/Asistencias/bannerasistenciahogar.jpg"
          })`,
        }}
        subtitle="Membresía /  Asistencias / Asistencia al hogar"
        title="Asistencia al hogar"
      />
      <article className="articleAsistencias">
        <p>Puede acceder a los distintos servicios para el hogar como:</p>

        <p className="asistencia-subtitle">Servicio de Plomería</p>
        <p>
          Para las fallas por rotura o fuga en las instalaciones hidráulicas y
          sanitarias que necesiten de reparación y puedan causar daño al
          inmueble (casa o departamento) en donde resida el titular.
        </p>

        <p className="asistencia-subtitle">Servicio de Cerrajería</p>
        <p>
          Se aplica a la apertura o reparación de chapas y cerraduras dañadas
          por descomposturas, robo o accidente en las puertas del inmueble (casa
          o departamento) en donde resida el titular.
        </p>

        <p className="asistencia-subtitle">Servicio de Herrería</p>
        <p>
          Instalación, reparación o fabricación de puertas, ventanas, canceles,
          barandales, escaleras y otras piezas utilizadas en la construcción,
          según especificaciones de planos, dibujos o diseños.
        </p>

        <p className="asistencia-subtitle">Servicio eléctrico</p>

        <p>
          Reparación o cambio de tableros eléctrico, switch de cuchillas,
          interruptores o fusibles dañados por un corto circuito o alguna
          sobrecarga, solo en las partes que pertenezca a la instalación
          eléctrica del inmueble (casa o departamento) de permanencia del
          titular. Restablecimiento del servicio de energía eléctrica a causa de
          un corto circuito cuando la falla tiene origen dentro del inmueble
          (casa o departamento) del titular.
        </p>
      </article>
    </>
  );
}

export default AsistenciaHogar;
