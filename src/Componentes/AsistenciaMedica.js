import React from 'react'
import ComponenteAsistencias from './ComponenteAsistencias'

function AsistenciaMedica() {
    return (
        <ComponenteAsistencias
        img={{ backgroundImage: `url(${process.env.PUBLIC_URL
            + "/Images/Asistencias/bannerasistenciamedica.jpg"})`}}
        subtitle="Membresía /  Asistencias / Asistencia médica"
        title="Asistencia médica"
        article="Orientación telefónica o por video llamada sin costo sobre problemas menores, para atender
        síntomas y molestias, dudas en relación con la utilización de medicamentos (en ningún
        momento se emitirá una prescripción médica) o apoyo en situaciones cuya solución no requiere
        la presencia de un médico. Las orientaciones médicas son recomendaciones, es
        responsabilidad de los pacientes su aplicación y seguimiento."
        />
    )
}

export default AsistenciaMedica