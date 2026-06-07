import React, { useEffect, useState, useRef } from 'react';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FaqSection from '../components/sections/FaqSection';

export default function About() {
  const stats = [
    { target: 1998, label: 'Est. Year', prefix: '', suffix: '' },
    { target: 1500, label: 'Happy Brides', prefix: '', suffix: '+' },
    { target: 25, label: 'Years Legacy', prefix: '', suffix: '+' },
    { target: 100, label: 'Purity Trust', prefix: '', suffix: '%' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  useEffect(() => {
    let observer;
    if (statsRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const duration = 2000; // 2 seconds
              const frameRate = 1000 / 60; // 60fps
              const totalFrames = Math.round(duration / frameRate);
              let frame = 0;

              const timer = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                
                setCounts(
                  stats.map((stat) => {
                    const currentVal = Math.round(stat.target * progress);
                    return currentVal > stat.target ? stat.target : currentVal;
                  })
                );

                if (frame === totalFrames) {
                  clearInterval(timer);
                }
              }, frameRate);

              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(statsRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Our Story Section */}
      <section className="relative bg-ivory pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-stretch">
            
            <div className="lg:col-span-6 flex">
              <div className="relative w-full grid grid-cols-2 gap-4 h-full" data-aos="fade-right">
                <div className="h-full">
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white h-full relative">
                    <img src="/images/sli.jpg" className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110" alt="Legacy" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 h-full">
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white h-1/2 relative">
                    <img src="/images/collections/5.jpg" className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110" alt="Collection 5" />
                  </div>
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white h-1/2 relative">
                    <img src="/images/collections/6.jpg" className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110" alt="Collection 6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between text-left" data-aos="fade-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs block">Our Story</span>
                  <h2 className="font-serif text-5xl md:text-7xl text-text leading-none tracking-tighter">Beyond Brilliance.</h2>
                  <p className="text-text/70 text-md md:text-lg leading-relaxed font-medium">
                    At Dhrish, we believe jewelry is a silent language of love and legacy. Our artisans breathe life into precious metals and stones.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-rose flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                      <i className="fa-solid fa-crown text-primary group-hover:text-white text-sm transition-colors"></i>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl sm:text-xl text-text leading-none">Authentic 916 Gold</h4>
                      <p className="text-text/50 text-[13px] sm:text-[15px] font-medium mt-1">100% BIS Hallmarked investment for your future.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-rose flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                      <i className="fa-solid fa-gem text-primary group-hover:text-white text-sm transition-colors"></i>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-text leading-none">Certified Diamonds</h4>
                      <p className="text-text/50 text-[13px] sm:text-[15px] font-medium mt-1">IGI and GIA certified stones for exceptional clarity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-rose flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                      <i className="fa-solid fa-feather-pointed text-primary group-hover:text-white text-sm transition-colors"></i>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-text leading-none">Bespoke Artistry</h4>
                      <p className="text-text/50 text-[13px] sm:text-[15px] font-medium mt-1">Direct Master-designer collaboration for unique pieces.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-0 border-t border-gold/10">
                <div className="flex justify-start">
                  <div className="flex items-center gap-4 bg-white rounded-[1.5rem] px-5 py-5 shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-dark/20 mt-4">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg"></div>
                      <img 
                        src="/images/charaters/men.jpg" 
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-gold/20" 
                        alt="Founder" 
                      />
                    </div>
                    <div>
                      <h5 className="font-serif text-3xl text-text leading-none">Ahmad Ibrahim</h5>
                      <span className="text-primary/80 text-[9px] lg:text-[13px] uppercase tracking-[0.35em] font-bold block mt-1 ml-4 text-left">
                        Founder & Chairman
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 lg:mt-20 border-t border-gold/10 pt-10" 
            id="stats-counter"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="block font-serif text-5xl md:text-7xl text-dark/90 leading-none">
                  {stat.prefix}{counts[idx]}{stat.suffix}
                </span>
                <span className="block text-primary text-[10px] uppercase tracking-[0.3em] font-bold mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-rose py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1 relative" data-aos="fade-right">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 space-y-4">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white/50 aspect-[4/5] transform hover:-rotate-2 transition-transform duration-700">
                    <img src="/images/collections/7.jpg" className="w-full h-full object-cover" alt="Method 1" />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white/50 aspect-square transform hover:rotate-2 transition-transform duration-700">
                    <img src="/images/collections/5.jpg" className="w-full h-full object-cover" alt="Method 2" />
                  </div>
                </div>
                <div className="col-span-5 space-y-4 pt-12 lg:pt-20">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white/50 aspect-square transform hover:rotate-2 transition-transform duration-700">
                    <img src="/images/collections/8.jpg" className="w-full h-full object-cover" alt="Method 3" />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white/50 aspect-[3/4] transform hover:-rotate-2 transition-transform duration-700">
                    <img src="/images/collections/6.jpg" className="w-full h-full object-cover" alt="Method 4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-12 text-left" data-aos="fade-left">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Methodology</span>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl text-text leading-[0.95] tracking-tighter">Our Approach</h2>
                <p className="text-text/70 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
                  Merging tradition with technological precision, our workflow is designed to ensure that every gem and metal meets the Dhrish standard of excellence.
                </p>
              </div>

              <div className="space-y-10 relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/10 hidden md:block"></div>

                <div className="flex flex-row gap-6 md:gap-10 group relative">
                  <div className="w-12 h-12 rounded-full bg-white border border-gold/20 flex items-center justify-center shrink-0 z-10 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <span className="font-serif text-lg text-primary group-hover:text-white transition-colors">01</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl text-text group-hover:text-primary transition-colors">Creative Vision</h4>
                    <p className="text-text/60 text-base leading-relaxed font-medium">Every design begins as a unique hand-drawn sketch, drawing inspiration from both historical heritage and contemporary global trends.</p>
                  </div>
                </div>

                <div className="flex flex-row gap-6 md:gap-10 group relative">
                  <div className="w-12 h-12 rounded-full bg-white border border-gold/20 flex items-center justify-center shrink-0 z-10 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <span className="font-serif text-lg text-primary group-hover:text-white transition-colors">02</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl text-text group-hover:text-primary transition-colors">Master Forging</h4>
                    <p className="text-text/60 text-base leading-relaxed font-medium">Our senior artisans spend hundreds of hours hand-setting each individual stone under microscopic precision to ensure eternal structural integrity.</p>
                  </div>
                </div>

                <div className="flex flex-row gap-6 md:gap-10 group relative">
                  <div className="w-12 h-12 rounded-full bg-white border border-gold/20 flex items-center justify-center shrink-0 z-10 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <span className="font-serif text-lg text-primary group-hover:text-white transition-colors">03</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl text-text group-hover:text-primary transition-colors">Ethical Certification</h4>
                    <p className="text-text/60 text-base leading-relaxed font-medium">Rigorous multi-level quality audits are performed to verify GIA/IGI diamond certification and 100% BIS Hallmarking before it reaches your hands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Creative Team Section */}
      <section className="bg-ivory py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-7 lg:mb-16">
            <div className="max-w-2xl text-left" data-aos="fade-right">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs block">Artisans of Excellence</span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-text mt-4 leading-tight">Our Creative Team</h2>
            </div>
            <p className="hidden sm:flex text-text/50 max-w-sm text-sm lg:text-right font-bold italic lg:pt-17" data-aos="fade-left">
              Meet the visionary designers and master gemologists who craft your timeless treasures.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
            <div className="group" data-aos="fade-up" data-aos-delay="100">
              <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg relative mb-1 lg:mb-3 border border-gold/10">
                <img src="/images/charaters/t2.jpg" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt="Sarah Jane" />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gold transition-all duration-300 shadow-xl"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gold transition-all duration-300 shadow-xl"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <h4 className="font-serif text-xl md:text-2xl text-text text-center group-hover:text-gold transition-colors duration-500">Sarah Jane</h4>
              <span className="text-primary/80 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-center block mt-0 lg:mt-1">Head of Design</span>
            </div>

            <div className="group" data-aos="fade-up" data-aos-delay="200">
              <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg relative mb-1 lg:mb-3 border border-gold/10">
                <img src="/images/charaters/men.jpg" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt="David Miller" />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gold transition-all duration-300 shadow-xl"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gold transition-all duration-300 shadow-xl"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <h4 className="font-serif text-xl md:text-2xl text-text text-center group-hover:text-gold transition-colors duration-500">David Miller</h4>
              <span className="text-primary/80 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-center block mt-0 lg:mt-1">Master Gemologist</span>
            </div>

            <div className="group" data-aos="fade-up" data-aos-delay="300">
              <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg relative mb-1 lg:mb-3 border border-gold/10">
                <img src="/images/charaters/t3.jpg" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt="Elena Rossi" />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gold transition-all duration-300 shadow-xl"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gold transition-all duration-300 shadow-xl"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <h4 className="font-serif text-xl md:text-2xl text-text text-center group-hover:text-gold transition-colors duration-500">Elena Rossi</h4>
              <span className="text-primary/80 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-center block mt-0 lg:mt-1">Art Director</span>
            </div>

            <div className="group" data-aos="fade-up" data-aos-delay="400">
              <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg relative mb-1 lg:mb-3 border border-gold/10">
                <img src="/images/charaters/t4.jpg" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt="Marcus Wong" />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gold transition-all duration-300 shadow-xl"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gold transition-all duration-300 shadow-xl"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <h4 className="font-serif text-xl md:text-2xl text-text text-center group-hover:text-gold transition-colors duration-500">Marcus Wong</h4>
              <span className="text-primary text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-center block mt-0 lg:mt-1">Senior Artisan</span>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
