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
                <CardMembresia img="../../Images/Asistencias/medica.png" alt="asistencia médica" title="Asistencia médica" />
                <CardMembresia img="../../Images/Asistencias/hogar.jpg" alt="asistencia del hogar" title="Asistencia del hogar" />
                <CardMembresia img="../../Images/Asistencias/legal.jpg" alt="asistencia legal" title="Asistencia legal" />
                <CardMembresia img="../../Images/Asistencias/vial.jpg" alt="asistencia vial" title="Asistencia vial" />
                <CardMembresia img="../../Images/Asistencias/funeraria.jpg" alt="asistencia funeraria" title="Asistencia funeraria" />
                

            </div>

        </>



    )
}

export default Asistencias