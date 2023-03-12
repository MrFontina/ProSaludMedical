import React from 'react'
import ComponenteAsistencias from './ComponenteAsistencias'

function BeneficiosMaternidad() {
  return (
    <>
    <ComponenteAsistencias
    img={{ backgroundImage: `url(${process.env.PUBLIC_URL
        + "/Images/beneficiosmaternidad.jpg"})`}}
    title="Apoyo por maternidad"
    subtitle="Membresía /  Beneficios / Cine 2x1"
    article="Éste beneficio se otorgará solamente a la titular de la membresía posteriormente al parto,
    deberá tener una antigüedad de un año con la membresía para poder solicitar el servicio.
    Se le brindará un apoyo por maternidad de $15,000 pesos.
    Este servicio se brinda solamente una vez al año y se toma en cuenta a partir de un año de
    antigüedad con su membresía dependiendo el plan elegido."

    />
    </>
  )
}

export default BeneficiosMaternidad