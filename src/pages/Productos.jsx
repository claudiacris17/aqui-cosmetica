const productos = [
  {
    id: 1,
    name: "Labiales",
    imageUrl: "/src/images/labial-rojo.jpg",
    description: "Labiales mate y perlados",
  },
  {
    id: 2,
    name: "Sombras",
    imageUrl: "/src/images/parpado.jpg",
    description: "Sombras de párpados",
  },
  {
    id: 3,
    name: "Maquillaje",
    imageUrl: "/src/images/maquillaje.jpg",
    description: "Conoce nuestro maquillajes",
  },
  {
    id: 4,
    name: "Esmaltes",
    imageUrl: "/src/images/Esmaltes.jpg",
    description: "Esmaltes permanentes",
  },
];

function Productos() {
  return (
    <div className="container mx-auto p-6 bg-fuchsia-50">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img
              src={producto.imageUrl}
              alt={producto.name}
              className="w-full h-40 object-cover rounded-lg "
            />
            <h2 className="text-xl font-semibold mt-4 text-center">{producto.name}</h2>
            <p className="text-gray-600 text-sm mt-2 text-center">{producto.description}</p>

            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
                Botón
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;

