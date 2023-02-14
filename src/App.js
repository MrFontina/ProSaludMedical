import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header";
// import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer";
import "./Styles/App.scss";
import Home from "./Componentes/Home";
import Nosotros from './Componentes/Nosotros'
import Servicios from './Componentes/Servicios'
import Proveedores from './Componentes/Proveedores'
import Contacto from './Componentes/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/servicios" element={<Servicios/>}/>
        <Route path="/proveedores" element={<Proveedores/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
