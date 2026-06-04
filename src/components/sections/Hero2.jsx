import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero2() {
  return (
    <section className="relative min-h-screen bg-rose/70 flex items-center pt-24 sm:pt-28 lg:pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span data-aos="fade-right" className="text-text/60 font-bold tracking-[0.2em] text-xs md:text-sm block lg:pt-10">
                Crafted with passion and precision.
              </span>
              <h1 data-aos="fade-right" data-aos-delay="200" className="font-serif text-text text-[45px] md:text-[65px] lg:text-[75px] leading-tight tracking-tight font-bold">
                Discover Your Sparkle
              </h1>
              <p data-aos="fade-right" data-aos-delay="400" className="text-text/70 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                Discover timeless elegance, handcrafted with precision and passion. Embrace luxury that lasts a lifetime.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
              <Link 
                to="/collections"
                className="group relative inline-flex items-center gap-6 border border-gold/30 text-white bg-primary lg:px-12 px-8 py-4 lg:py-5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold shadow-sm hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-0 bg-dark group-hover:w-full transition-all duration-500 ease-out -z-10"></div>
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] group-hover:text-white transition-colors">
                  Explore Now
                </span>
                <i className="fa-solid fa-arrow-right -rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-2"></i>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-6 w-full pt-2 lg:pt-6" data-aos="fade-up" data-aos-delay="800">
              <div className="aspect-square rounded-[1rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
                <img src="/images/collections/8.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Collection Item 8" />
              </div>

              <div className="aspect-square rounded-[1rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
                <img src="/images/collections/5.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Collection Item 5" />
              </div>

              <div className="aspect-square rounded-[1rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
                <img src="/images/new.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Collection Item New" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end lg:pt-5 w-full">
            <div className="relative w-full max-w-[500px]" data-aos="zoom-in" data-aos-duration="1500">
              <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[605px] border-none">
                <img src="/images/sli.jpg" className="w-full h-full object-cover" alt="Discover Your Sparkle" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
