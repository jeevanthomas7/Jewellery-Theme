import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Testimonial from '../components/sections/Testimonial';
import FaqSection from '../components/sections/FaqSection';

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  
  const name = searchParams.get('name') || 'Bespoke Luxury Jewel';
  const rawPrice = searchParams.get('price');
  const basePrice = rawPrice ? parseInt(rawPrice, 10) : 145000;
  const initialImg = searchParams.get('img') || 'works/1.webp';

  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(initialImg);

  const totalPrice = basePrice * quantity;

  const handleQtyChange = (change) => {
    setQuantity((prev) => {
      const newVal = prev + change;
      return newVal >= 1 ? newVal : 1;
    });
  };

  const thumbs = [
    'works/1.webp',
    'works/2.webp',
    'works/3.webp'
  ];

  return (
    <>
      <section className="bg-ivory pt-12 md:pt-16 lg:pt-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-text/40 mb-12 text-left animate-fade-in" data-aos="fade-right">
            <Link to="/">Home</Link> <span>/</span> <Link to="/collections">Collections</Link> <span>/</span> <span className="text-gold">{name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Gallery Left */}
            <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
              <div className="flex md:flex-col gap-4 order-2 md:order-1">
                {thumbs.map((thumb, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedImg(thumb)}
                    className={`w-20 h-20 rounded-2xl border overflow-hidden bg-white p-2 cursor-pointer transition-all shadow-sm ${
                      selectedImg === thumb ? 'border-primary' : 'border-dark/15 hover:border-primary'
                    }`}
                  >
                    <img src={`/images/${thumb}`} className="w-full h-full object-contain" alt="Thumbnail" />
                  </div>
                ))}
              </div>
              <div className="flex-grow order-1 md:order-2 aspect-square bg-white rounded-[3rem] border border-gold/30 shadow-sm overflow-hidden flex items-center justify-center relative group">
                <img 
                  src={`/images/${selectedImg}`} 
                  className="w-full h-full object-contain p-12 transition-transform duration-[2s] group-hover:scale-125 bg-white" 
                  alt={name}
                />
                <div className="absolute top-8 right-8">
                  <button className="w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500">
                    <i className="fa-regular fa-heart text-xl"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Info Right */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 text-left">
              <div className="space-y-4" data-aos="fade-left">
                <span className="text-gold font-bold tracking-[0.4em] text-[10px] uppercase block">Exclusive Boutique Piece</span>
                <h1 className="font-serif text-4xl md:text-5xl text-text leading-tight tracking-tighter">{name}</h1>
                <p className="text-text/60 text-lg leading-relaxed font-medium">A testament to timeless elegance, meticulously hand-forged by our master artisans.</p>
              </div>

              <div className="border-y border-gold/10 py-3 space-y-6" data-aos="fade-left" data-aos-delay="100">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex flex-col">
                    <span id="display-price" className="text-4xl font-serif text-dark/90 font-bold transition-all duration-300">
                      ₹{totalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-text/30 line-through text-sm mt-0">
                      MRP ₹{(totalPrice * 1.2).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="mr-auto text-[8px] lg:text-[10px] font-bold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-widest shadow-sm shadow-primary/20">Limited Offer</span>
                </div>

                <div className="flex items-center justify-between bg-rose/20 p-3 rounded-2xl border border-dark/15">
                  <span className="text-[11px] font-bold text-text uppercase tracking-widest">Quantity</span>
                  <div className="flex items-center gap-4 bg-white rounded-xl border border-gold/20 p-1 shadow-sm">
                    <button 
                      onClick={() => handleQtyChange(-1)} 
                      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-rose/40 text-text transition-all focus:outline-none"
                    >
                      <i className="fa-solid fa-minus text-[10px]"></i>
                    </button>
                    <input 
                      type="number" 
                      value={quantity} 
                      min="1" 
                      readOnly 
                      className="w-8 text-center bg-transparent font-bold text-text border-none focus:ring-0 text-sm"
                    />
                    <button 
                      onClick={() => handleQtyChange(1)} 
                      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-rose/40 text-text transition-all focus:outline-none"
                    >
                      <i className="fa-solid fa-plus text-[10px]"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-0" data-aos="fade-left" data-aos-delay="200">
                <div className="bg-rose/40 border border-gold/20 p-5 rounded-2xl shadow-sm">
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-gold mb-2">Metal Purity</h4>
                  <p className="text-sm font-bold text-text">22KT (916) Gold</p>
                </div>
                <div className="bg-rose/40 border border-gold/20 p-5 rounded-2xl shadow-sm">
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-gold mb-2">Certification</h4>
                  <p className="text-sm font-bold text-text">IGI & GIA Verified</p>
                </div>
              </div>

              <div className="space-y-4 pt-0 animate-fade-in" data-aos="fade-up" data-aos-delay="100">
                <a 
                  href="https://wa.me/5245853645" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-4 bg-green-500 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[12px] shadow-xl hover:bg-dark transition-all duration-500 transform hover:-translate-y-1"
                >
                  <i className="fab fa-whatsapp text-xl"></i> Inquiry On WhatsApp
                </a>
                <button className="group relative w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[12px] overflow-hidden transition-all duration-500 shadow-xl shadow-primary/20 hover:scale-[1.02]">
                  <div className="absolute inset-0 w-0 bg-dark group-hover:w-full transition-all duration-500 ease-out"></div>
                  <span className="relative z-10">Add To Cart</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Testimonial />
      <FaqSection />
    </>
  );
}
