import React from 'react';
import { MessageCircle, Star, ShieldCheck, Zap, Wrench, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppLink } from '../data/company';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-stone-950">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Google Social Proof Ribbon */}
            <a 
              href="#depoimentos" 
              className="inline-flex items-center gap-3 w-fit px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-xs text-stone-300 hover:border-stone-700 transition-colors shadow-sm"
            >
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3.5 h-3.5 fill-amber-400 ${i === 4 ? 'text-amber-400/80' : 'text-amber-400'}`} 
                  />
                ))}
              </div>
              <span className="font-semibold text-white">{COMPANY_INFO.googleRating}</span>
              <span className="text-stone-500">·</span>
              <span className="text-stone-300">
                <span className="font-medium text-white">{COMPANY_INFO.reviewsCount} avaliações</span> no Google
              </span>
              <span className="text-blue-400 font-medium">Ver opiniões &rarr;</span>
            </a>

            {/* Slogan & Subtitle */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Seu carro com <span className="text-blue-500">energia total</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-stone-300 font-medium leading-relaxed max-w-2xl">
                {COMPANY_INFO.subtitle}
              </p>

              <p className="text-sm sm:text-base text-stone-400 leading-relaxed max-w-xl">
                Oficina de auto elétrica de referência em <strong className="text-stone-200 font-semibold">Barueri e Alphaville</strong>. 
                Diagnóstico computadorizado de precisão, técnicos experientes e atendimento ágil para você voltar a rodar com total segurança.
              </p>
            </div>

            {/* Primary Action Button & Secondary Call */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={buildWhatsAppLink("Olá! Preciso de um orçamento com a Nissey Auto Elétrico para meu carro.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Pedir orçamento</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-800 rounded-xl transition-all"
              >
                <span>Conhecer serviços</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-900 text-xs sm:text-sm text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Garantia em todos os serviços</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Teste de bateria expresso</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Barueri e Alphaville</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl shadow-black/80 group">
              <img
                src="/src/assets/images/hero_auto_electric_1792992973205.jpg"
                alt="Técnico especialista em auto elétrica realizando diagnóstico no Nissey Auto Elétrico em Barueri"
                className="w-full h-auto max-h-[460px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Bottom contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Floating badge inside image frame */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-stone-950/90 backdrop-blur-md border border-stone-800 text-stone-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Nissey Auto Elétrico</p>
                    <p className="text-[11px] text-stone-400">Oficina estruturada com scanner OBD2</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 justify-end">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Rápido</span>
                  </span>
                  <span className="text-[10px] text-stone-400">Atendimento no dia</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
