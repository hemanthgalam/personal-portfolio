import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from 'lucide-react';

interface SlideshowProps {
  slides: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen) {
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrev();
        if (e.key === 'Escape') setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, goToNext, goToPrev]);

  if (!slides || slides.length === 0) return null;

  // Render content logic to avoid code duplication
  const renderControls = (isFull: boolean) => (
    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 ${isFull ? 'opacity-100' : ''}`}>
        
        {/* Top Actions */}
        <div className="flex justify-end">
            <button 
                onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} 
                className="p-2.5 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
                title={isFull ? "Exit Fullscreen" : "Fullscreen"}
            >
                {isFull ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-between items-center">
             <button 
                onClick={(e) => { e.stopPropagation(); goToPrev(); }} 
                className="p-2.5 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
                title="Previous Slide"
             >
                <ChevronLeft size={24} />
            </button>

             <div className="flex flex-col items-center">
                 <div className="text-white text-sm font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-white/10">
                    Slide {currentIndex + 1} / {slides.length}
                </div>
                {/* Dots Indicator */}
                <div className="flex gap-1.5 mt-2">
                    {slides.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-3' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
             </div>

             <button 
                onClick={(e) => { e.stopPropagation(); goToNext(); }} 
                className="p-2.5 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
                title="Next Slide"
             >
                <ChevronRight size={24} />
            </button>
        </div>
    </div>
  );

  return (
    <>
      {/* Standard View */}
      <div className="relative group aspect-video w-full bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
        <img
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
        />
        {renderControls(false)}
      </div>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col animate-[fadeIn_0.2s_ease-out]">
             {/* Header */}
             <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-[101]">
                <div className="text-white/80 font-medium px-4">
                    Presentation View
                </div>
                <button
                    onClick={() => setIsFullscreen(false)}
                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                    <X size={28} />
                </button>
             </div>

             {/* Main Content */}
             <div className="flex-1 flex items-center justify-center p-4 md:p-10 w-full h-full">
                <div className="relative w-full max-w-7xl h-full flex items-center justify-center group">
                    <img
                        src={slides[currentIndex]}
                        alt={`Slide ${currentIndex + 1} (Fullscreen)`}
                        className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                    />
                     {renderControls(true)}
                </div>
             </div>
        </div>
      )}
    </>
  );
};

export default Slideshow;