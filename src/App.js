import { BrowserRouter } from "react-router-dom";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer";
import "./Styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
