import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

function Proveedores() {
  return (
    <>
      <div className="titleMembresia">
        <h4>Membresía / Proveedores</h4>
        <h2>Contacto</h2>
      </div>

      <div className='div-proveedores' >
        <div className='div-form-proveedores'>
          <div className='div-form-proveedores-top'>
           <h3>
          Hazte proveedor
        </h3> 
          </div>
        <div className='div-form-proveedores-bottom'>
           <Form className='formForm'>
          
          <Form.Group className="mb-3">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder='Escriba su nombre'></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo eléctronico</Form.Label>
            <Form.Control type="email" placeholder="Escriba su correo eléctronico" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" placeholder="Teléfono" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Servicios que ofrece:</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" placeholder='Escribe un mensaje.' rows="8"/>


          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>¿Quieres que te contactemos por Whatsapp?</Form.Label>
            <Form.Check type="checkbox" label="Si" />
            <Form.Check type="checkbox" label="No" />
          </Form.Group>
          <Button variant="success" type="submit" id="boton-proveedor">
            Enviar
          </Button>
        </Form>
        </div>
       

</div>

      </div>

    </>

  )
}

export default Proveedores