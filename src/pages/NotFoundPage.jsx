import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
      <FaQuestionCircle className='w-16 h-16 mb-4 text-gray-700' />
      <h1 className='text-2xl font-bold mb-2'>Página No Encontrada</h1>
      <p className='mb-4'>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFoundPage;
