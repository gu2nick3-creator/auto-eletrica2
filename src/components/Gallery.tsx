import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/company';

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Baterias', 'Injeção', 'Som & Acessórios', 'Alternadores', 'Iluminação'];

  const filteredItems = activeCategory === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleCloseLightbox, handleNext, handlePrev]);

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-stone-900/30 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              <span>Estrutura e Trabalho</span>
              <span aria-hidden="true">·</span>
              <span>Galeria de Fotos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Nosso Dia a Dia na Oficina
            </h2>
            <p className="mt-2 text-stone-300 text-sm sm:text-base">
              Veja a estrutura técnica, os equipamentos de teste e alguns dos serviços executados em nossa oficina.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-950 rounded-xl border border-stone-800 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedImageIndex(null);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'text-stone-400 hover:text-white hover:bg-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 relative aspect-[4/3] shadow-md hover:border-blue-500/60 transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpenLightbox(index);
                }
              }}
              aria-label={`Ver imagem ampliada: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Zoom hint */}
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-stone-950/80 backdrop-blur-sm text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-blue-400" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mt-0.5 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && currentItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Visualizador de imagem em tela cheia"
          >
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={handleCloseLightbox}
              aria-hidden="true"
            />

            {/* Lightbox Header / Close button */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
              <span className="text-xs font-mono text-stone-400 bg-stone-900/80 px-2.5 py-1 rounded-md border border-stone-800">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
              <button
                type="button"
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-full bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 transition-colors"
                aria-label="Fechar tela cheia"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 transition-colors"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 transition-colors"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Modal Image & Info Container */}
            <div
              className="relative z-10 max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="max-h-[68vh] sm:max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Bottom detail bar */}
              <div className="mt-4 text-center max-w-2xl px-4">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {currentItem.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {currentItem.title}
                </h3>
                <p className="text-sm text-stone-300 mt-1">
                  {currentItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
