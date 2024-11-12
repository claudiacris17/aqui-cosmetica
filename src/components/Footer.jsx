import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='bg-white p-6 text-black shadow-md border-t-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
      {/* Primera columna: Dirección */}
      <div className='text-left'>
        <p className="font-semibold">Ubicación:</p>
        <p>Paseo Santa María de la Cabeza, 10</p>
        <p>28045 Madrid</p>
        <Link to="https://www.google.com/maps/place/Paseo+de+Santa+Mar%C3%ADa+de+la+Cabeza,+10,+28045+Madrid,+Spain" target="_blank" className='text-blue-700 hover:underline'>
          Ver en Google Maps
        </Link>
      </div>

      {/* Segunda columna: Información y redes sociales */}
      <div className='flex flex-col items-center'>
        <p className='mb-4'>&copy; 2024 Esmera Cosmética</p>
        <div className='flex justify-center space-x-8 mb-4'>
          <Link to="https://www.facebook.com/esmeraschoolOficial/?locale=es_ES" target="_blank" className='text-black hover:text-blue-700'>
            <FaFacebook className="w-8 h-8" />
          </Link>
          <Link to="https://www.instagram.com/esmeraformacion/?hl=en" target="_blank" className='text-black hover:text-red-600'>
            <FaInstagram className="w-8 h-8" />
          </Link>
        </div>
        <div className='flex justify-center space-x-8'>
          <Link to="/politicas-de-privacidad" className='text-black hover:text-blue-700'>
            Políticas de privacidad
          </Link>
          <Link to="/terminos-y-condiciones" className='text-black hover:text-blue-700'>
            Términos y condiciones
          </Link>
        </div>
      </div>

      {/* Tercera columna: Icono de WhatsApp */}
      <div className='flex justify-center items-center'>
      <img
              src="/src/images/esmera.png" // Ruta de la imagen
              alt="Logo Cosmética Esmera"
              className="h-12 w-12 object-cover"
            />
      </div>
    </footer>
  );
}

export default Footer;
