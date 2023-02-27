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

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:Home" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/salud" element={<Salud/>}/>
        <Route path="/servicios/asistencias" element={<Asistencias/>}/>
        <Route path="/servicios/polizas" element={<Polizas/>}/>
        <Route path="/servicios/beneficios" element={<Beneficios/>}/>
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="*"
          element={<h1 className="h-screen">Oops, something went wrong</h1>}
        />
      </Routes>
    </main>
  );
};

export default Main;
