import React, { useState } from 'react';
import {
  Monitor,
  GitCommit,
  Clock,
  FolderSync,
  Box,
  Lock,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal
} from 'lucide-react';
import { CORE_ITSM_CARDS } from '../data/faveoData';

interface CoreItsmCardsProps {
  onOpenDemo: () => void;
}

export const CoreItsmCards: React.FC<CoreItsmCardsProps> = ({ onOpenDemo: _onOpenDemo }) => {
  // Carousel index state
  const [startIndex, setStartIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const visibleCount = 3;
  const maxStartIndex = Math.max(0, CORE_ITSM_CARDS.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStartIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStartIndex ? prev + 1 : 0));
  };

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return (
          <div className="flex flex-col items-center justify-center">
            <Monitor className="w-12 h-12 stroke-[1.25] text-slate-800" />
          </div>
        );
      case 'Workflow':
        return (
          <div className="flex flex-col items-center justify-center">
            <GitCommit className="w-12 h-12 stroke-[1.25] text-slate-800" />
          </div>
        );
      case 'ClockGears':
        return (
          <div className="flex flex-col items-center justify-center">
            <Clock className="w-12 h-12 stroke-[1.25] text-slate-800" />
          </div>
        );
      case 'FolderClock':
        return (
          <div className="flex flex-col items-center justify-center">
            <FolderSync className="w-12 h-12 stroke-[1.25] text-slate-800" />
          </div>
        );
      case 'CubeCycle':
        return (
          <div className="flex flex-col items-center justify-center">
            <Box className="w-12 h-12 stroke-[1.25] text-slate-800" />
          </div>
        );
      case 'ShieldLock':
        return (
          <div className="flex flex-col items-center justify-center">
            <Lock className="w-12 h-12 stroke-[1.25] text-slate-800" />
          </div>
        );
      default:
        return <Monitor className="w-12 h-12 stroke-[1.25] text-slate-800" />;
    }
  };

  const visibleCards = viewMode === 'carousel'
    ? CORE_ITSM_CARDS.slice(startIndex, startIndex + visibleCount)
    : CORE_ITSM_CARDS;

  return (
    <section id="solutions" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00aeef]">
            Core ITSM Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
            Core ITSM Features in Faveo Service Desk
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Explore the core architectural modules powering incident resolution, discovery, and automated SLA compliance
          </p>

          {/* View Toggle */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="inline-flex p-1 bg-white rounded-lg border border-slate-200 shadow-2xs">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'carousel' ? 'bg-[#00aeef] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Carousel View</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#00aeef] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Show All (6)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container with Arrows matching screenshots 2 & 3 */}
        <div className="relative">
          
          {/* Left Arrow (only in carousel mode) */}
          {viewMode === 'carousel' && (
            <button
              onClick={handlePrev}
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg flex items-center justify-center transition-all cursor-pointer focus:outline-none"
              aria-label="Previous core feature"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Cards Grid / Carousel */}
          <div className={`grid gap-6 ${viewMode === 'carousel' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col text-left group"
              >
                {/* Top Colored Header with Icon matching screenshots 2 & 3 */}
                <div className={`h-48 ${card.bannerBg} flex items-center justify-center border-b border-slate-100 transition-colors`}>
                  <div className="p-4 rounded-xl group-hover:scale-105 transition-transform">
                    {getCardIcon(card.iconName)}
                  </div>
                </div>

                {/* Bottom Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span>ITIL v4 Standard</span>
                    <span className="font-mono text-[11px] text-slate-400">#ITSM-MODULE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow (only in carousel mode) */}
          {viewMode === 'carousel' && (
            <button
              onClick={handleNext}
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg flex items-center justify-center transition-all cursor-pointer focus:outline-none"
              aria-label="Next core feature"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

        </div>

        {/* Carousel indicators dots */}
        {viewMode === 'carousel' && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  startIndex === idx ? 'w-8 bg-[#00aeef]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
