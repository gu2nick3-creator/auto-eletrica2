import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppLink } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip bubble after 2.5 seconds, auto-hide after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Speech bubble prompt */}
      {showTooltip && (
        <div className="mb-2 relative max-w-xs bg-stone-900 text-stone-100 p-3 rounded-2xl shadow-2xl border border-stone-800 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-stone-400 hover:text-white p-0.5"
            aria-label="Fechar mensagem rápida"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="pr-3">
            <p className="font-semibold text-white">Nissey Auto Elétrico</p>
            <p className="text-stone-300 text-[11px] mt-0.5">
              Precisa de ajuda ou socorro de bateria? Fale conosco agora mesmo!
            </p>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-stone-900 border-r border-b border-stone-800 transform rotate-45" />
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={buildWhatsAppLink("Olá! Gostaria de falar com o Nissey Auto Elétrico.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-2xl shadow-emerald-950/60 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        aria-label="Iniciar conversa no WhatsApp com Nissey Auto Elétrico"
      >
        {/* Subtle breathing ripple */}
        <span 
          className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-0 pointer-events-none" 
          aria-hidden="true" 
        />

        <MessageCircle className="w-7 h-7 fill-white/20 transition-transform group-hover:scale-105" />

        {/* Hover label for desktop */}
        <span className="hidden md:block absolute right-16 bg-stone-950 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-stone-800 shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          Conversar no WhatsApp
        </span>
      </a>
    </aside>
  );
};
