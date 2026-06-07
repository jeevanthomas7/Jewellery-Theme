import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-ivory">
      
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none flex flex-col justify-between p-12">
        <h2 className="font-serif text-[150px] md:text-[300px] text-rose leading-none tracking-tighter">lost</h2>
        <h2 className="font-serif text-[150px] md:text-[300px] text-rose leading-none tracking-tighter self-end">sparkle</h2>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <div className="mb-12">
          <Link to="/">
            <img src="/images/logo.png" alt="Dhrish Gold" className="h-16 w-auto mx-auto" />
          </Link>
        </div>

        <div className="space-y-6">
          <span className="text-gold font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase block">Error 404</span>
          <h1 className="font-serif text-5xl md:text-7xl text-text leading-tight tracking-tighter">Page Not Found</h1>
          <p className="text-text/70 text-base md:text-lg leading-relaxed font-medium max-w-md mx-auto">
            The masterpiece you are seeking has either been moved or is currently unavailable in our boutique.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <Link 
            to="/" 
            className="group relative inline-flex items-center gap-6 bg-primary text-white px-10 py-4 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-xl shadow-primary/20"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] relative z-10">Return to Home</span>
            <i className="fa-solid fa-house text-[10px] relative z-10 transition-transform duration-500 group-hover:-translate-y-1"></i>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-px h-20 bg-text"></div>
      </div>
    </div>
  );
}
