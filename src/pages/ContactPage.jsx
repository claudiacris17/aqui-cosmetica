import { FaUser, FaEnvelope, FaComment } from "react-icons/fa"; // Importa los íconos de react-icons


function ContactPage() {
  return (
    <div  className="container mx-auto p-6 flex justify-center bg-[url('/src/images/fondo.jpg')] bg-cover bg-center">
      <form className="bg-slate-50 shadow-lg rounded-lg px-6 pt-4 pb-6 mb-4 mx-auto max-w-lg w-full">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <FaUser className="text-gray-400 p-2 ml-2" size={35} />
            <input
              type="text"
              id="name"
              placeholder="Escribe tu nombre"
              className="flex-grow p-2 focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <FaEnvelope className="text-gray-400 p-2 ml-2" size={35} />
            <input
              type="email"
              id="email"
              placeholder="Correo electrónico"
              className="flex-grow p-2 focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Mensaje
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <FaComment className="text-gray-400 p-2 ml-2" size={35} />
            <textarea
              id="message"
              placeholder="Escribe un comentario"
              className="flex-grow p-2 focus:outline-none"
              rows="4"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
