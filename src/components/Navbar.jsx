import { Link } from "react-router-dom";
import { SlUserFemale } from "react-icons/sl"; // Importar el ícono de usuario femenino
import { FaCaretDown } from "react-icons/fa"; // Para el dropdown
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
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between p-4">
        <div className="flex items-center">
          <SlUserFemale className="h-14 w-14 text-pink-500 mr-2" /> {/* Ícono de usuario femenino */}
          <h1 className="text-black font-bold text-2xl">Aquí Cosmética Esmera</h1>
        </div>

        <ul className="flex space-x-4 relative">
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={`text-black hover:text-yellow-800 hover:underline hover:shadow-lg transition duration-300 ease-in-out text-lg ${activeLink === "/" ? 'text-yellow-800 underline' : ''}`}
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={`text-black hover:text-yellow-800 hover:underline hover:shadow-lg transition duration-300 ease-in-out text-lg ${activeLink === "/contact" ? 'text-yellow-800 underline' : ''}`}
            >
              Contacto
            </Link>
          </li>
          
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className={`flex items-center text-black hover:text-yellow-800 transition duration-300 ease-in-out text-lg`}
            >
              Productos <FaCaretDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                <li>
                  <Link
                    to="/labiales"
                    onClick={() => handleLinkClick("/labiales")}
                    className={`block px-4 py-2 text-black hover:text-yellow-800 hover:underline transition duration-300 ease-in-out ${activeLink === "/labiales" ? 'text-yellow-800 underline' : ''}`}
                  >
                    Labiales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/productos"
                    onClick={() => handleLinkClick("/productos")}
                    className={`block px-4 py-2 text-black hover:text-yellow-800 hover:underline transition duration-300 ease-in-out ${activeLink === "/productos" ? 'text-yellow-800 underline' : ''}`}
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
  );
}

export default Navbar;
