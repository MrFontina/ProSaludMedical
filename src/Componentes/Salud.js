import React from "react";
import CardMembresia from "./CardMembresia";


const Salud = () => {
    return (
        <>
            <div className="titleMembresia">
                <h4>Membresía / Salud</h4>
                <h2>Salud</h2>
            </div>
            <div className="containerCardsMembresia">
                <CardMembresia img="../../Images/Salud/redmedica.png" alt="red médica" title="Red Médica" />
                <CardMembresia title="Medicos a domicilio" img="../../Images/Salud/medicodomicilio.jpg" />
                <CardMembresia title="Odontología" alt="Odontología" img="../../Images/Salud/odontologia.png" />
                <CardMembresia title="Laboratorio / Check-Up" alt="Laboratorio / Check-Up" img="../../Images/Salud/laboratorio.jpg" />
                <CardMembresia title="Ambulancia" alt="Ambulancia" img="../../Images/Salud/ambulancia.jpeg" />

            </div>

        </>



    )
}

export default Salud