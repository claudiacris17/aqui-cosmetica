import { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaPhone } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    telefono: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.telefono || !formData.email || !formData.message) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setError("");
    setSubmitted(true);
    console.log("Formulario enviado:", formData);

    setFormData({
      name: "",
      telefono: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/src/images/background.jpg')] bg-cover bg-center">
      <form onSubmit={handleSubmit} className="bg-white px-6 pt-12 pb-6 mb-4 max-1xl:w-full shadow-2xl mt-12">
        <h1 className="text-center text-black font-semibold md:text-2xl">Contacto</h1>

        <div className="flex space-x-4">
          {/* Campo Nombre */}
          <div className="mb-4 flex-grow">
            <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="name"></label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-12">
              <FaUser className="text-blue-500 p-2 ml-2" size={40} />
              <input 
                type="text" 
                id="name" 
                placeholder="Nombre" 
                className="flex-grow p-2 h-full focus:outline-none"
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>

          {/* Campo Teléfono */}
          <div className="mb-4 flex-grow">
            <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="telefono"></label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-12">
              <FaPhone className="text-blue-500 p-2 ml-2" size={40} />
              <input 
                type="text" 
                id="telefono" 
                placeholder="Teléfono" 
                className="flex-grow p-2 h-full focus:outline-none"
                value={formData.telefono}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
        </div>

        {/* Campo Email */}
        <div className="mb-4">
          <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="email"></label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-12">
            <FaEnvelope className="text-blue-500 p-2 ml-2" size={40} />
            <input 
              type="email" 
              id="email" 
              placeholder="Correo electrónico" 
              className="flex-grow p-2 h-full focus:outline-none"
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
        </div>

        {/* Campo Comentario */}
        <div className="mb-4">
          <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="message"></label>
          <div className="flex items-start border border-gray-300 rounded-lg overflow-hidden">
            <FaComment className="text-blue-500 p-2 ml-2" size={40} />
            <textarea 
              id="message"
              placeholder="Comentario" 
              className="flex-grow p-2 h-full focus:outline-none resize-none"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            type="submit" 
            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Enviar
          </button>
        </div>
        
        {/* Mostrar mensaje de error */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Mostrar mensaje de éxito */}
        {submitted && <p className="text-green-500 text-center mb-4">Formulario enviado correctamente.</p>}
      </form>
    </div>
  );
}

export default ContactPage;
