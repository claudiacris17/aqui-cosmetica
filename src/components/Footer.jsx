import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='bg-white p-0 text-center text-black shadow-md border-t-4 w-full'>
      <div className='flex flex-col items-center'>
        <p className='mb-4'>&copy; 2024 Aquí Cosmética Esmera</p>

        <div className='flex space-x-8 mb-4'>
          <Link to="https://www.facebook.com" target="_blank" className='text-black hover:text-slate-500'>
            <FaFacebook className="w-8 h-8" />
          </Link>
          
          <Link to="https://www.instagram.com" target="_blank" className='text-black hover:text-slate-500'>
            <FaInstagram className="w-8 h-8" />
          </Link>
        </div>

        <div className='flex space-x-8'>
          <Link to="/politicas-de-privacidad" className='text-black hover:text-slate-500'>
            Políticas de privacidad
          </Link>
          <Link to="/terminos-y-condiciones" className='text-black hover:text-slate-500'>
            Términos y condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
