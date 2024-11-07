import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='bg-white p-6 text-center text-black shadow-md border-t-4' >
      <div className='mb-4'>
        <p>&copy; 2024 Aquí Cosmética Esmera</p>
      </div>
      <div className='flex justify-center space-x-8 mb-4'>
        <Link to="https://www.facebook.com" target="_blank" className='text-black hover:text-blue-700'>
          <FaFacebook className="w-8 h-8" />
        </Link>
        
        <Link to="https://www.instagram.com" target="_blank" className='text-black hover:text-blue-700'>
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
    </footer>
  );
}

export default Footer;
