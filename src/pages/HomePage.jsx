import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
            <img
              src="/src/images/flower.jpg"
              alt="Slide 1"
              className="w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/src/images/lanza1.jpg"
              alt="Slide 2"
              className="w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/src/images/flower.jpg"
              alt="Slide 3"
              className="w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/src/images/lanza2.png"
              alt="Slide 4"
              className="w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/src/images/flower.jpg"
              alt="Slide 5"
              className="w-full object-cover"
            />
          </div>
        </Carousel>
      </div>

      {/* Sección de Artículos */}
      {/* <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6 mt-10"></div> */}

      {/* Formulario flotante
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg relative w-80">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-black text-2xl hover:text-gray-900"
              aria-label="Cerrar formulario"
            >
              &times;
            </button>

            <h2 className="text-lg font-bold mb-4">Formulario de Contacto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-black mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded-md w-full p-2"
                  placeholder="Escribe tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-black mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-md w-full p-2"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label className="block text-black mb-2" htmlFor="number">
                  Teléfono
                </label>
                <input
                  type="text"
                  id="number"
                  className="border border-gray-300 rounded-md w-full p-2"
                  placeholder="Teléfono"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div> */}
      
    </div>
  );
}

export default HomePage;

