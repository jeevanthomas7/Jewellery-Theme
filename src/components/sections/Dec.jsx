import React from 'react';
import { Link } from 'react-router-dom';

export default function Dec() {
  return (
    <section className="relative pt-12 md:pt-16 lg:pt-30 pb-12 md:pb-16 lg:pb-30 overflow-hidden bg-ivory">
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between pointer-events-none opacity-20">
        <div className="w-[1px] h-full bg-text/10"></div>
        <div className="w-[1px] h-full bg-text/10 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/10"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
          
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start" data-aos="fade-right" data-aos-duration="1200">
            <div className="absolute -left-10 lg:left-0 top-1/2 -translate-y-1/2 w-[85%] lg:w-[70%] h-[110%] lg:bg-[#E5DACE] rounded-2xl -z-10"></div>
            <div className="w-full max-w-[420px] lg:ml-16 shadow-2xl relative">
              <img src="/images/dec.webp" className="w-full h-100 lg:h-auto object-cover border-[12px] md:border-[15px] border-white/80 rounded-2xl" alt="Antique Diamond" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-20 relative">
            <div className="absolute -left-19 top-1/2 -translate-y-1/2 w-[100px] h-[95%] bg-rose opacity-100 -z-10 hidden lg:block rounded-r-2xl"></div>
            
            <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left items-center lg:items-start">
              <div className="space-y-4" data-aos="fade-left" data-aos-duration="1000">
                <h2 className="font-serif text-[35px] md:text-[70px] lg:text-[85px] leading-[0.95] text-text tracking-tight">
                  Antique <br /> Diamond Necklaces
                </h2>
                <p className="font-serif italic text-2xl md:text-3xl text-text/60">
                  beautiful colors. excellent quality.
                </p>
              </div>
              
              <p className="text-text/70 text-base md:text-lg leading-relaxed max-w-xl font-medium" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                Antique Diamond Necklaces crafted with timeless elegance and refined detail.
                Beautiful colors, radiant brilliance, and exceptional craftsmanship in every piece.
                Designed to bring luxury, charm, and sophistication to every special moment.
              </p>

              <div className="mt-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <Link to="/collections" className="group bg-primary text-white border-none rounded-2xl px-10 py-4 text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-dark shrink-0 shadow-lg shadow-primary/20 flex items-center gap-4">
                  <span className="uppercase tracking-widest">Discover More</span>
                  <i className="fa-solid fa-arrow-right -rotate-45 transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-2"></i>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
