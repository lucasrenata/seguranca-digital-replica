
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5511978325699";
  const message = "Olá! Gostaria de solicitar uma cotação de seguro.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce-gentle"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
