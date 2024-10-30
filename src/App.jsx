import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Productos from "./pages/Productos";
import LabialesPages from "./pages/LabialesPages";
import Marquee from "./components/Marquee";
import TerminosPages from "./pages/TerminosPages";
import PoliticasPages from "./pages/PoliticasPages";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Marquee/>
        {/* Aplicar la imagen de fondo con estilos en línea */}
        <main className="flex-grow bg-cover bg-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage/>} />{" "}
            <Route path="/productos" element={<Productos/>} />
            <Route path="/labiales" element={<LabialesPages/>} />
            <Route path="/terminos-y-condiciones" element={<TerminosPages/>} />
            <Route path="/politicas-de-privacidad" element={<PoliticasPages/>} />
            
          </Routes>
        </main>
        <Footer />
       <WhatsAppButton/>
      </div>
    </Router>
  );
}

export default App;
