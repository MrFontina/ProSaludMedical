import React from 'react'
import ComponenteAsistencias from './ComponenteAsistencias'

function AsistenciaVial() {
    return (
        <>
            <ComponenteAsistencias
                img={{
                    backgroundImage: `url(${process.env.PUBLIC_URL
                        + "/Images/Asistencias/bannerasistenciavial.jpg"})`
                }}
                title="Asistencia Vial"
                subtitle="Membresía /  Asistencias / Asistencia legal"
            />
            <article className='articleAsistencias'>
                <p>En caso de algún percance, el titular podrá solicitar un servicio al año de:
                </p>
                <ul>
                    <li>Grúa</li>
                    <li>Paso de corriente</li>
                    <li>Cambio de llanta</li>
                    <li>Envío de gasolina</li>
                </ul>
            </article>
        </>
    )
}

export default AsistenciaVial