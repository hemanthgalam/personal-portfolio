import React, { useEffect } from 'react';
import { X, Network } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, subtitle, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur overlay */}
      <div 
        className="absolute inset-0 bg-[#050811]/85 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      {/* Glassmorphic Neural Modal Box */}
      <div 
        className="relative bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Subtle top indicator bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 shrink-0 bg-slate-950/60">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sky-400">
              <Network size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
              {subtitle && <p className="text-sky-400 font-semibold font-mono text-xs mt-0.5 uppercase tracking-wider">{subtitle}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 border border-slate-700 text-slate-300 hover:text-white hover:border-sky-400 bg-slate-900 rounded-xl transition-colors flex items-center justify-center"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 bg-slate-900/90 text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;