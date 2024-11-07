import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const InputField = ({ id, label, placeholder, type = "text", Icon }) => (
  <div className="mb-4">
    <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor={id}>{label}</label>
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-12">
      <Icon className="text-blue-600 p-2 ml-2" size={40} />
      <input 
        type={type} 
        id={id} 
        placeholder={placeholder} 
        className="flex-grow p-2 h-full focus:outline-none"
        required 
      />
    </div>
  </div>
);

function ContactPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/src/images/brochas.jpg')] bg-cover bg-center">
      <form className="bg-slate-90 px-6 pt-4 pb-6 mb-4 max-w-lg w-full shadow-2xl">
        <h1 className="text-center bg-blue-700 text-white">Formulario de Contacto</h1>
        <InputField id="name" label="Nombre" placeholder="Escribe tu nombre" type="text" Icon={FaUser} />
        <InputField id="email" label="Correo" placeholder="Correo electrónico" type="email" Icon={FaEnvelope} />
        <InputField id="message" label="Mensaje" placeholder="Escribe un comentario" type="textarea" Icon={FaComment} />
        
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
