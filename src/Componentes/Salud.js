import React from "react";
import CardHover from "./CardHover";


const Salud = () => {
    return (
        <>
            <div className="titleMembresia">
                <h4>Membresía / Salud</h4>
                <h2>Salud</h2>
            </div>
            <div className="containerCardsMembresia">
                <CardHover 
                img="../../Images/Salud/redmedica.png" 
                alt="red médica" 
                title="Red Médica"
                parrafo="Consultas con especialistas sin costo o a costo preferencial según el plan que se haya
                contratado por parte del cliente." />
                <CardHover 
                title="Medicos a domicilio" 
                img="../../Images/Salud/medicodomicilio.jpg"
                parrafo="Envío de un médico general a su domicilio o al lugar donde se encuentre al momento de solicitarlo."
                />
                <CardHover 
                title="Odontología" 
                alt="Odontología" 
                img="../../Images/Salud/odontologia.png"
                parrafo="Consultas con especialistas y descuentos en tratamientos dentales, además de limpieza dental gratuita." />
                <CardHover 
                title="Laboratorio / Check-Up" 
                alt="Laboratorio / Check-Up" 
                img="../../Images/Salud/laboratorio.jpg"
                parrafo="Estudios de laboratorio, Química sanguínea de 3 elementos
                Biometría hemática, Examen general de
                orina, Factor y grupo rh." />
                <CardHover 
                title="Ambulancia" 
                alt="Ambulancia" 
                img="../../Images/Salud/ambulancia.jpeg"
                parrafo="Servicio de
                ambulancia disponible en todo momento
                para urgencias los 365 días del año, con
                cobertura en toda la república mexicana."
                />

            </div>

        </>



    )
}

export default Salud