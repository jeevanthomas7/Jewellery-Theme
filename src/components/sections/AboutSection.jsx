import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="relative bg-ivory mt-8 lg:mt-12 pt-12 md:pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between pointer-events-none select-none">
        <div className="w-[1px] h-full bg-text/5"></div>
        <div className="w-[1px] h-full bg-text/5"></div>
        <div className="w-[1px] h-full bg-text/5 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/5 hidden md:block"></div>
        <div className="w-[1px] h-full bg-text/5"></div>
      </div>
      <div className="absolute max-w-[1440px] mx-auto px-6 lg:px-12 inset-0 pointer-events-none select-none z-0">
        <div 
          data-aos="fade-right" 
          data-aos-delay="300" 
          data-aos-duration="1000"
          className="font-serif text-[60px] lg:text-[300px] text-primary/10 leading-none tracking-tighter absolute lg:-top-15 lg:left-5 lg:translate-x-10 translate-x-6 lg:translate-y-10 pointer-events-auto hover:text-primary/50 transition-colors duration-500"
        >
          jewelry
        </div>
        <div 
          data-aos="fade-left" 
          data-aos-delay="200" 
          data-aos-duration="1000"
          className="font-serif text-[60px] lg:text-[300px] text-primary/10 leading-none tracking-tighter absolute lg:bottom-18 right-4 lg:right-0 lg:-translate-x-20 pr-6 lg:pr-0 translate-y-10 lg:-translate-y-10 pointer-events-auto hover:text-primary/50 transition-colors duration-500"
        >
          selection
        </div>
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center pointer-events-none">
        <div className="max-w-[950px] mx-auto pt-15 lg:pt-32 pb-5 lg:pb-32 pointer-events-auto">
          <p className="font-serif text-[23px] md:text-[42px] lg:text-[52px] text-text/80 leading-[1.2] tracking-tight font-medium">
            It has always been to produce awesome products for the dynamic urban lifestyle of the modern woman.
          </p>
        </div>

        <div className="pointer-events-auto">
          <Link 
            to="/about"
            className="group relative flex flex-col items-center justify-center w-25 h-25 md:w-38 md:h-38 rounded-full border-[15px] md:border-[22px] border-dark/10 hover:border-primary/60 transition-all duration-700 ease-in-out"
          >
            <div className="text-center font-serif leading-none flex flex-col items-center">
              <span className="text-[10px] md:text-[13px] font-bold uppercase tracking-[0.4em] text-text">Our</span>
              <span className="text-[10px] md:text-[13px] font-bold uppercase tracking-[0.4em] text-text mt-1.5">Story</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
