import React from 'react';
import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { COMPANY_INFO, TESTIMONIALS_DATA } from '../data/company';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              <span>Opinião de Quem Confia</span>
              <span aria-hidden="true">·</span>
              <span>Avaliações Reais</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A oficina com maior confiança e satisfação em Barueri
            </h2>
            
            <p className="mt-3 text-stone-300 text-sm sm:text-base">
              Nosso maior compromisso é com a integridade. Veja o que os clientes dizem sobre nossos prazos, preços justos e diagnósticos certeiros.
            </p>
          </div>

          {/* Social Proof Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-4 shrink-0 shadow-lg">
            {/* Google "G" icon style */}
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-bold text-xl text-stone-900 shadow-sm shrink-0">
              <span className="text-blue-600">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white tabular-nums">
                  {COMPANY_INFO.googleRating}
                </span>
                <div className="flex items-center text-amber-400 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-stone-300 mt-0.5">
                Média de <span className="font-semibold text-white">{COMPANY_INFO.reviewsCount} avaliações</span> no Google
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-2xl bg-stone-900/60 border border-stone-800/90 flex flex-col justify-between hover:border-stone-700 transition-colors shadow-sm relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-xs text-stone-500 font-mono">
                    {t.date}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-stone-200 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-5 mt-5 border-t border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                    </h4>
                    <p className="text-xs text-stone-400">
                      {t.car}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-stone-400 flex items-center gap-1">
                  <span>Avaliação Google</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
