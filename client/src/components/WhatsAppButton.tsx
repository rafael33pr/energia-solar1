/**
 * Floating WhatsApp Button Component
 * Real-time lead capture and customer support
 */

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // WhatsApp number (Puerto Rico format)
  const whatsappNumber = "17875550000"; // Replace with your actual number
  const whatsappMessage = "Hola, me gustaría recibir información sobre energía solar y baterías de respaldo. ¿Pueden ayudarme?";

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const quickMessages = [
    {
      text: "Consulta Gratuita",
      message: "Hola, me gustaría una consulta gratuita sobre energía solar.",
    },
    {
      text: "Precio y Financiamiento",
      message: "¿Cuál es el precio y qué opciones de financiamiento tienen?",
    },
    {
      text: "Protección contra Apagones",
      message: "¿Cómo me protege la energía solar contra los apagones de LUMA?",
    },
  ];

  const handleQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Chat Menu */}
        {isOpen && (
          <div className={`absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border-2 border-secondary/20 overflow-hidden transition-all duration-300 ${isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}>
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white p-6">
              <h3 className="font-bold text-lg mb-1">¿Preguntas sobre Energía Solar?</h3>
              <p className="text-sm text-white/90">Responderemos en menos de 5 minutos</p>
            </div>

            {/* Quick Messages */}
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(item.message)}
                  className="w-full text-left p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors border border-border hover:border-secondary/50 text-sm font-medium text-foreground"
                >
                  {item.text}
                </button>
              ))}

              <div className="border-t pt-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full p-3 rounded-lg bg-secondary text-white hover:bg-secondary/90 transition-colors font-bold text-sm"
                >
                  Mensaje Personalizado
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-muted/50 p-3 text-xs text-muted-foreground text-center border-t">
              Disponible 24/7 • Respuesta rápida
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleOpen}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/90 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7" />
              {/* Pulsing animation indicator */}
              <span className="absolute inset-0 rounded-full bg-secondary/30 animate-pulse"></span>
            </>
          )}

          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-20 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              WhatsApp
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-foreground transform rotate-45"></div>
            </div>
          )}
        </button>

        {/* Badge - New Messages Indicator */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
          1
        </div>
      </div>

      {/* Mobile-optimized version */}
      <style>{`
        @media (max-width: 640px) {
          .whatsapp-menu {
            width: calc(100vw - 2rem);
            right: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}
