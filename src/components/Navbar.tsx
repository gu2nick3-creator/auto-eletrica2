import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppLink } from '../data/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Top microbar with contact & location summary */}
      <div className="bg-stone-950/80 border-b border-stone-800/80 text-xs text-stone-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>{COMPANY_INFO.shortAddress}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>Seg a Sex: 08h às 18h · Sáb: 08h às 12h</span>
            <span className="text-stone-600">|</span>
            <span className="text-amber-400 font-medium">★ 4.7 no Google (213 avaliações)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-stone-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-stone-800/80 py-3'
            : 'bg-stone-950/80 backdrop-blur-sm border-b border-stone-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-600/30 group-hover:bg-blue-500 transition-colors">
                N
              </span>
              <span className="group-hover:text-blue-400 transition-colors">
                Nissey <span className="text-blue-500 font-semibold">Auto Elétrico</span>
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={buildWhatsAppLink("Olá! Gostaria de pedir um orçamento para o meu carro.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg shadow-blue-600/25 transition-all whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Pedir orçamento</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-blue-600 rounded-lg"
                aria-label="Abrir WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-300 hover:text-white hover:bg-stone-900 rounded-lg"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-stone-200 hover:text-white hover:bg-stone-900 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-stone-800">
                <a
                  href={buildWhatsAppLink("Olá! Gostaria de pedir um orçamento para o meu carro.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir orçamento no WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
