import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Dec2() {
  const slides = [
    {
      img: '/images/dec2/c1.jpg',
      prodImg: '/images/dec2/1.webp',
      title: 'Ancient Jewelry Collection',
      tags: ['Light in weight', '14 Karat gold', 'Opal'],
      link: '/collections'
    },
    {
      img: '/images/dec2/c2.webp',
      prodImg: '/images/dec2/2.webp',
      title: 'Arquiteqtura Jewelry Collection',
      tags: ['Adjustable', '18 Karat gold', 'Hand-crafted'],
      link: '/collections'
    },
    {
      img: '/images/dec2/c3.jpg',
      prodImg: '/images/dec2/3.webp',
      title: 'Exuberant Jewelry Collection',
      tags: ['19 Karat gold', 'Pink Opal', 'Made with love'],
      link: '/collections'
    }
  ];

  const [current, setCurrent] = useState(0);
  const startX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section className="relative pt-12 md:pt-16 lg:pt-20 overflow-hidden bg-ivory">
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div 
          className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[550px] overflow-hidden rounded-2xl shadow-xl"
          id="heroSlider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <div 
                key={index} 
                className={`slide absolute inset-0 flex transition-opacity duration-700 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                data-aos={isActive ? "fade-left" : ""} 
                data-aos-duration="800"
              >
                <div className="relative w-[45%] sm:w-[35%] flex-shrink-0 overflow-hidden">
                  <img 
                    src={slide.img} 
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 scale-100 hover:scale-105"
                  />
                </div>
                <div className="flex-1 bg-rose flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 relative">
                  <div className="absolute top-0 right-10 sm:top-0 sm:right-16 w-28 sm:w-36 md:w-44 lg:w-58 pointer-events-none z-10">
                    <img 
                      src={slide.prodImg} 
                      alt="Product"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                  <div className="mt-20 sm:mt-24 md:mt-16 relative z-20 text-left">
                    <h2 className="font-serif text-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-3 sm:mb-4">
                      {slide.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {slide.tags.map((tag, tagIdx) => (
                        <React.Fragment key={tagIdx}>
                          {tagIdx > 0 && <span className="text-gold text-xs">•</span>}
                          <span className="text-text/50 text-[11px] sm:text-xs tracking-wider uppercase font-bold">
                            {tag}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                    <Link 
                      to={slide.link}
                      className="inline-flex items-center gap-3 border bg-ivory border-text/20 text-primary hover:border-gold hover:text-primary px-5 sm:px-7 py-2.5 sm:py-3 text-[7px] sm:text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 group"
                    >
                      <span className="w-5 h-[1px] bg-gold transition-all group-hover:w-7"></span>
                      Take a Look
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="absolute right-1 sm:right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20">
            <button 
              onClick={handlePrev}
              className="w-6 h-6 flex items-center justify-center text-text/30 hover:text-gold transition-colors duration-300"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <polygon points="5,0 10,10 0,10" />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-1.5" id="dotsContainer">
              {slides.map((_, index) => {
                const isActive = index === current;
                return (
                  <button 
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`rounded-full transition-all duration-300 ${isActive ? 'w-2 h-2 bg-gold' : 'w-1.5 h-1.5 bg-text/20 hover:bg-gold/40'}`}
                  ></button>
                );
              })}
            </div>
            <button 
              onClick={handleNext}
              className="w-6 h-6 flex items-center justify-center text-text/30 hover:text-gold transition-colors duration-300"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <polygon points="5,10 10,0 0,0" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
