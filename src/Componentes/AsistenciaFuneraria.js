import React from 'react'
import ComponenteAsistencias from './ComponenteAsistencias'

function AsistenciaFuneraria() {
  return (
    <>
     <ComponenteAsistencias
    img={{ backgroundImage: `url(${process.env.PUBLIC_URL
        + "/Images/Asistencias/bannerasistenciafuneraria.jpg"})`}}
    title="Asistencia Funeraria"
    subtitle="Membresía /  Asistencias / Asistencia funeraria"
    />
    <article className='articleAsistencias'>
    En el desafortunado caso de que el titular de fallezca, estaremos
cubriendo los beneficios de su membresía.
Que cuenta con:  
    </article>
    <div className='funerarias'>
        <div className='funerariaLeft'>
        <h4>Cremación</h4>
        <ul>
            <li>Recolección del cuerpo</li>
            <li>Arreglo estético del cuerpo</li>
            <li>Ataúd para velación</li>
            <li>Sala de velación</li>
            <li>Servicio de cremación</li>
            <li>Urna</li>
            <li>Gestión de trámites</li>
        </ul>
        </div>
        <div className='funerariaRight'>
        <h4>Inhumación</h4>
        <ul>
            <li>Recolección del cuerpo</li>
            <li>Servicio de embalsamado</li>
            <li>Arreglo estético del cuerpo</li>
            <li>Sala de velación</li>
            <li>Ataúd metálico</li>
            <li>Gestión de trámites</li>
            <li>Traslado en carroza para inhumación</li>
        </ul>
        </div>
    </div>
    
    </>
   
    )
}

export default AsistenciaFuneraria