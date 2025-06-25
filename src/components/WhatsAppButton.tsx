
// Remova esta linha, pois não precisaremos mais do ícone do lucide-react
// import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5511978325699";
  const message = "Olá! Gostaria de solicitar uma cotação de seguro.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      {/* Substituímos o MessageSquare pela tag <img> com o src da imagem */}
      <img
        src="https://jorgecouriseguros.com.br/wp-content/uploads/2022/12/botao-whatsapp-jsc.svg"
        alt="WhatsApp"
        className="h-7 w-7" // Mantemos as classes de tamanho para a imagem
      />
    </a>
   );
};

export default WhatsAppButton;
