import React from 'react'
import ComponenteAsistencias from './ComponenteAsistencias'

function AsistenciaPsicologica() {
  return (
    
    <ComponenteAsistencias
    img={{ backgroundImage: `url(${process.env.PUBLIC_URL
        + "/Images/Asistencias/bannerpsicologica.webp"})`}}
    title="Asistencia Psicológica"
    subtitle="Membresía /  Asistencias / Asistencia psicológica"
    article="En caso de que el usuario lo requiera, puede solicitar asistencia que se brindara los 365 días del año en un horario de 9:00 a.m. a 20:00 p.m. se le brindará orientación a distancia a
    problemáticas comunes como: depresión, violencia, adicciones, divorcios, etc.
    La asistencia se otorga de manera anónima, sin recetar medicamentos, ni emitir diagnóstico
    alguno."
    
    />
    
  )
}

export default AsistenciaPsicologica