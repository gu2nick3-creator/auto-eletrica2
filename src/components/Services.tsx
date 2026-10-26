import React from 'react';
import { MessageCircle, CheckCircle2, ArrowRight, BatteryCharging, Cpu, Radio, Zap, Sun, ShieldAlert } from 'lucide-react';
import { SERVICES_DATA, buildServiceWhatsAppLink } from '../data/company';

const iconMap: Record<string, React.ReactNode> = {
  baterias: <BatteryCharging className="w-5 h-5 text-blue-500" />,
  injecao: <Cpu className="w-5 h-5 text-blue-500" />,
  som: <Radio className="w-5 h-5 text-blue-500" />,
  alternadores: <Zap className="w-5 h-5 text-amber-500" />,
  iluminacao: <Sun className="w-5 h-5 text-yellow-500" />,
  'ar-e-acessorios': <ShieldAlert className="w-5 h-5 text-emerald-500" />,
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-stone-900/40 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <span>Especialidades Técnicas</span>
            <span aria-hidden="true">·</span>
            <span>Alta Performance Automotiva</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nossos Serviços Principais
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-stone-300">
            Trabalhamos com os melhores equipamentos de teste e diagnóstico eletrônico do mercado para identificar a origem exata do problema sem adivinhações.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="bg-stone-950/90 rounded-2xl border border-stone-800 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group shadow-lg shadow-black/40"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                  
                  {/* Category Indicator Tag */}
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-stone-800 text-xs font-semibold text-white flex items-center gap-1.5">
                    {iconMap[service.id]}
                    <span>{service.badge}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 text-xs text-stone-400 font-mono">
                    0{index + 1}. SERVIÇO
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-2 border-t border-stone-900 text-xs sm:text-sm text-stone-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={buildServiceWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-blue-600 border border-stone-800 hover:border-blue-500 rounded-xl transition-all duration-200 group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:text-white transition-colors" />
                  <span>Pedir orçamento de {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner below services */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-stone-900 to-stone-950 border border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Não encontrou o que procura ou seu carro não liga?</h4>
            <p className="text-sm text-stone-300">
              Nossa equipe faz atendimento rápido e socorro elétrico emergencial na região de Barueri e Alphaville.
            </p>
          </div>
          <a
            href={buildServiceWhatsAppLink("Socorro Elétrico / Dúvida Geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 whitespace-nowrap transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com especialista agora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
