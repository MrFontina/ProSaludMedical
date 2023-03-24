import React from "react";
import ComponenteAsistencias from "./ComponenteAsistencias";

function AsistenciaNutricional() {
  return (
    <>
<<<<<<< HEAD
      <ComponenteAsistencias
        img={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Images/nutricionista.jpg"
          })`,
          backgroundPosition: "0px -170px",
        }}
        className="nutri"
        title="Asistencia Nutricional"
        subtitle="Membresía /  Asistencias / Asistencia nutricional"
      />
      <article className="articleAsistencias">
=======
    <ComponenteAsistencias
     img={{ backgroundImage: `url(${process.env.PUBLIC_URL
        + "/Images/Asistencias/bannernutricional2.jpg"})`}}
    title="Asistencia Nutricional"
    subtitle="Membresía /  Asistencias / Asistencia nutricional"    
    />
    <article className='articleAsistencias'>
>>>>>>> 85d926e0fa4ddde6e770bfea680a765ca07c5ecc
        <p>
          En caso de que el usuario lo requiera, un nutriólogo le proporcionará
          de manera limitada la asistencia sobre:
        </p>
        <ul>
          <li>Dudas en la alimentación</li>
          <li>Tipos de suplementos nutricionales según sus necesidades</li>
          <li>Orientación en caso de desórdenes alimenticios</li>
        </ul>
        <p>
          Esta asistencia se brindará en un horario de lunes a Domingo de 9:00
          a.m. a 20:00 p.m.
        </p>
      </article>
    </>
  );
}

export default AsistenciaNutricional;
