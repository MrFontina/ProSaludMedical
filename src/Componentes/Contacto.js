import React from "react";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
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
        <form
          id="form-container"
          action={`MAILTO:pro@saludmedical.com.mx?subject=Contacto Pro Salud Medical`}
          method="post"
          enctype="text/plain"
          target="_blank"
        >
          <div class="group">
            <input
              className="input-btn"
              type="text"
              name={`${
                empresa === true ? "Contacto Empresa" : "Contacto Personal"
              }`}
              autocomplete="off"
              required
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label className="label-btn">Escribe tu nombre completo</label>
          </div>
          <div class="group">
            <input className="input-btn" type="email" name="Email" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label className="label-btn">Escribe tu correo electrónico</label>
          </div>
          <div class="group">
            <input
              className="input-btn"
              type="number"
              name="Telefono"
              autocomplete="off"
              required
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label className="label-btn">Teléfono</label>
          </div>
          <div class="group">
            <input
              className="input-btn"
              name="Localidad"
              type="text"
              autocomplete="off"
              required
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label className="label-btn">Localidad</label>
          </div>
          <div class="group">
            <input
              className="input-btn"
              type="text"
              name="Fecha de Nacimiento"
              autocomplete="off"
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
            <textarea
              type="text"
              name="Mensaje"
              autocomplete="off"
              required
              class="message-input input-btn"
            />
            <span class="highlight"></span>
            <label className="label-btn">Escribe tu mensaje</label>
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
      <div className="medios">
        <article>
          <div className="logo-cont">
            <BsFillTelephoneFill />
          </div>
          <div className="text-cont">
            <h4>Atención telefónica</h4>
            <p>+52 5525225360</p>
          </div>
        </article>
        <article>
          <div className="logo-cont">
            <IoMail />
          </div>
          <div className="text-cont">
            <h4>Correo electrónico</h4>
            <p>pro@saludmedical.com.mx</p>
          </div>
        </article>
        <article>
          <div className="logo-cont">
            <IoLogoWhatsapp />
          </div>
          <div className="text-cont">
            <h4>Whatsapp</h4>
            <p>+52 5556787815</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Contacto;
