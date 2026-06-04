import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner({ title, image = '/images/chatt.png' }) {
  return (
    <section 
      className="relative h-[350px] flex items-center justify-center bg-cover bg-center pt-35 sm:pt-20 md:pt-60 lg:pt-50"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(10, 12, 10, 0.80) 0%, rgba(26, 31, 25, 0.50) 50%, rgba(10, 12, 10, 0.65) 100%)'
        }}
      ></div>

      <div className="relative text-center text-white">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-wide font-serif">{title}</h1>
        <div className="flex items-center justify-center gap-1 lg:gap-2 text-[8px] md:text-xs lg:text-[10px] mb-10 sm:mb-10 md:mb-15 lg:mb-20 pt-2 lg:pt-4 uppercase tracking-wider font-semibold">
          <Link to="/" className="hover:text-gold transition-all">Home</Link>
          <span className="text-gold/90">/</span>
          <span className="text-white">{title}</span>
        </div>
      </div>
    </section>
  );
}
