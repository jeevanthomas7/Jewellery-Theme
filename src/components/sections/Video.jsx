import React from 'react';
import { Link } from 'react-router-dom';

export default function Video() {
  return (
    <section className="relative h-[65vh] md:h-[85vh] w-full overflow-hidden">
      <video autoplay="autoplay" muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-dark/60 z-10"></div>

      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl space-y-2 md:space-y-3">
          <h2 
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.0] tracking-tight" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Crafting moments that last forever
          </h2>

          <div className="pt-6 md:pt-10" data-aos="fade-up" data-aos-delay="400">
            <Link 
              to="/collections" 
              className="group relative inline-flex items-center gap-4 bg-primary text-white px-6 py-4 md:px-12 md:py-5 rounded-2xl transition-all duration-500 hover:bg-dark hover:text-white shadow-2xl shadow-primary/20 transform hover:-translate-y-1"
            >
              <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.3em]">Explore Collections</span>
              <i className="fa-solid fa-arrow-right -rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
