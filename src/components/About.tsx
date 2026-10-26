import React from 'react';
import { ShieldCheck, Award, Users, Check, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppLink } from '../data/company';

export const About: React.FC = () => {
  const differentiators = [
    {
      title: "Diagnóstico Transparente",
      description: "Antes de qualquer troca de peça, realizamos testes físicos e computadorizados na sua frente, mostrando o laudo técnico."
    },
    {
      title: "Peças Originais e Homologadas",
      description: "Trabalhamos exclusivamente com marcas consagradas (Moura, Heliar, Bosch, Magneti Marelli, Pioneer) com garantia de fábrica."
    },
    {
      title: "Equipe Especializada e Atualizada",
      description: "Profissionais que dominam as redes elétricas e multiplexadas (rede CAN) dos veículos modernos nacionais e importados."
    },
    {
      title: "Localização Estratégica em Barueri",
      description: "Fácil acesso no Jardim São Pedro, atendendo rapidamente motoristas de Barueri, Alphaville, Tamboré, Carapicuíba e região."
    }
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage & Experience Badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-xl">
              <img
                src="/src/assets/images/service_alternator_1792993020688.jpg"
                alt="Bancada de testes de auto elétrica na oficina Nissey Auto Elétrico"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-600 text-white font-black text-xl">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Compromisso com a Verdade</h4>
                    <p className="text-xs text-stone-300">
                      Aqui você só troca o que realmente estiver com defeito. Sem surpresas no valor final.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating rating badge */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 p-3 bg-stone-900 border border-stone-700/80 rounded-xl shadow-xl">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <div className="text-xs">
                <span className="font-bold text-white">4,7 Estrelas</span>
                <span className="text-stone-400 block text-[11px]">213 avaliações no Google</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <span>Sobre a Nissey</span>
                <span aria-hidden="true">·</span>
                <span>Tradição em Barueri</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Mais do que uma oficina: o parceiro elétrico do seu veículo
              </h2>
            </div>

            <p className="text-base text-stone-300 leading-relaxed">
              Fundada para suprir a carência de um serviço elétrico automotivo que unisse tecnologia de ponta, 
              precisão de diagnóstico e honestidade no atendimento, a <strong className="text-white font-semibold">Nissey Auto Elétrico</strong> consolidou-se 
              como referência no Jardim São Pedro e em toda a região de Barueri e Alphaville.
            </p>

            <p className="text-base text-stone-300 leading-relaxed">
              Sabemos que panes elétricas geram transtornos e incertezas. Por isso, investimos continuamente em equipamentos 
              de medição de alta sensibilidade e capacitação técnica constante, atendendo desde carros de passeio até SUVs, 
              utilitários leves e veículos com tecnologia Start-Stop e sistemas híbridos.
            </p>

            {/* 4 Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {differentiators.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800/80">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm mb-1">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick address and CTA button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={buildWhatsAppLink("Olá! Gostaria de agendar uma revisão elétrica na Nissey.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm text-white shadow-lg shadow-blue-600/25 transition-all"
              >
                <span>Falar com nosso chefe de oficina</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-stone-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Atendemos Barueri, Alphaville, Tamboré e cidades vizinhas</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
