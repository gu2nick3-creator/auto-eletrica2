import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppLink } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 text-white font-extrabold text-xl">
              <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-base">
                N
              </span>
              <span>
                Nissey <span className="text-blue-500 font-semibold">Auto Elétrico</span>
              </span>
            </a>
            
            <p className="text-xs text-stone-400 leading-relaxed">
              Especialistas em injeção eletrônica, baterias de alta performance, motores de partida, alternadores e som automotivo em Barueri.
            </p>

            <div className="pt-2 text-xs text-stone-300">
              <span className="text-amber-400 font-semibold">★ 4.7 no Google</span>
              <span className="text-stone-500"> · </span>
              <span>213 avaliações de clientes satisfeitos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços Especializados</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre a Nissey</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-blue-400 transition-colors">Galeria da Oficina</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-blue-400 transition-colors">Depoimentos de Clientes</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-blue-400 transition-colors">Localização no Mapa</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-blue-400 transition-colors">Pedir Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Contato & Localização
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p>Segunda a Sexta: 08:00 - 18:00</p>
                  <p>Sábado: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas & Payment methods */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Regiões Atendidas
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Barueri, Alphaville, Tamboré, Aldeia da Serra, Carapicuíba, Jandira, Santana de Parnaíba e Osasco.
              </p>
            </div>

            <div className="pt-2 border-t border-stone-900">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Formas de Pagamento
              </h4>
              <div className="flex flex-wrap gap-2 text-[11px] text-stone-300">
                <span className="px-2 py-1 rounded bg-stone-900 border border-stone-800">Pix</span>
                <span className="px-2 py-1 rounded bg-stone-900 border border-stone-800">Cartão de Crédito até 12x</span>
                <span className="px-2 py-1 rounded bg-stone-900 border border-stone-800">Débito</span>
                <span className="px-2 py-1 rounded bg-stone-900 border border-stone-800">Dinheiro</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Nissey Auto Elétrico. Todos os direitos reservados. CNPJ sob consulta.
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Barueri - SP</span>
            <span>·</span>
            <span>Qualidade e Confiabilidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
