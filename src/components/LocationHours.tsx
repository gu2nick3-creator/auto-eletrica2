import React, { useState, useMemo } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, ExternalLink, Calendar } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppLink } from '../data/company';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Calculate if the workshop is currently open (São Paulo timezone UTC-3)
  const shopStatus = useMemo(() => {
    try {
      const now = new Date();
      // Format to Sao Paulo time
      const spTimeStr = now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
      const spDate = new Date(spTimeStr);
      const day = spDate.getDay(); // 0 is Sunday, 6 is Saturday
      const hour = spDate.getHours();
      const minute = spDate.getMinutes();
      const currentMinuteOfDay = hour * 60 + minute;

      // Monday to Friday: 08:00 (480) to 18:00 (1080)
      if (day >= 1 && day <= 5) {
        if (currentMinuteOfDay >= 480 && currentMinuteOfDay < 1080) {
          return { isOpen: true, text: "Aberto agora · Fecha às 18:00", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" };
        } else if (currentMinuteOfDay < 480) {
          return { isOpen: false, text: "Fechado agora · Abre às 08:00", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" };
        } else {
          return { isOpen: false, text: "Fechado agora · Abre amanhã às 08:00", color: "text-stone-400 bg-stone-800/60 border-stone-700" };
        }
      }

      // Saturday: 08:00 (480) to 12:00 (720)
      if (day === 6) {
        if (currentMinuteOfDay >= 480 && currentMinuteOfDay < 720) {
          return { isOpen: true, text: "Aberto agora · Fecha às 12:00", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" };
        } else if (currentMinuteOfDay < 480) {
          return { isOpen: false, text: "Fechado agora · Abre às 08:00", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" };
        } else {
          return { isOpen: false, text: "Fechado agora · Abre segunda-feira às 08:00", color: "text-stone-400 bg-stone-800/60 border-stone-700" };
        }
      }

      // Sunday
      return { isOpen: false, text: "Fechado aos domingos · Abre segunda às 08:00", color: "text-stone-400 bg-stone-800/60 border-stone-700" };
    } catch {
      return { isOpen: true, text: "Segunda a Sexta das 08h às 18h", color: "text-stone-300 bg-stone-800" };
    }
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Nissey Auto Elétrico, ${COMPANY_INFO.address}`
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    `Nissey Auto Elétrico ${COMPANY_INFO.address}`
  )}`;

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <span>Onde Estamos</span>
            <span aria-hidden="true">·</span>
            <span>Fácil Acesso</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Localização e Horário de Atendimento
          </h2>
          
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Estamos estrategicamente localizados no Jardim São Pedro em Barueri, a poucos minutos do centro e de Alphaville.
          </p>
        </div>

        {/* Content Layout: Info Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Detailed Info Box */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-stone-900/60 border border-stone-800 shadow-xl space-y-6">
            
            <div className="space-y-6">
              {/* Status Pill */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${shopStatus.color}`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{shopStatus.text}</span>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>Endereço Completo</span>
                </span>
                
                <p className="text-base text-white font-medium leading-relaxed">
                  {COMPANY_INFO.address}
                </p>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar endereço para o GPS</span>
                    </>
                  )}
                </button>
              </div>

              {/* Hours Table */}
              <div className="space-y-2 pt-4 border-t border-stone-800">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>Horários de Funcionamento</span>
                </span>

                <div className="space-y-2 text-sm">
                  {COMPANY_INFO.hours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-stone-800/50">
                      <span className="text-stone-300">{h.day}</span>
                      <span className="font-mono text-white text-xs font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone & Contact */}
              <div className="space-y-2 pt-4 border-t border-stone-800">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-500" />
                  <span>Telefone e WhatsApp</span>
                </span>
                <p className="text-lg font-bold text-white flex items-center gap-2">
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-blue-400 transition-colors">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>

            {/* Direct Route Action Buttons */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-white border border-stone-700 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-blue-400" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-white border border-stone-700 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                <span>Abrir no Waze</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>

          </div>

          {/* Right: Embedded Google Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-xl relative min-h-[380px] lg:min-h-full">
            <iframe
              title="Localização da Nissey Auto Elétrico no Google Maps em Barueri"
              src="https://maps.google.com/maps?q=R.+Profa.+Elvira+Lef%C3%A9vre+Sales+Nemer,+193+-+Jardim+Sao+Pedro,+Barueri+-+SP,+06402-190&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter invert-[0.92] hue-rotate-180 brightness-95 contrast-90"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
