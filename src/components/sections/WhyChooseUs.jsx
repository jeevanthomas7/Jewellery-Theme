import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  return (
    <section className="relative bg-ivory pt-12 md:pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between pointer-events-none opacity-20 z-0">
        <div className="w-[1px] h-full bg-text/10"></div>
        <div className="w-[1px] h-full bg-text/10 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/10 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/10"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-6 lg:mb-12" data-aos="fade-right" data-aos-duration="800">
          <div className="max-w-2xl text-left">
            <span className="text-gold font-bold tracking-[0.4em] text-[10px] md:text-xs mb-3 block uppercase">The Nova Advantage</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text tracking-tight leading-tight">Why choose Us</h2>
          </div>
          <div className="hidden md:flex">
            <Link to="/about" className="group bg-primary text-white border-none tracking-widest uppercase rounded-2xl px-10 py-4 text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-dark shrink-0 shadow-lg shadow-primary/20 flex items-center gap-3">
              <span>Learn More</span>
              <i className="fa-solid fa-arrow-right -rotate-45 transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-2"></i>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10" data-aos="fade-left" data-aos-duration="800">
          <div className="group bg-white border border-primary/10 p-5 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-700">
            <div className="w-11 h-11 md:w-15 md:h-15 bg-primary rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 transition-all duration-700 rotate-45 group-hover:rotate-0 shadow-lg shadow-primary/20 group-hover:bg-dark">
              <i className="fa-solid fa-award text-white text-xl md:text-3xl -rotate-45 group-hover:rotate-0 transition-all duration-700"></i>
            </div>
            <h4 className="font-serif text-lg md:text-2xl text-text mb-2 md:mb-4">BIS Hallmarked</h4>
            <p className="text-text/60 text-[11px] md:text-sm leading-relaxed font-bold">Every piece of gold jewelry is 100% BIS Hallmarked, guaranteeing purity.</p>
          </div>

          <div className="group bg-white border border-primary/10 p-5 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-700">
            <div className="w-11 h-11 md:w-15 md:h-15 bg-primary rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 transition-all duration-700 rotate-45 group-hover:rotate-0 shadow-lg shadow-primary/20 group-hover:bg-dark">
              <i className="fa-solid fa-gem text-white text-xl md:text-3xl -rotate-45 group-hover:rotate-0 transition-all duration-700"></i>
            </div>
            <h4 className="font-serif text-lg md:text-2xl text-text mb-2 md:mb-4">Certified Stones</h4>
            <p className="text-text/60 text-[11px] md:text-sm leading-relaxed font-bold">Our diamonds are ethically sourced and certified by world-renowned labs.</p>
          </div>

          <div className="group bg-white border border-primary/10 p-5 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-700">
            <div className="w-11 h-11 md:w-15 md:h-15 bg-primary rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 transition-all duration-700 rotate-45 group-hover:rotate-0 shadow-lg shadow-primary/20 group-hover:bg-dark">
              <i className="fa-solid fa-hand-holding-heart text-white text-xl md:text-3xl -rotate-45 group-hover:rotate-0 transition-all duration-700"></i>
            </div>
            <h4 className="font-serif text-lg md:text-2xl text-text mb-2 md:mb-4">Expert Curation</h4>
            <p className="text-text/60 text-[11px] md:text-sm leading-relaxed font-bold">Artisan designers blend traditional heritage with modern aesthetics.</p>
          </div>

          <div className="group bg-white border border-primary/10 p-5 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-700">
            <div className="w-11 h-11 md:w-15 md:h-15 bg-primary rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 transition-all duration-700 rotate-45 group-hover:rotate-0 shadow-lg shadow-primary/20 group-hover:bg-dark">
              <i className="fa-solid fa-arrows-rotate text-white text-xl md:text-3xl -rotate-45 group-hover:rotate-0 transition-all duration-700"></i>
            </div>
            <h4 className="font-serif text-lg md:text-2xl text-text mb-2 md:mb-4">Transparent Policies</h4>
            <p className="text-text/60 text-[11px] md:text-sm leading-relaxed font-bold">Experience peace of mind with our lifetime buy-back guarantee.</p>
          </div>
        </div>

        <div className="mt-12 lg:mt-18 p-5 md:p-14 bg-dark rounded-[2rem] md:rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10" data-aos="fade-up" data-aos-duration="800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-4 leading-tight">Visit our showroom to see the brilliance in person</h3>
            <p className="text-ivory/50 text-xs md:text-md uppercase tracking-[0.2em] font-bold">Experience luxury at Nova Gold & Diamonds.</p>
          </div>
          <Link to="/contact" className="group relative inline-flex items-center gap-4 bg-primary text-white px-6 py-4 lg:px-10 lg:py-5 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 shrink-0 z-10 shadow-2xl shadow-primary/20 font-bold uppercase tracking-widest text-[11px]">
            <span>Locate Showroom</span>
            <i className="fa-solid fa-location-dot transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
