import { React } from "react";

function Proveedores() {
  return (
    <>
      <div className="titleMembresia">
        <h4>Membresía / Proveedores</h4>
        <h2>Proveedores</h2>
      </div>

      <div className="div-contacto">
        <div className="div-form-proveedores-top">
          <h3>Hazte proveedor</h3>
        </div>
        <form
          id="form-container"
          action={`MAILTO:pro@saludmedical.com.mx?subject=Proveedor Pro Salud Medical`}
          method="post"
          enctype="text/plain"
        >
          <div class="group">
            <input className="input-btn" type="text" name="Nombre" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label className="label-btn">Escribe tu nombre completo</label>
          </div>
          <div class="group">
            <input className="input-btn" type="email" name="Email" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label className="label-btn">Escribe tu correo electronico</label>
          </div>
          <div class="group">
            <input
              className="input-btn"
              type="number"
              name="Telefono"
              required
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label className="label-btn">Telefono</label>
          </div>
          <div class="group">
            <textarea
              type="text"
              name="Que servicios ofrece?"
              required
              class="message-input input-btn"
            />
            <span class="highlight"></span>
            <label className="label-btn">¿Que servicios ofrece?</label>
          </div>
          <p>¿Quieres que te contactemos por Whatsapp?</p>
          <div className="radio-btn">
            <div>
              <input
                type="radio"
                id="Si"
                name="Quieres que te contactemos por Whatsapp?"
                value="Si"
                checked
              />
              <label for="Si">Si</label>
            </div>
            <div>
              <input
                type="radio"
                id="No"
                name="Quieres que te contactemos por Whatsapp?"
                value="No"
              />
              <label for="No">No</label>
            </div>
          </div>
          <div>
            <button class="submit-btn" type="submit" value="Send">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Proveedores;
