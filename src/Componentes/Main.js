import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Proveedores from "./Proveedores";
import Contacto from "./Contacto";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:Home" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
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
