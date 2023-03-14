import React from "react";
import CardMembresia from "./CardMembresia";


function Beneficios(){
    return(
        <>
        <div className="titleMembresia">
                <h4>Membresía / Beneficios</h4>
                <h2>Beneficios</h2>
            </div>
            <div className="containerCardsBeneficios">
                <CardMembresia img="../../Images/maternidad.jpg" alt="Apoyo por maternidad" title="Apoyo por maternidad" link="/servicios/beneficios/maternidad" />
                <CardMembresia title="Cine 2x1" img="../../Images/cine.jpg" alt="cine" link="/servicios/beneficios/cine"/>               
            </div>
        </>
    )
}

export default Beneficios