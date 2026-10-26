import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, ShieldCheck, Car, User, Phone, Mail, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    car: '',
    service: 'Baterias Automotivas',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    'Baterias Automotivas (Troca / Teste)',
    'Injeção Eletrônica / Scanner OBD2',
    'Som Automotivo & Central Multimídia',
    'Alternador & Motor de Partida',
    'Iluminação & Faróis LED',
    'Travas, Vidros Elétricos & Ar-Condicionado',
    'Revisão Elétrica Preventiva / Outro',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Por favor, informe seu nome e telefone/WhatsApp.');
      return;
    }

    setErrorMsg('');

    // Format WhatsApp message
    const formattedText = 
`⚡ *SOLICITAÇÃO DE ORÇAMENTO - NISSEY AUTO ELÉTRICO* ⚡
━━━━━━━━━━━━━━━━━━━━━━
👤 *Nome:* ${formData.name.trim()}
📱 *WhatsApp:* ${formData.phone.trim()}
${formData.email.trim() ? `📧 *E-mail:* ${formData.email.trim()}\n` : ''}🚗 *Veículo:* ${formData.car.trim() || 'Não informado'}
🛠️ *Serviço:* ${formData.service}
📝 *Detalhes:*
${formData.message.trim() || 'Gostaria de consultar disponibilidade e valor estimado.'}
━━━━━━━━━━━━━━━━━━━━━━
_Enviado pelo site nisseyautoeletrico.com.br_`;

    const encoded = encodeURIComponent(formattedText);
    const targetUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encoded}`;

    // Mark submitted and redirect
    setSubmitted(true);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      car: '',
      service: 'Baterias Automotivas',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-stone-900/40 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <span>Atendimento Ágil</span>
                <span aria-hidden="true">·</span>
                <span>Sem Burocracia</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Peça seu orçamento em menos de 1 minuto
              </h2>
              
              <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
                Preencha os dados básicos do seu veículo. Nossa equipe recebe a mensagem instantaneamente no WhatsApp 
                da oficina com todas as informações e já retorna com valores e horários disponíveis.
              </p>
            </div>

            {/* Quick Benefits List */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Resposta Rápida</h4>
                  <p className="text-xs text-stone-400">Atendimento humanizado em horário comercial por nossa equipe técnica.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
                <Car className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Todas as Marcas e Modelos</h4>
                  <p className="text-xs text-stone-400">Nacionais, importados, utilitários, frotas e carros com sistema Start-Stop.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Orçamento sem Compromisso</h4>
                  <p className="text-xs text-stone-400">Tire suas dúvidas antes de comparecer à oficina.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs text-blue-200">
              <span className="font-semibold block text-white mb-0.5">Prefere ligar agora?</span>
              Ligue no telefone fixo <strong className="text-blue-400 font-bold">{COMPANY_INFO.phoneDisplay}</strong> ou venha direto à nossa oficina no Jardim São Pedro.
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 shadow-xl relative">
              
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white">Mensagem preparada com sucesso!</h3>
                  <p className="text-stone-300 text-sm max-w-md mx-auto">
                    Seu navegador abriu a conversa no WhatsApp oficial da <strong>Nissey Auto Elétrico</strong> com todos os detalhes prontos para envio.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 transition-colors"
                    >
                      Preencher outro formulário
                    </button>
                    
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir WhatsApp novamente</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-stone-800 pb-3 mb-4">
                    <h3 className="text-xl font-bold text-white">Formulário de Orçamento Rápido</h3>
                    <p className="text-xs text-stone-400">Os dados serão formatados diretamente para o WhatsApp oficial.</p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-xs text-red-300">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-blue-500" />
                        <span>Seu Nome *</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Carlos Oliveira"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-blue-500" />
                        <span>WhatsApp / Telefone *</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ex: (11) 98765-4321"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Car */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-stone-500" />
                        <span>E-mail (opcional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@exemplo.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="car" className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-blue-500" />
                        <span>Modelo e Ano do Carro</span>
                      </label>
                      <input
                        type="text"
                        id="car"
                        value={formData.car}
                        onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                        placeholder="Ex: Onix 2022 / Corolla 2019"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-stone-300 mb-1.5">
                      Serviço Desejado
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc} className="bg-stone-900 text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-stone-500" />
                      <span>Mensagem ou Sintoma do Veículo</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ex: O carro demora a dar a partida pela manhã e acendeu a luz de injeção..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all text-sm group"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Enviar orçamento via WhatsApp</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[11px] text-stone-400 text-center mt-2">
                      Sem cadastro de senhas. A conversa é aberta diretamente no aplicativo do WhatsApp.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
