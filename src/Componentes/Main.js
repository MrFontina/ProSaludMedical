import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Proveedores from "./Proveedores";
import Contacto from "./Contacto";
import Salud from "./Salud";
import Asistencias from "./Asistencias";
import Polizas from "./Polizas";
import Beneficios from "./Beneficios";
import AsistenciaMedica from "./AsistenciaMedica";
import AsistenciaFuneraria from "./AsistenciaFuneraria";
import AsistenciaHogar from "./AsistenciaHogar";
import AsistenciaLegal from "./AsistenciaLegal";
import AsistenciaVial from "./AsistenciaVial";
import AsistenciaNutricional from "./AsistenciaNutricional";
import AsistenciaPsicologica from "./AsistenciaPsicologica";
import BeneficiosCine from "./BeneficiosCine";
import BeneficiosMaternidad from "./BeneficiosMaternidad";
import Whatsapp from "./Whatsapp";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:Home" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/salud" element={<Salud />} />
        <Route path="/servicios/asistencias" element={<Asistencias />} />
        <Route
          path="/servicios/asistencias/asistenciamedica"
          element={<AsistenciaMedica />}
        />
        <Route
          path="/servicios/asistencias/asistenciafuneraria"
          element={<AsistenciaFuneraria />}
        />
        <Route
          path="/servicios/asistencias/asistenciahogar"
          element={<AsistenciaHogar />}
        />
        <Route
          path="/servicios/asistencias/asistencialegal"
          element={<AsistenciaLegal />}
        />
        <Route
          path="/servicios/asistencias/asistenciavial"
          element={<AsistenciaVial />}
        />
        <Route
          path="/servicios/asistencias/asistencianutricional"
          element={<AsistenciaNutricional />}
        />
        <Route
          path="/servicios/asistencias/asistenciapsicologica"
          element={<AsistenciaPsicologica />}
        />
        <Route path="/servicios/polizas" element={<Polizas />} />
        <Route path="/servicios/beneficios" element={<Beneficios />} />
        <Route path="/servicios/beneficios/cine" element={<BeneficiosCine />} />
        <Route
          path="/servicios/beneficios/maternidad"
          element={<BeneficiosMaternidad />}
        />

        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="*"
          element={<h1 className="h-screen">Oops, something went wrong</h1>}
        />
      </Routes>
      <Whatsapp />
    </main>
  );
};

export default Main;
