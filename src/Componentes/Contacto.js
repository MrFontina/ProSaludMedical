import React from "react";
import { useState } from "react";

const Contacto = () => {
  const [contacto, setcontacto] = useState(true);
  const [empresa, setempresa] = useState(false);

  const resetForm = () => {
    document.getElementById("form-container").reset();
  };
  const handleContacto = () => {
    setcontacto(true);
    setempresa(false);
    resetForm();
  };
  const handleEmpresa = () => {
    setcontacto(false);
    setempresa(true);
    resetForm();
  };
  return (
    <>
      <div className="title-contacto">
        <h4>Contacto</h4>
        <h2>Contacto</h2>
      </div>
      <div className="div-contacto">
        <div className="div-contacto">
          <div className="div-btn">
            <button
              className={`btn-input ${
                contacto === true ? "btn-persona active" : "btn-empresa"
              }`}
              onClick={handleContacto}
            >
              Persona
              <span class="bar2"></span>
            </button>
            <button
              className={`btn-input ${
                empresa === true ? "btn-persona active" : "btn-empresa"
              }`}
              onClick={handleEmpresa}
            >
              Empresa
              <span class="bar2"></span>
            </button>
          </div>
          <form id="form-container">
            <div class="group">
              <input className="input-btn" type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label className="label-btn">Escribe tu nombre completo</label>
            </div>
            <div class="group">
              <input className="input-btn" type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label className="label-btn">Escribe tu correo electronico</label>
            </div>
            <div class="group">
              <input className="input-btn" type="number" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label className="label-btn">Telefono</label>
            </div>
            <div class="group">
              <input className="input-btn" type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label className="label-btn">Localidad</label>
            </div>
            <div class="group">
              <input
                className="input-btn"
                type="text"
                required
                onFocus={(e) => {
                  e.currentTarget.type = "date";
                  e.currentTarget.focus();
                }}
                onBlur={(e) => {
                  e.currentTarget.type = "text";
                  e.currentTarget.blur();
                }}
              />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label className="label-btn">Fecha de nacimiento</label>
            </div>
            <div class="group">
              <textarea type="text" required class="message-input input-btn" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label className="label-btn">Escribe tu mensaje</label>
            </div>
            <p>¿Quieres que te contactemos por Whatsapp?</p>
            <div className="radio-btn">
              <div>
                <input type="radio" id="Si" name="radio" value="Si" checked />
                <label for="Si">Si</label>
              </div>
              <div>
                <input type="radio" id="No" name="radio" value="No" />
                <label for="No">No</label>
              </div>
            </div>
            <div>
              <button class="submit-btn" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
