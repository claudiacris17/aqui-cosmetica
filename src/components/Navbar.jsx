import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setDropdownOpen(false); // Cierra el dropdown al hacer clic en un enlace
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
      <nav className="bg-purple-200 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center justify-between p-4">
          {/* Formulario de búsqueda a la izquierda */}
          <div className="flex items-center">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full max-w-xs px-4 py-2 text-lg border border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out"
              >
                Buscar
              </button>
            </form>
          </div>

          {/* Logo e H1 al centro */}
          <div className="flex items-center mx-auto">
            <img
              src="/src/images/imag-proye-cla.jpg" // Ruta de la imagen
              alt="Logo Cosmética Esmera"
              className="h-16 w-16 object-cover mr-2"
            />
            <h1 className="text-pink-600 font-extrabold text-4xl md:text-4xl tracking-wide drop-shadow-lg">
              Aquí Cosmética Esmera
            </h1>
          </div>

          {/* Menú de navegación a la derecha */}
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={`text-black hover:text-pink-600 hover:underline hover:shadow-lg transition duration-300 ease-in-out text-lg ${activeLink === "/" ? '' : ''}`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
                className={`text-black hover:text-pink-600 hover:underline hover:shadow-lg transition duration-300 ease-in-out text-lg ${activeLink === "/contact" ? '' : ''}`}
              >
                Contacto
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-black hover:text-pink-600 hover:underline transition duration-300 ease-in-out text-lg"
              >
                Productos <FaCaretDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-transparent shadow-lg rounded-md">
                  <li>
                    <Link
                      to="/labiales"
                      onClick={() => handleLinkClick("/labiales")}
                      className={`block px-4 py-2 text-black hover:text-pink-600  transition duration-300 ease-in-out ${activeLink === "/labiales" ? '' : ''}`}
                    >
                      Labiales
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/productos"
                      onClick={() => handleLinkClick("/productos")}
                      className={`block px-4 py-2 text-black hover:text-pink-600  transition duration-300 ease-in-out ${activeLink === "/productos" ? '' : ''}`}
                    >
                      Todos
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
