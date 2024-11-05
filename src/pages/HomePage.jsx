import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000); // Muestra el formulario después de 3 segundos

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica del formulario
    alert("Formulario enviado");
    setShowForm(false); // Opcional: oculta el formulario después de enviar
  };

  const closeForm = () => {
    setShowForm(false); // Cierra el formulario
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Sección del Carrusel */}
      <div className="w-full">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={true}
          showIndicators={false}
        >
          <div>
            <img src="/src/images/flower.jpg" alt="Slide 1" className="w-full object-cover" />
          </div>
          <div>
            <img src="/src/images/lanza1.jpg" alt="Slide 2" className="w-full object-cover" />
          </div>
          <div>
            <img src="/src/images/flower.jpg" alt="Slide 3" className="w-full object-cover" />
          </div>
          <div>
            <img src="/src/images/lanza2.png" alt="Slide 4" className="w-full object-cover" />
          </div>
          <div>
            <img src="/src/images/flower.jpg" alt="Slide 5" className="w-full object-cover" />
          </div>
        </Carousel>
      </div>

      {/* Sección de Artículos */}
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {/* Artículo 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/src/images/Esmaltes.jpg" alt="Labiales" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Esmaltes Esmera</h2>
            <p className="text-gray-600 mb-4">Colores vibrantes y acabados de larga duración.</p>
            <Link to="/labiales" className="text-blue-500 hover:underline font-semibold">Ver Información</Link>
          </div>
        </div>

        {/* Artículo 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/src/images/lanz3.avif" alt="Sombras" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Skin Care</h2>
            <p className="text-gray-600 mb-4">Prueba las mejores rutinas de cuidado para tu piel.</p>
            <Link to="/sombras" className="text-blue-500 hover:underline font-semibold">Ver Información</Link>
          </div>
        </div>

        {/* Artículo 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/src/images/lanza2.png" alt="Esmaltes" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Maquillaje</h2>
            <p className="text-gray-600 mb-4">Atrévete a explorar nuestros cursos de maquillaje.</p>
            <Link to="/esmaltes" className="text-blue-500 hover:underline font-semibold">Ver Información</Link>
          </div>
        </div>

        {/* Artículo 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/src/images/lanza4.jpg" alt="Maquillaje" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Barber</h2>
            <p className="text-gray-600 mb-4">Inmersate en el mundo de la barbería.</p>
            <Link to="/maquillaje" className="text-blue-500 hover:underline font-semibold">Ver Información</Link>
          </div>
          </div>
          {/* Artículo 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/src/images/produc5.png" alt="Maquillaje" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Acido Hialuronico</h2>
            <p className="text-gray-600 mb-4"> Potenciar la hidratación de tu piel brindando una capa protectora para retener la humedad</p>
            <Link to="/maquillaje" className="text-blue-500 hover:underline font-semibold">Ver Información</Link>
            </div>
        </div>
        {/* Artículo 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/src/images/product6.jpeg" alt="Maquillaje" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Mascarillas Faciales</h2>
            <p className="text-gray-600 mb-4">Limpian la piel de impurezas y toxinas, produciendo un efecto esfoliante que revitaliza la piel.</p>
            <Link to="/maquillaje" className="text-blue-500 hover:underline font-semibold">Ver Información</Link>
            </div>
        </div>
        {/* Artículo 7 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/src/images/product7.png" alt="Maquillaje" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Spa</h2>
            <p className="text-gray-600 mb-4">Disfruta de nuestras tardes de spa</p>
            <Link to="/maquillaje" className="text-blue-500 hover:underline font-semibold">Ver Información</Link>
            </div>
        </div>
        {/* Artículo 8 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/src/images/product8.jpeg" alt="Maquillaje" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Retinol</h2>
            <p className="text-gray-600 mb-4">Combate el envejecimiento con nuestro retinol </p>
            <Link to="/maquillaje" className="text-blue-500 hover:underline font-semibold">Ver Información</Link>
            </div>
        </div>
        
      </div>

      {/* Formulario flotante */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="border-green-200 p-8 rounded-lg shadow-lg relative">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-black hover:text-gray-900"
              aria-label="Cerrar formulario"
            >
              &times; {/* Este símbolo representa una 'X' para cerrar */}
            </button>
            <h2 className="text-lg font-bold mb-4">Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-black mb-2" htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
