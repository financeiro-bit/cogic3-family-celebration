import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Aparece após 3 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/CZtfBZlRd5i0nmH0NrLBkE', '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl p-4 max-w-xs border border-gray-200 animate-scale-in">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800">Verbo & Verso</p>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            👋 Olá! Tem alguma dúvida sobre o Clube do Livro? 
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-3 rounded-lg transition-colors"
          >
            Conversar no WhatsApp
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle size={24} />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20"></div>
      </button>
    </div>
  );
};

export default WhatsAppWidget;