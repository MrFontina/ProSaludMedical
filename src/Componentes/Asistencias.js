import React from "react";
import CardMembresia from "./CardMembresia";


const Asistencias = () => {
    return (
        <>
            <div className="titleMembresia">
                <h4>Membresía / Asistencias</h4>
                <h2>Asistencias</h2>
            </div>
            <div className="containerCardsMembresia">
                <CardMembresia img="../../Images/Asistencias/medica.png" alt="asistencia médica" title="Asistencia médica" link="/servicios/asistencias/asistenciamedica"/>
                <CardMembresia img="../../Images/Asistencias/hogar.jpg" alt="asistencia del hogar" title="Asistencia del hogar" link="/servicios/asistencias/asistenciahogar"/>
                <CardMembresia img="../../Images/Asistencias/legal.jpg" alt="asistencia legal" title="Asistencia legal" link="/servicios/asistencias/asistencialegal"/>
                <CardMembresia img="../../Images/Asistencias/vial.jpg" alt="asistencia vial" title="Asistencia vial" link="/servicios/asistencias/asistenciavial"/>
                <CardMembresia img="../../Images/Asistencias/funeraria.jpg" alt="asistencia funeraria" title="Asistencia funeraria" link="/servicios/asistencias/asistenciafuneraria"/>
                

            </div>

        </>



    )
}

export default Asistencias