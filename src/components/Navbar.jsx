import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
      {/* Banner animado encima del navbar */}
      <div className="relative w-full overflow-hidden bg-white z-60">
        <div className="animate-marquee whitespace-nowrap py-4 text-pink-600 font-extrabold text-xl">
          <div className="w-full text-center">
            💄 💅 🧴 ✨ Bienvenidos a Cosmética Esmera ✨ 🧴 💅 💄
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center justify-between p-4">
          {/* Espacio a la izquierda */}
          <div className="flex items-center"></div>

          {/* Logo e H1 al centro */}
          <div className="flex items-center justify-center">
            <img
              src="/src/images/esmera.png" // Ruta de la imagen
              alt="Logo Cosmética Esmera"
              className="h-20 w-20 object-cover mr-2"
            />
            <h1 className="text-blue-700 font-semibold md:text-5xl drop-shadow-lg">
              Esmera Cosmética
            </h1>
          </div>

          {/* Menú de navegación a la derecha */}
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={`flex items-center justify-center px-4 py-1 border-2 border-blue-700 rounded-lg text-black hover:text-blue-700 hover:bg-blue-100 transition duration-300 ease-in-out text-lg ${
                  activeLink === "/" ? "bg-white" : ""
                }`}
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
                className={`flex items-center justify-center px-4 py-1 border-2 border-blue-700 rounded-lg text-black hover:text-blue-700 hover:bg-blue-100 transition duration-300 ease-in-out text-lg ${
                  activeLink === "/contact" ? "bg-white" : ""
                }`}
              >
                Contacto
              </Link>
            </li>

            <li>
              <Link
                to="/productos"
                onClick={() => handleLinkClick("/productos")}
                className={`flex items-center justify-center px-4 py-1 border-2 border-blue-700 rounded-lg text-black hover:text-blue-700 hover:bg-blue-100 transition duration-300 ease-in-out text-lg ${
                  activeLink === "/productos" ? "bg-white" : ""
                }`}
              >
                Productos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
