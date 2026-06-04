import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[92vh] sm:h-screen w-full overflow-hidden pt-10 sm:pt-20 bg-dark">
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          <img 
            src="/images/new.png" 
            alt="Nova Gold"
            className="absolute inset-0 w-full h-full object-cover object-center scale-100 opacity-100"
            style={{
              animation: 'hero-zoom 30s linear infinite alternate'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/40 to-transparent z-10"></div>
          <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center">
            <div className="max-w-4xl text-left">
              <h1 
                data-aos="fade-up" 
                data-aos-duration="600"
                className="font-serif text-[70px] md:text-[90px] lg:text-[125px] leading-[0.90] text-ivory tracking-tighter mb-4 pt-15 lg:pt-25"
              >
                Finest<br />Jewellery
              </h1>
              <p 
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay="100"
                className="font-serif text-2xl md:text-4xl text-ivory/80 ml-2 tracking-tight sm:pt-5"
              >
                for Every Celebration.
              </p>
              <div className="mt-10 lg:mt-10 pl-5 lg:pl-25 group">
                <Link 
                  to="/collections"
                  className="inline-flex items-center gap-3 cursor-pointer border border-white/30 py-3 px-6 lg:py-4 lg:px-6 rounded-2xl transition-all duration-500 hover:border-white"
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-gold group-hover:text-white transition-colors duration-300">
                    Explore Now
                  </span>
                  <i className="fa-solid fa-arrow-right -rotate-45 text-gold transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        data-aos="fade-left" 
        data-aos-delay="600"
        className="absolute -right-4 md:right-10 lg:right-30 bottom-20 lg:bottom-30 flex flex-col items-center gap-30 z-30"
      >
        <a 
          href="#"
          className="rotate-90 text-[11px] font-bold tracking-[0.2em] text-white opacity-90 hover:opacity-100 hover:text-gold transition-all whitespace-nowrap flex items-center gap-2"
        >
          <i className="fab fa-instagram text-sm"></i> Instagram
        </a>
        <a 
          href="#"
          className="rotate-90 text-[11px] font-bold tracking-[0.2em] text-white opacity-90 hover:opacity-100 hover:text-gold transition-all whitespace-nowrap flex items-center gap-2"
        >
          <i className="fab fa-facebook-f text-sm"></i> Facebook
        </a>
      </div>
    </section>
  );
}
