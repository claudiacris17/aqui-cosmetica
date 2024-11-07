const productos = [
  
  {
    id: 1,
    name: "Labiales",
    imageUrl: "/src/images/labial-rojo.jpg",
  },
  {
    id: 2,
    name: "Sombras",
    imageUrl: "/src/images/parpado.jpg",
    
  },
  {
    id: 3,
    name: "Maquillaje",
    imageUrl: "/src/images/maquillaje.jpg",
   
  },
  {
    id: 4,
    name: "Esmaltes",
    imageUrl: "/src/images/Esmaltes.jpg",
   
  },
  {
    id: 5,
    name: "Perfumes",
    imageUrl: "/src/images/Esmaltes.jpg",
   
  },
  {
    id: 6,
    name: "Cremas",
    imageUrl: "/src/images/Esmaltes.jpg",
   
  },
];

function Productos() {
  return (
    <div className="container mx-auto p-6 bg-white">
      <br />
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg gap-6 ">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-green-700">
            <img
              src={producto.imageUrl}
              alt={producto.name}
              className="w-full h-40 object-cover rounded-lg "
            />
            <h2 className="text-xl font-semibold mt-4 text-center">{producto.name}</h2>
            <p className="text-gray-600 text-sm mt-2 text-center">{producto.description}</p>

            <div className="flex justify-center mt-4">
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;

