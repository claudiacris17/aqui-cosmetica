



function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Reemplaza con tu número de WhatsApp
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button 
        onClick={handleClick} 
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full shadow-lg flex items-center"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-6 h-6 mr-2" 
        />
        Chat
      </button>
    </div>
  );
}

export default WhatsAppButton;

