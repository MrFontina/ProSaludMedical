import React from "react";
import ComponenteAsistencias from "./ComponenteAsistencias";

const Polizas = () =>{
    return(
        <>
        <ComponenteAsistencias
        img={{ backgroundImage: `url(${process.env.PUBLIC_URL
            + "/Images/polizaaccidentes.webp"})`}}
            title="Póliza de accidentes"
            subtitle="Membresía / Poliza de accidentes"
        />
        <article className='articleAsistencias'>
            <p>
            Esta póliza tiene un costo de $50 pesos extra al adquirir la membresia.
            </p>
            <p>
            Solo para titular:
            </p>
            <ul>
                <li>Muerte accidental de $100,000</li>
                <li>Pago directo o rembolso de GM por accidente $25,000 deducible $0</li>
            </ul>
        </article>
        </>
    )
}

export default Polizas