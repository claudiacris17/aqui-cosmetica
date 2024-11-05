function LabialesPages() {
  return (
    <div className="container mx-auto p-6">
      {/* Sección de Descripción del Producto */}
      <section className="mb-12">
        <br />
        <br />
        <br />
        <h1 className="text-3xl font-bold mb-4">Labiales Esmera</h1>
        <p className="text-gray-700 text-lg">
          Nuestros labiales están formulados con ingredientes de alta calidad
          para ofrecer colores intensos y larga duración. Disponibles en una
          variedad de tonos que complementan cada estilo y ocasión.
        </p>
      </section>

      {/* Sección del Catálogo de Productos */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Catálogo de Labiales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Producto 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="/src/images/labial-rojo.jpg"
              alt="Labial 1"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-2 text-center">Labial Rojo Clásico</h3>
            <p className="text-gray-600 mt-1 text-center">
              Un rojo intenso y duradero para cualquier ocasión.
            </p>

            <div className="flex justify-center mt-4">
              <button className="bg-blue-500  hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">
                Ver más
              </button>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="/src/images/labial-rosa.jpg"
              alt="Labial 2"
              className="w-full h-48 object-cover rounded-md"
            />
           
            <h3 className="text-xl font-semibold mt-2 text-center">Labial Rosa Pastel</h3>
            <p className="text-gray-600 mt-1 text-center">
              Suave y delicado, perfecto para un look natural.
            </p>
            <div className="flex justify-center mt-4">
            <button className="bg-blue-500  hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">
              Ver más
            </button>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="/src/images/labial-nude.jpg"
              alt="Labial 3"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-2 text-center">Labial Nude Elegante</h3>
            <p className="text-gray-600 mt-1 text-center">
              Un tono nude clásico que va con todo.
            </p>
            <div className="flex justify-center mt-4">
            <button className="bg-blue-500  hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">
              Ver más
            </button>
            </div>
          </div>

          {/* Puedes agregar más productos aquí */}
        </div>
      </section>
    </div>
  );
}

export default LabialesPages;
