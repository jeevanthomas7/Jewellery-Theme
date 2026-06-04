import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Testimonial from '../components/sections/Testimonial';

export default function Diamonds() {
  const initialDiamonds = [
    { name: 'Marquise Halo Ring', price: 145000, img: 'works/1.webp', tag: 'Best Seller' },
    { name: 'Royal Diamond Choker', price: 485000, img: 'works/2.webp', tag: 'Exclusive' },
    { name: 'Celestial Diamond Studs', price: 55000, img: 'works/3.webp', tag: 'New Arrival' },
    { name: 'Infinity Eternity Band', price: 82500, img: 'works/4.webp', tag: 'Certified' },
    { name: 'Vintage Drop Earrings', price: 125000, img: 'collections/5.jpg', tag: 'Bridal' },
    { name: 'Rose Petal Necklace', price: 210000, img: 'collections/6.jpg', tag: 'Signature' },
    { name: 'Princess Cut Solitaire', price: 899000, img: 'collections/7.jpg', tag: 'GIA Grade' },
    { name: 'Floral Diamond Bangle', price: 168000, img: 'collections/8.jpg', tag: 'Premium' }
  ];

  const [sortOrder, setSortOrder] = useState('featured');

  const sortedDiamonds = useMemo(() => {
    let result = [...initialDiamonds];
    if (sortOrder === 'low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [sortOrder]);

  return (
    <>
      <div className="sticky top-0 z-[100] bg-white/80 backdrop-blur-xl border-y border-dark/15 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="py-3 md:py-6 flex items-center justify-between">
            <div className="relative group">
              <div className="flex items-center gap-4 pl-6 pr-4 py-4 bg-ivory border border-primary/30 rounded-xl hover:border-primary transition-all duration-500 cursor-pointer shadow-sm">
                <i className="fa-solid fa-arrow-down-wide-short text-primary text-[10px]"></i>
                <select 
                  id="diamondSort" 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="appearance-none bg-transparent text-[10px] font-bold uppercase tracking-[0.25em] text-text/70 outline-none cursor-pointer pr-6 focus:ring-0 border-none leading-none"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>
                <div className="absolute right-4 pointer-events-none">
                  <i className="fa-solid fa-chevron-down text-[7px] text-dark mb-4 group-hover:text-primary transition-colors"></i>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 pl-10 border-l border-gold/40">
              <div className="flex flex-col items-end leading-tight">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-text/70 mb-0.5">Authentication</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">IGI & GIA Verified</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-rose/50 flex items-center justify-center border border-gold/10 shadow-inner group-hover:rotate-[360deg] transition-all duration-1000">
                <i className="fa-solid fa-diamond text-primary text-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-ivory pt-10 md:pt-13 lg:pt-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-14" id="diamond-grid">
            {sortedDiamonds.map((item, index) => (
              <div 
                key={index} 
                className="diamond-card group flex flex-col h-full bg-white border border-primary/15 rounded-[2rem] md:rounded-[3rem] p-4 md:p-6 transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(155,17,30,0.12)] hover:border-primary/20 hover:-translate-y-2 text-left" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <Link 
                  to={`/product-detail?name=${encodeURIComponent(item.name)}&price=${item.price}&img=${encodeURIComponent(item.img)}`}
                  className="block"
                >
                  <div className="h-48 sm:h-64 lg:h-80 w-full mb-6 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-ivory/40 flex items-center justify-center relative shrink-0 shadow-inner">
                    <img 
                      src={`/images/${item.img}`} 
                      alt={item.name} 
                      className="w-full h-full object-contain p-8 md:p-12 group-hover:scale-110 transition-transform duration-[2s] bg-white border border-gold/50 rounded-2xl" 
                    />
                    
                    <div className="absolute top-4 left-6 py-1 px-3 bg-white/90 backdrop-blur-sm border border-gold/10 rounded-full opacity-100 transition-all duration-500 shadow-sm">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-gold">{item.tag}</span>
                    </div>
                  </div>

                  <div className="text-center px-2">
                    <h3 className="font-serif text-lg md:text-2xl text-text leading-tight capitalize min-h-[3rem]">{item.name}</h3>
                  </div>
                </Link>

                <div className="flex flex-col flex-grow text-center px-2">
                  <div className="flex items-center justify-center gap-3 mt-2 mb-6">
                    <div className="h-[1px] w-4 bg-gold/80"></div>
                    <span className="font-bold text-lg text-dark/90">₹{item.price.toLocaleString('en-IN')}</span>
                    <div className="h-[1px] w-4 bg-gold/80"></div>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-center gap-4">
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gold/30 flex items-center justify-center bg-primary text-white hover:bg-dark transition-all duration-300 shadow-sm"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <Link 
                      to="/contact" 
                      className="flex-grow py-3 bg-dark text-white rounded-xl sm:rounded-2xl text-[7px] sm:text-[9px] font-bold uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-lg text-center"
                    >
                      book now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />
    </>
  );
}
