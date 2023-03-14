import React from 'react'
import ComponenteAsistencias from './ComponenteAsistencias'

function BeneficiosCine() {
  return (
    <>
    <ComponenteAsistencias
    img={{ backgroundImage: `url(${process.env.PUBLIC_URL
        + "/Images/beneficioscine.jpg"})`}}
    title="Cine 2x1"
    subtitle="Membresía /  Beneficios / Cine 2x1"
    
    />
    <article className='articleAsistencias'>
    Este beneficio se aplica de Lunes a Viernes para salas tradicionales, el usuario pagará un boleto precio regular y se le regala el 2do boleto. Presentando el número de folio el cual se entregará como máximo 1 por usuario, este se podrá obtener al comunicarse el titular a la línea de atención telefónica o mediante la app el cual validará que el usuario es acreedor al servicio y se le enviará el N° de folio a su correo electrónico para que lo presente impreso en la taquilla.
        <ul>
            <li>No aplica en cine VIP, IMAX, 3D, 4DX, Platino, Macro XE</li>
            <li>El beneficio lo posee el portador del folio y se utiliza 1 sola vez</li>
            <li>Aplica la promoción cada 15 días</li>
            <li>No aplica con otras promociones, premieres, estrenos o contenido alternativo</li>
            <li>No aplica en reservaciones en línea o Cineticket</li>
            <li>No aplica en reservaciones en línea o Cineticket Sujeto a disponibilidad</li>
        </ul>
    </article>
    </>
  )
}

export default BeneficiosCine