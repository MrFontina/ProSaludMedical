import React from 'react'
import ComponenteAsistencias from './ComponenteAsistencias'

function AsistenciaLegal() {
  return (
   <ComponenteAsistencias
   img={{ backgroundImage: `url(${process.env.PUBLIC_URL
    + "/Images/Asistencias/bannerasistencialegal.png"})`}}
    subtitle="Membresía /  Asistencias / Asistencia legal"
    title="Asistencia Legal"
    article="En caso de que se requiera, se otorgara asesoría vía telefónica, no se llevara un caso real como
    tal, solo se le asesora en dudas que pueda tener, de lunes a viernes en un horario de 9:00 a.m.
    a 18:00 p.m."
   />
  )
}

export default AsistenciaLegal